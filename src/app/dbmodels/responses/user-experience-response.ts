import { EducationDetailsModel } from '../../user/education-details/education-details.model';
import { UserWorkExperienceModel } from '../user-work-experience.model';

export interface WorkExperienceResponse{
    result : UserWorkExperienceModel[];
    message: string;
    totalExperience: string;
}

