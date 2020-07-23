import { Component, OnInit, HostBinding } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { UpdateJobSkillModal } from '../update/update-job-skill.modal';
import { JobSkillDetailModel } from '../../../dbmodels/job-skill.model';
import { JobSkillsService } from '../job-skills.service';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { ToastService } from '../../../services/toast.service';
import { AuthConstants } from '../../../config/AuthConstants';

@Component({
  selector: 'app-job-skill-details',
  templateUrl: './job-skills-details.page.html',
  styleUrls: [
    '../../../bluspecstyles/details.page.scss',
    '../../../bluspecstyles/details.shell.scss'
  ],
})
export class JobSkillsDetailsPage implements OnInit {
  user: JobSkillDetailModel;
  item_id:any;
  localUser:LocalUser;

 // relatedUsers: Array<FirebaseListingItemModel> & ShellModel;
  @HostBinding('class.is-shell') get isShell() {
    return ((this.user && this.user.isShell)) ? true : false;
  }

  constructor(
    public firebaseService: JobSkillsService,
    public modalController: ModalController,
    public router: Router,
    private toastService: ToastService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

      this.route.paramMap.subscribe(params => {
        this.item_id = params.get("id");
        //alert(this.item_id);
        if(this.item_id <= 0){
          this.router.navigate(['page-not-found']);
        }
        });

   
    var postData = {
      item_id: this.item_id,
      sort_by: 0
      };

      this.authService.getAuthCache().then(promisedValue=>{
        if(promisedValue){
          this.localUser = promisedValue;
        this.firebaseService.getDetailsDataSource(this.localUser.api_key, postData).subscribe(
          (res: any) => {
           if(res){
            if(AuthConstants.DEV_MODE){
              console.log("Job Skill Profile: "+JSON.stringify(res)); 
            }
            this.user = res;
            if (res.error) {
              //this.router.navigate(['page-not-found']);
              this.toastService.presentToast("Error Response "+JSON.stringify(res));
            }
           }
          },
          (error: any) => {
          console.log('Looks like there is a Network Issue.');
          }
          );
        }
      });
  }

  async openItemUpdateModal() {
    const modal = await this.modalController.create({
      component: UpdateJobSkillModal,
      componentProps: {
        'user': this.user
      }
    });
    await modal.present();
  }

}
