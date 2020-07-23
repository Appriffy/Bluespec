import { ShellModel } from '../shell/data-store';

export class UserSkillSetModel extends ShellModel {
    id: number;
    user_id:number;
    skill_type:number;
    skill_type_name: string;
    proficiency:number;
    proficiency_val:string;
    timestamp: string;
    numEndorsement:number;
    isEndorsed:boolean;
}