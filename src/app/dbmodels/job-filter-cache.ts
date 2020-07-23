export class JobFilterCache{
    jobArea:number = 0;
    skillID:string = "";
    address:string = "";
    latitude:string = "";
    longitude:string = "";
    km_radius:number = 5000;
    status:string = "Active";

    //Complex Filters
    job_type: number[];
    job_types:string = "";
    online_status:string = "";
    selected_skills_arr:number[];
    //selected_skills:string = "";

    min_salary:number= 0;
    max_salary:number= 0;

    salary_type: string = "";
    currency: string = "USD";
    sort_by: string = "RELEVANCE";
    work_experience_min:number = 0;
    work_experience_max:number = 10;
    salary_range:{"lower":0,"upper":5};

    constructor(){

    }
}