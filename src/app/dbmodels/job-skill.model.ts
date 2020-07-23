import { ShellModel } from '../shell/data-store';

export class JobSkillModel extends ShellModel {
    id: number;
    parent_id:number;
    parent_name:string;
    title: string;
    image:string;
    grafter_type: string;
    enabled: string;
    skill_desc: string;
    qcode:string;

    numJobs:number;
    numFavourites:number;
    numProfessionals:number;
    isLiked:number;
}

export class JobSkillCreateModel extends ShellModel {
    id: number;
    parent_id:number;
    title: string;
    image:string;
    grafter_type: string;
    enabled: string;
    skill_desc: string;
}

export class JobSkillListingModel extends ShellModel {
    items: Array<JobSkillModel> = [
      new JobSkillModel(),
      new JobSkillModel(),
      new JobSkillModel(),
      new JobSkillModel()
    ];
  
    constructor() {
      super();
    }

    public getItems() : Array<JobSkillModel>{
      return this.items;
    }

    public setItems(itemsSent:Array<JobSkillModel>){
       this.items = itemsSent;
    }
}

export class JobSkillDetailModel extends JobSkillModel{
  num_resources: string;
  num_likes: string;

  constructor() {
    super();
  }
}