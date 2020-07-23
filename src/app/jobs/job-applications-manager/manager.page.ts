import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicationsManagerModel } from '../../dbmodels/job-applications-manager-model';
import { ViewJobApplicationModal } from './view-job-application/view-job-application.modal';
import { JobApplicationModel } from '../../dbmodels/job-application.model';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../jobs.service';
import { AuthConstants } from '../../config/AuthConstants';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: [
    './styles/job-tabs.page.scss',
    './styles/job-tabs.shell.scss',
    './styles/job-tabs.md.scss'
  ]
})
export class JobApplicationsManagerPage implements OnInit {
  data: JobApplicationsManagerModel;
  jobCode:any;
  segmentValue = 'pending';
  JobRequestsList: Array<any>;
  ongoingJobsList: Array<any>;
  completedJobsList: Array<any>;
  searchQuery = '';
  showFilters = false;
  loading = true;
  // @HostBinding('class.is-shell') get isShell() {
  //   return (this.data && this.data.isShell) ? true : false;
  // }

  constructor(private route: ActivatedRoute, private ngRouter: Router,
    private authService: AuthService,
    private jobService: JobService,
    private modalController: ModalController) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const friendsDataStore = resolvedRouteData['data'];

      friendsDataStore.state.subscribe(
        (state) => {
          this.data = state;
          this.JobRequestsList = this.data.pending;
          this.ongoingJobsList = this.data.shortlisted;
          this.completedJobsList = this.data.rejected;
          if(AuthConstants.DEV_MODE){
            console.log("JobApplicationsManagerResolver RESOLVED DATA=> "+JSON.stringify(this.data));
          }
          this.loading = false;
        },
        (error) => {}
      );
    },
    (error) => {});

    this.jobCode = this.route.snapshot.params.job_code;
    console.log("JobCode => "+this.jobCode);
  }

  segmentChanged(ev): void {
    this.segmentValue = ev.detail.value;
    this.searchList();
  }

  searchList(): void {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';

    if (this.segmentValue === 'pending') {
      this.JobRequestsList = this.filterList(this.data.pending, query);
    } else if (this.segmentValue === 'shortlisted') {
      this.ongoingJobsList = this.filterList(this.data.shortlisted, query);
    } else if (this.segmentValue === 'rejected') {
      this.completedJobsList = this.filterList(this.data.rejected, query);
    }
  }

  filterList(list, query): Array<any> {
    return list.filter(item => item.applicant_name.toLowerCase().includes(query.toLowerCase()));
  }

  async openJobApplicationDialog(jobApplication: JobApplicationModel) {
    const modal = await this.modalController.create({
      component: ViewJobApplicationModal,
      //cssClass: 'mini-modal',
      componentProps: {
        'jobApplication': jobApplication
      }
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.loadAllApplications();
      }
    });
    await modal.present();
   }

   loadAllApplications(){
    this.loading = true;
    this.authService.getAuthCache().then(results =>{
      if(results){
        let postData = {
          job_id: this.jobCode
        }
        this.jobService.getJobApplicationsManagerDataSource(results.api_key, postData).subscribe(state=>{
          if(state){
            this.data = state;
            this.JobRequestsList = this.data.pending;
            this.ongoingJobsList = this.data.shortlisted;
            this.completedJobsList = this.data.rejected;
            if(AuthConstants.DEV_MODE){
              console.log("JOB MANAGER REFRESHED DATA=> "+JSON.stringify(this.data));
            }
             this.loading = false;
          }
        });
      }
    });
  }

}
