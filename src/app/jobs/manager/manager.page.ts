import { Component, OnInit, HostBinding } from '@angular/core';
import { UserJobModel } from '../../dbmodels/user-jobs-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthConstants } from '../../config/AuthConstants';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../jobs.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: [
    './manager.page.scss',
    './styles/job-tabs.page.scss',
    './styles/job-tabs.shell.scss',
    './styles/job-tabs.md.scss'
  ]
})
export class ManagerPage implements OnInit {
  data: UserJobModel;
  loading:boolean = true;
  segmentValue = 'job_requests';
  JobRequestsList: Array<any>;
  ongoingJobsList: Array<any>;
  completedJobsList: Array<any>;
  searchQuery = '';
  showFilters = false;

  @HostBinding('class.is-shell') get isShell() {
    return (this.data && this.data.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute, 
    private authService: AuthService,
    private jobService: JobService,
    private ngRouter: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const friendsDataStore = resolvedRouteData['data'];

      friendsDataStore.state.subscribe(
        (state) => {
          this.data = state;
          this.JobRequestsList = this.data.job_requests;
          this.ongoingJobsList = this.data.ongoing_jobs;
          this.completedJobsList = this.data.completed_jobs;
          this.loading = false;
        },
        (error) => {}
      );
    },
    (error) => {});

    this.route.params.subscribe(params => {
      if(params['tab']){
        this.segmentValue = params['tab'];
      }
      });

  }

  segmentChanged(ev): void {
    this.segmentValue = ev.detail.value;
    this.searchList();
  }

  searchList(): void {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';

    if (this.segmentValue === 'job_requests') {
      this.JobRequestsList = this.filterList(this.data.job_requests, query);
    } else if (this.segmentValue === 'ongoing_jobs') {
      this.ongoingJobsList = this.filterList(this.data.ongoing_jobs, query);
    } else if (this.segmentValue === 'completed_jobs') {
      this.completedJobsList = this.filterList(this.data.completed_jobs, query);
    }
  }

  filterList(list, query): Array<any> {
    return list.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }

  goToPostNewJob(){
    this.ngRouter.navigate(['post-new-job']);
  }

  loadJobs(){
    this.loading = true;
    this.authService.getAuthCache().then(results =>{
      if(results){
        this.jobService.getJobManagerDataSource(results.api_key).subscribe(state=>{
          if(state){
          this.data = state;
          this.JobRequestsList = this.data.job_requests;
          this.ongoingJobsList = this.data.ongoing_jobs;
          this.completedJobsList = this.data.completed_jobs;
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
