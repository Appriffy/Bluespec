import { Component, OnInit, Input } from '@angular/core';
import { JobSkillModel } from '../../dbmodels/job-skill.model';
import { LocalUser } from '../../dbmodels/local-user';
import { NavController, ModalController } from '@ionic/angular';
import { MasterService } from '../../services/master.service';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { AuthConstants } from '../../config/AuthConstants';
import { JobAreaModel } from '../../dbmodels/job-areas';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';

@Component({
  selector: 'app-select-job-skill',
  templateUrl: './select-job-skill.page.html',
  styleUrls: ['./select-job-skill.page.scss',
  '../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss'],
})
export class SelectJobSkillPage implements OnInit {
   @Input() multiple = false;
   @Input() selectedJobArea : JobAreaModel;
   @Input() filterArr: [];
  listing: JobSkillModel[];
  filtered_listing: JobSkillModel[];
  searchQuery: string;
  loading : boolean = true;
  selectedSkills: Array<JobSkillModel> = new Array();
  displayIDs: any;
  localUser:LocalUser;

  addSkillsForm: FormGroup;

  constructor(public navCtrl: NavController, private masterService: MasterService,
    private storageService: StorageService,
    private modalController:ModalController,
    private authService: AuthService) {
      this.authService.getAuthCache().then(promisedValue=>{
        this.localUser = promisedValue;
      });
  }

  ngOnInit() {
    //console.log("SelectedJobArea Received: "+JSON.stringify(this.selectedJobArea));
    //console.log("filterArr Received: "+this.filterArr);

    this.addSkillsForm = new FormGroup({
      skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1))
    });

    this.storageService.get(AuthConstants.JOB_SKILLS).then(allList=>{
      if(allList){
         this.listing = allList;
         this.filtered_listing = allList;
         this.loading = false;
         console.log("All Job Skills : "+JSON.stringify(allList));

         if(this.selectedJobArea !== null && this.selectedJobArea !== undefined){
          console.log("Filtering for Single Job Area : "+this.selectedJobArea.id+" among "+allList.length);
          //this.listing = this.listing.find(item => item.parent_id === this.selectedJobArea);
          allList = allList.filter(item => item.parent_id === this.selectedJobArea.id);

          this.listing = allList;
          this.filtered_listing = allList;
          console.log("Total Filtered : "+allList.length);

          this.listing.map((item) => {
            (this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
          });

         }
      }
    });
  }

  get skillsFormArray() { return <FormArray>this.addSkillsForm.get('skills'); }

  loadItems(){
    this.loading = true;
   this.masterService.getSkills().subscribe(allData=>{
    this.loading = false;
     if(allData){
      this.listing = allData.result;
      this.filtered_listing = allData.result;
     }
   });
  }

  initializeItems() {
    this.listing = this.filtered_listing;
  }

 /****************** SEARCH ITEMS ********************/
 searchList() {
  console.log("#####: searchList => "+this.searchQuery);
  this.initializeItems();
   this.listing = this.listing.filter((thisJob) => {
    return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
  });

  this.updateFormArrayDisplay();
}

updateFormArrayDisplay(){
  const control = <FormArray>this.addSkillsForm.controls.skills;
  for(let i = control.length-1; i >= 0; i--) {
    control.removeAt(i)
  }

  //(this.addSkillsForm.controls.skills as FormArray).reset();
  this.listing.map((item) => {
    (this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
  });
}
/****************** SEARCH ITEMS ********************/

dismissModal(item: any) {
  //alert(item.title+" "+this.multiple);
  this.modalController.dismiss(item);
}

closeModal() {
  this.modalController.dismiss();
}

 containsObject(obj: JobSkillModel, list:JobSkillModel[]) {
  if(list && list.length > 0){
    let i;
  for (i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
          return true;
      }
  }
  }
  return false;
}

onJobSkillSelected(thisSkill:any){
  console.log("#####: onJobAreaSelected "+JSON.stringify(thisSkill));
  
  if(this.containsObject(thisSkill, this.selectedSkills)){
  //if(this.selectedSkills.some(person => person.id === thisSkill.id)){
    console.log("#####: Exists Already ");
    //this.selectedSkills.pop();
  }else{
    this.selectedSkills.push(thisSkill);
    console.log("#####: Doesnt Exist ");
  //   this.selectedSkills = this.selectedSkills.filter(function( obj ) {
  //     return obj.id !== thisSkill.id;
  // });
  }
   //this.skills = this.skillsHolder;
  //this.skills = this.skills.map(item => item.parent_id === jobAreas.id);
   //this.skills = this.skills.find(item => item.parent_id === jobArea);
   console.log("#####: FINAL SELECTION =>  "+JSON.stringify(this.selectedSkills));
}

processMultipleSelection(){
  let displayNames = Array.prototype.map.call(this.selectedSkills, function(item) { return item.title; }).join(", ");
  this.displayIDs = Array.prototype.map.call(this.selectedSkills, s => s.id).toString();
  console.log("#####: FINAL displayNames =>  "+displayNames);
  console.log("#####: FINAL displayIDs =>  "+this.displayIDs);
  let resultArr = [];
  resultArr["id"] = this.displayIDs;
  resultArr["title"] = displayNames;
  this.modalController.dismiss(resultArr);
}

isSkillSelected(id:number){
  this.selectedSkills.forEach( (element) => {
    if(element.id == id){
return true;
    }
});
return false;
}

}
