import { ShellModel } from '../shell/data-store';

export class CompanyModel extends ShellModel {
    id: number;
    user_id:number;
    title: string;
    tagline: string;
    website: string;
    description: string;
    logo: string;
    video_url: string;
    is_published: boolean;
    numJobs:number;

    
  linkedin:string;
  fb_link:string;
  twitter_link:string;
  
    qcode: string;
    date_created: string;
    date_updated: string;
    jobAreas: any[];
}

export class CompanyCreateModel extends ShellModel {
  id: number;
  user_id:number;
  title: string;
  tagline: string;
  website: string;

  address: string;
  country: string;
  phone: string;
  distance:number;

  description: string;
  logo: string;
  video_url: string;
  is_published: boolean;

  linkedin:string;
  fb_link:string;
  twitter_link:string;

  numJobs:number;
  qcode: string;
  date_created: string;
  date_updated: string;
  jobAreas: any[];
}

export class CompanyListingModel extends ShellModel {
    items: Array<CompanyModel> = [
      new CompanyModel(),
      new CompanyModel(),
      new CompanyModel(),
      new CompanyModel()
    ];
  
    constructor() {
      super();
    }

    // constructor(items: Array<CompanyModel>) {
    //   CompanyListingModel model = new CompanyListingModel();
    //   this.items = items;
    // }

    public getItems() : Array<CompanyModel>{
      return this.items;
    }

    public setItems(itemsSent:Array<CompanyModel>){
       this.items = itemsSent;
    }
}

export class CompanyDetailModel extends CompanyModel{
  fb_link: string;
  twitter_link: string;
  linkedin: string;

  constructor() {
    super();
  }
}