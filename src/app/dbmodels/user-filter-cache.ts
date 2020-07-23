export class UserFilterCache{
    role_id:number = 3;
    status:string = "Active";
    latitude:string = "";
    longitude:string = "";
    search_radius:number = 1000;
    online_status:string = "";
    //search_location:string = "";
    selected_skills_arr:[number];
    //selected_skills: [any];
    //selected_skills: any;
    selected_skills:string = "";
    address:string = "";
    work_experience_min:number = 0;
    work_experience_max:number = 10;
    rating_range:{"lower":0,"upper":5};
}