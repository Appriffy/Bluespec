import { EducationDetailsModel } from '../../user/education-details/education-details.model';
import { UserWorkExperienceModel } from '../user-work-experience.model';
import { WorkReviewModel } from '../work-review-model';

export interface WorkReviewsResponse{
    result : WorkReviewModel[];
    message: string;
    username: string;
    avgSummary: string;
}

