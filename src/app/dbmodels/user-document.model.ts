import { ShellModel } from '../shell/data-store';

export class UserDocumentModel extends ShellModel {
    id: number;
    title: string;
    user_id:number;
    user_full_name:string;
    user_name:string;
    document_type_id:number;
    document_type:string;
    file_format:string;
    file_url:string;
    status: string;
    size:string;
    qcode:string;
    date_created: string;
    date_updated: string;
}