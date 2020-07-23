import { Component, OnInit, Input } from '@angular/core';
import { JobAreaModel } from '../../dbmodels/job-areas';
import { AuthConstants } from '../../config/AuthConstants';
import { NavController, ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { StudyAreaModel } from '../../dbmodels/study-area';
import { LocalUser } from '../../dbmodels/local-user';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MasterService } from '../../services/master.service';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';

@Component({
  selector: 'app-select-study-area',
  templateUrl: './select-study-area.page.html',
  styleUrls: ['../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss']
})
export class SelectStudyAreaPage implements OnInit {
  @Input() multiple = false;
  @Input() selected_education_level : number;
 listing: StudyAreaModel[];
 filtered_listing: StudyAreaModel[];
 searchQuery: string;
 loading : boolean = true;
 selectedSkills: Array<StudyAreaModel> = new Array();
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
   this.addSkillsForm = new FormGroup({
     skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1))
   });

   this.storageService.get(AuthConstants.STUDY_AREAS).then(allList=>{
     if(allList){
        this.listing = allList;
        this.filtered_listing = allList;
        this.loading = false;
        if(AuthConstants.DEV_MODE){
          console.log("All Study Areas : "+JSON.stringify(allList));
        }

        if(AuthConstants.DEV_MODE){
          console.log("Selected_education_level : "+this.selected_education_level+" among "+allList.length);         
           }

        if(this.selected_education_level > 0){
          if(AuthConstants.DEV_MODE){
         console.log("Filtering for Single Area : "+this.selected_education_level+" among "+allList.length);         
          }
          allList = allList.filter(item => item.education_level === this.selected_education_level);

         this.listing = allList;
         this.filtered_listing = allList;

         if(AuthConstants.DEV_MODE){
         console.log("Total Filtered : "+allList.length);
         }
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

containsObject(obj: StudyAreaModel, list:StudyAreaModel[]) {
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
 if(this.containsObject(thisSkill, this.selectedSkills)){
   console.log("#####: Exists Already ");
 }else{
   this.selectedSkills.push(thisSkill);
   console.log("#####: Doesnt Exist ");
 }
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
