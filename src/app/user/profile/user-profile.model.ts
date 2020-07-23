import { ShellModel } from '../../shell/data-store';
import { WorkReviewModel } from '../../dbmodels/work-review-model';

export class UserSkillModel extends ShellModel {
  id: string;
  title: string;

  constructor() {
    super();
  }
}

// export class UserCRUDModel {
//   id: string;
//   first_name: string;
//   last_name: string;
//   user_image: string;
//   role_id: number; // timestamp
//   grafter_type: number;
//   city:string;
//   country: string;
//   address: string;
//   pincode:string;
//   latitude: string;
//   longitude:string;

//   dob: string;
//   mobile:string;
//   user_name: string;
//   email:string;
//   status:string;
// }


export class BluspecUserModel extends ShellModel {
  id: number;
  first_name: string = '';
  last_name: string = '';
  user_name:string;
  email: string;
  mobile: string;
  user_image:string;
  dob: string; 
  role_id:number;
  grafter_type:number;
  city:string;
  country:string;
  password:string;
  autogen_pass:boolean;
  about:string;
  address:string;
  latitude:string;
  longitude:string;
  pincode:string;
  status:string;
  selected_skills :string;
  online_status: string;
  tagline:string;
  description: string;
  date_created:string;
  last_active:string;

  jobDone: number;
  avgRating: number;
  numReviews: number;

  //Other Advanced Variables
  distance:string;
  totalExpInYrs:number;


  //selected_skills : Array<BluspecSkillModel>;
  
  constructor() {
    super();
    this.first_name = 'Full';
    this.last_name = 'Name';
  }

}

export class UserProfileModel extends BluspecUserModel {
  
  skills: Array<{
    id: string, title: string, numEndorsement: number}> = [
      {id:'', title:'', numEndorsement:0},
      {id:'', title:'', numEndorsement:0},
      {id:'', title:'', numEndorsement:0},
     {id:'', title:'', numEndorsement:0}
  ];

  education_details: Array<{
    id: string, title: string, level_name:string, study_area_name: string, organization: string, yoj: string, yop: string, score: string, score_type:string}> = [
      {id: '', title: '', level_name:'', study_area_name:'',  organization: '', yoj: '', yop: '', score: '', score_type:''},
      {id: '', title: '', level_name:'', study_area_name:'', organization: '', yoj: '', yop: '', score: '', score_type:''},
      {id: '', title: '', level_name:'', study_area_name:'', organization: '', yoj: '', yop: '', score: '', score_type:''}
  ];
  
  // work_experiences: Array<{
  //   id: string, title: string, votesCount: string}> = [
  //    {id:'', title:'', votesCount:''},
  //    {id:'', title:'', votesCount:''},
  //    {id:'', title:'', votesCount:''}
  // ];

  // work_experiences: Array<{
  //   id: string, company: string, startDate: string, endDate: string, current: string, duration: string,
  //   role: string, responsibility: string, timestamp:string, date_updated:string}> = [
  //    {id:'', company:'', startDate:'', endDate:'', current:'', duration:'', role:'', responsibility:''
  //   , timestamp:'', date_updated:''},
  //   {id:'', company:'', startDate:'', endDate:'', current:'', duration:'', role:'', responsibility:''
  //   , timestamp:'', date_updated:''}
  // ];

  reviews: Array<WorkReviewModel> = [];

  constructor() {
    super();
  }

}
