import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any, headerOptions:any) {
    // const headers = new HttpHeaders();
    // const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    
    return this.http.post(url, JSON.stringify(data), headerOptions);
    }

    get(serviceName: string, apiKey:string = '') {
      // const headers = new HttpHeaders();
      // const options = { headers: headers, withCredintials: false };
      const url = environment.apiUrl + serviceName;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': apiKey
        })
        };
        //return this.httpService.post('list-users', postData, httpOptions);
      return this.http.get(url, httpOptions);
      }


      
    
}
