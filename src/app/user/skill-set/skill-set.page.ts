import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { MasterService } from '../../services/master.service';
import { UserService } from '../user.service';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthService } from '../../services/auth.service';
import { UserSkillSetModel } from '../../dbmodels/user-skill-set';
import { FormGroup } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.page.html',
  styleUrls: ['./skill-set.page.scss'],
})
export class SkillSetPage implements OnInit {
  skills = [];
  user_profile_id : any;
  selfView :boolean = false;
  skillsHolder = Array<UserSkillSetModel>();
  thisUserID : number;
  localUser: LocalUser;
  skillSetForm : FormGroup;
  loading = true;
showControls = false;

  constructor(private masterService: MasterService, private userService: UserService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public menu: MenuController,
    private authService: AuthService,
    public toastService: ToastService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public storageService: StorageService) { }


    ionViewWillEnter() {
      this.menu.enable(true);
    }

  ngOnInit() {
    this.menu.enable(false);

       
    this.skillSetForm = new FormGroup({
   
    });

    this.authService.getAuthCache().then(promised=>{
      if(promised){
    this.localUser = promised;
    this.thisUserID = this.localUser.id;
    this.user_profile_id = this.localUser.id;
 this.activatedRoute.paramMap.subscribe(params => {
  if(params && params.has("user_id")){
    this.user_profile_id = params.get("user_id");
     if(this.user_profile_id == this.localUser.id){
      this.selfView = true;
    }

  }
  });
    this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
      }
    });
  }

  fetchMyJobSkills(apiKey:any, userID:any){
    this.loading = true;
    this.userService.getUserSkillSet(apiKey, userID).subscribe(skillSets =>{
      if(skillSets){
        this.loading = false;
        this.skillsHolder= skillSets.items;
        console.log("Skill Set Fetched: "+JSON.stringify(this.skillsHolder));
      }
    },
    (error: any) => {
     this.loadingController.dismiss();
    this.presentAlert('Looks like there is a Network Issue.'+error.message);
    });
  }

  rangeChange(item:any, range: any) {
    //console.log('range change', range);
    console.log('range change', range.value);
  }

  endorseUser(item:UserSkillSetModel){
    this.triggerEndorseNow(item.skill_type_name, item.skill_type);
  }

  loadItems(){
    if(this.localUser.api_key && this.user_profile_id){
      this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
    }
  }

  async triggerEndorseNow(skillName:any, skillID:any) {
    let userName = " this user";
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do you really want to recommend ' + userName + ' for '+skillName+'?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.presentLoadingWithOptions();
            let postData = {
              'user_id' : this.user_profile_id,
              'selected_skills' : ""+skillID
            }
            this.userService.endorseUserForSkills(this.localUser.api_key, postData)
            .subscribe(
              (res: any) => {
                console.log('####### ENDORSE Result ########## '+JSON.stringify(res));
                this.loadingController.dismiss();
                if (res.error) {
                  this.presentAlert(res.message); 
                  } else {
                    //Refresh the list
                    this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
                    this.toastService.presentToast(res.message);
                    //this.router.navigate(['/hire-people-for-work']);
                  }
              },
              (error: any) => {
               this.loadingController.dismiss();
              this.presentAlert('Looks like there is a Network Issue.');
              }
              );
             
              /********** NAVIGATE WITH USER ID **********/
              // if (this.deleteResult.error) {
              //   this.presentAlert(this.deleteResult.message); 
              //   } else {
              //     this.dismissModal();
              //     console.log('Modal Dismiss Time# '+JSON.stringify(this.deleteResult));
              //     this.router.navigate(['companies/listing']);
              //   }

          }
        }
      ]
    });
    await alert.present();
  }

  getProficiencyVal(id:any){

    switch (id) {
      case 0:
        return "Not Rated";
        break;

      case 1:
        return "Beginner";
        break;

        case 2:
          return "Intermediate";
          break;

          case 3:
            return "Good";
            break;

            case 4:
              return "Proficient";
              break;
              
              case 5:
                return "Expert";
                break;
    
      default:
        return "Average";
        break;
    }
  }

  submitForm(){
    alert(JSON.stringify(this.skillsHolder));
  }

//
  customBackButton(){
    this.router.navigate(['/hire-people-for-work']);
  }

  addMoreSkills(){
    this.router.navigate(["people/assign-skills/"+this.user_profile_id]);
  }

  private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return alert;
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
