import { ShellModel } from '../shell/data-store';

export class WorkReviewModel extends ShellModel {
    id: number;
    name: string;
    user_id:number;
    user_name:string;
    rating:number;
    review:string;
    publishedAt: string;
    date_updated: string;

    reviewerID:number;
    reviewerName:string;
    reviewerUsername:number;
    reviewerImg:string;
}