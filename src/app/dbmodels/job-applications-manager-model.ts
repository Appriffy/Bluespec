import { ShellModel } from '../shell/data-store';
import { JobApplicationModel } from './job-application.model';

export class JobApplicationsManagerModel extends ShellModel {
  pending: Array<JobApplicationModel> = [
    {
        id: 0,
        applicant_id: 0,
        applicant_name: '',
        applicant_image: '',
        user_name: '',
        amount:'',
        salary_type: '',
        delivery_date: '',
        status: '',
        qcode: '',
        comment: '',
        job_id: 0,
        currency: '',
        jobTitle: '',
        jobCode: '',
        date_created: ''
    }
  ];
  shortlisted: Array<JobApplicationModel> = [
    {
        id: 0,
        applicant_id: 0,
        applicant_name: '',
        applicant_image: '',
        user_name: '',
        amount:'',
        salary_type: '',
        delivery_date: '',
        status: '',
        qcode: '',
        comment: '',
        job_id: 0,
        currency: '',
        jobTitle: '',
        jobCode: '',
        date_created: ''
    }
  ];

  rejected: Array<JobApplicationModel> = [
    {
        id: 0,
        applicant_id: 0,
        applicant_name: '',
        applicant_image: '',
        user_name: '',
        amount:'',
        salary_type: '',
        delivery_date: '',
        status: '',
        qcode: '',
        comment: '',
        job_id: 0,
        currency: '',
        jobTitle: '',
        jobCode: '',
        date_created: ''
    },
    {
        id: 0,
        applicant_id: 0,
        applicant_name: '',
        applicant_image: '',
        user_name: '',
        amount:'',
        salary_type: '',
        delivery_date: '',
        status: '',
        qcode: '',
        comment: '',
        job_id: 0,
        currency: '',
        jobTitle: '',
        jobCode: '',
        date_created: ''
    }
  ];

  constructor() {
    super();
  }
}
