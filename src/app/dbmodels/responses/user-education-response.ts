import { EducationDetailsModel } from '../../user/education-details/education-details.model';

export interface UserEducationResponse{
    items : Array<EducationDetailsModel>;
    message: string;
    username: string;
}