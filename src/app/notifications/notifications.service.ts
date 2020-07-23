import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class NotificationsService {

  invokeListChangeEvent: Subject<any> = new Subject();
  
  constructor(private http: HttpClient) { }

  public getData(api_key:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };

      const apiUrl = 'apis/notifications';
      const url = environment.apiUrl + apiUrl;
      console.log('Just Hitting => '+url+' ====> '+api_key);
      return this.http.get(url, httpOptions);
  }
}
