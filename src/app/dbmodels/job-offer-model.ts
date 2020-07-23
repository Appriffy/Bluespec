import { ShellModel } from '../shell/data-store';

export class JobOfferModel extends ShellModel {
  id: string;
  grafter_id : number;
  grafter_name: string;
  grafter_image: string;
  grafter_rating:string;
  grafter_num_jobs:string;

  job_id: number; 
  job_name:string;
  
  date_created:string;
  start_date:string;
  end_date: string;
  amount: string;
  offer_detail:string;


  constructor() {
    super();
  }
}
