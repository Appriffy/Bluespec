import { ShellModel } from '../../shell/data-store';

export class EducationDetailsModel extends ShellModel {
 
  id:number;
  user_id:number;
  level_id:number;
  level_name:string;
  title:string;
  organization:string;
  yoj:string;
  yop:string;
  is_current:boolean;
  score:string;
  score_type:string;
  study_area:string;
  date_created:string;
  date_updated:string;
  constructor() {
    super();
  }
}

export class EducationDetailsPreviewModel extends EducationDetailsModel {
 
}

export class UserEducationListingModel extends ShellModel {
  items: Array<EducationDetailsModel> = [
    new EducationDetailsModel(),
    new EducationDetailsModel(),
    new EducationDetailsModel(),
    new EducationDetailsModel()
  ];

  constructor() {
    super();
  }
}
