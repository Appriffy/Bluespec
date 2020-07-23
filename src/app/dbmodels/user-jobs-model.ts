import { ShellModel } from '../shell/data-store';

export class UserJobModel extends ShellModel {
  job_requests: Array<{
    title: string,
    job_description: string,
    job_area: string,
    job_type: string,
    salary:string;
    salary_type:string;
    status: string,
    date_requested:string,
    numOffers: number}> = [
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        numOffers: 0
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        numOffers: 0
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        numOffers: 0
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        numOffers: 0
    }
  ];
  ongoing_jobs: Array<{
    title: string,
    job_description: string,
    job_area: string,
    job_type: string,
    salary: '',
    salary_type: '',
    status: string,
    progress: string,
    date_requested:string,
    date_approved:string,
    grafter_name:string,
    grafter_image:string,
    expected_delivery: string}> = [
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        progress: '',
        date_requested: '',
        date_approved: '',
        grafter_name: '',
        grafter_image: '',
        expected_delivery: '',
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        progress: '',
        date_requested: '',
        date_approved: '',
        grafter_name: '',
        grafter_image: '',
        expected_delivery: '',
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        progress: '',
        date_requested: '',
        date_approved: '',
        grafter_name: '',
        grafter_image: '',
        expected_delivery: '',
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        progress: '',
        date_requested: '',
        date_approved: '',
        grafter_name: '',
        grafter_image: '',
        expected_delivery: '',
    }
  ];

  completed_jobs: Array<{
    title: string,
    job_description: string,
    job_area: string,
    job_type: string,
    salary: string,
        salary_type: string,
    status: string,
    date_requested:string,
    date_approved:string,
    date_completed:string,
    grafter_name:string,
    grafter_image:string,
    is_rated: boolean,
   rating:number}> = [
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        date_approved: '',
        date_completed: '',
        grafter_name: '',
        grafter_image: '',
        is_rated: false,
        rating: 0
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        date_approved: '',
        date_completed: '',
        grafter_name: '',
        grafter_image: '',
        is_rated: false,
        rating: 0
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        date_approved: '',
        date_completed: '',
        grafter_name: '',
        grafter_image: '',
        is_rated: false,
        rating: 0
    },
    {
        title: '',
        job_description: '',
        job_area: '',
        job_type: '',
        salary: '',
        salary_type: '',
        status: '',
        date_requested: '',
        date_approved: '',
        date_completed: '',
        grafter_name: '',
        grafter_image: '',
        is_rated: false,
        rating: 0
    }
  ];

  constructor() {
    super();
  }
}
