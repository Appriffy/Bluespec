import { ShellModel } from '../shell/data-store';

export class UserWorkExperienceModel extends ShellModel {
    id: number;
    user_id:number;
    company: string;
    startDate: string;
    endDate: string;
    current: boolean;
    duration: string;
    role: string;
    responsibility: string;
    designation:string;
    qcode:string;
    timestamp: string;
    date_updated: string;
}