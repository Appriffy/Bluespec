import { ShellModel } from '../shell/data-store';

//export class JobApplicationModel extends ShellModel {
    export class JobApplicationModel  {
  id: number;
  applicant_id : number;
  applicant_name: string;
  applicant_image: string;
  user_name:string;
  amount:string;
  salary_type: string; 
  delivery_date:string;
  comment: string;
  qcode:string;
  status:string;
  date_created:string;

  jobCode:string;
  jobTitle: string;
  job_id:number;
  currency:string;

//   constructor() {
//     super();
//   }
}
