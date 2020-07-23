import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { IonSlides, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: [
    './styles/getting-started.page.scss',
    './styles/getting-started.shell.scss',
    './styles/getting-started.responsive.scss'
  ]
})
export class GettingStartedPage implements OnInit, AfterViewInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  @HostBinding('class.last-slide-active') isLastSlide = false;

  gettingStartedForm: FormGroup;
  jobAreas:[];
  selectedJobAreas = [];

  constructor(public menu: MenuController, 
    private masterService: MasterService, public router: Router, public storageService : StorageService) {
    this.gettingStartedForm = new FormGroup({
      role_id: new FormControl('0'),
      jobAreas: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1))
    });
  }

  onJobAreaSelected(thisjobArea:any){
    const selectedJobAreasArr = [];
    this.gettingStartedForm.value.jobAreas
    .map((value: any, index: number) => {
      if (value) {
        selectedJobAreasArr.push(thisjobArea.id);
      }
    });
    this.selectedJobAreas = selectedJobAreasArr;

console.log("selectedJobAreas - "+this.selectedJobAreas);
    
// this.cachedData.selected_skills = selectedSkills.toString();
// this.registrationService.setCachedData(this.cachedData);
//     this.router.navigate(['set-location']);
  }

  ngOnInit(): void {
    this.menu.enable(false);

     /******** START FETCH JOB AREAS *******/ 
     this.masterService.getJobAreas().subscribe(
      (res: any) => {
        if (!res.error) {
      console.log("JOB AREAS: "+JSON.stringify(res));
     this.jobAreas = res.result;
this.jobAreas.map((item) => {
  (this.gettingStartedForm.controls.jobAreas as FormArray).push(new FormControl());
  
});

      }
      },
      (error: any) => {
      alert('Looks like there is a Network Issue while fetching job areas.');
      }
      );
     /******** ENDS FETCH JOB AREAS *******/ 

  }

  ngAfterViewInit(): void {
    this.slides.lockSwipes(true);
    // ViewChild is set
    this.slides.isEnd().then(isEnd => {
      this.isLastSlide = isEnd;
    });

    // Subscribe to changes
    this.slides.ionSlideWillChange.subscribe(changes => {
      this.slides.isEnd().then(isEnd => {
        this.isLastSlide = isEnd;
      });
    });
  }

  roleSelected(role : number){
    //alert(role);
    if(role == 2){
      this.storageService.store("selected_role", 2);
      // this.slides.lockSwipes(false);
      // this.slides.slideTo(2);
      // this.slides.lockSwipes(true);
      //this.router.navigate(['walkthrough']);
    }else{
      this.storageService.store("selected_role", 3);
      // this.slides.lockSwipes(false);
      // this.slides.slideTo(1);
      // this.slides.lockSwipes(true);
      //this.router.navigate(['recruiter-walkthrough']);
    }
    //console.log("selected_role Set as: "+get("selected_role"));
    this.router.navigate(['/auth/signup']);
  }

  grafterTypeSelected(grafterType : number){
    alert(grafterType);
    if(grafterType == 2){
      this.storageService.store("selected_grafter_type", 2);
      this.router.navigate(['dashboard']);
    }else{
      this.storageService.store("selected_grafter_type", 1);
      this.router.navigate(['dashboard']);
    }
  }

}
