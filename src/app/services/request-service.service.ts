import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http: HttpClient) { }

  postHttpCall(url:String, body: any) {
    console.log("Calling URL = "+ environment.baseUrl + url);
    return this.http.post(environment.baseUrl + url, body);
  }

  getHttpCall(url:String){
    console.log("Calling URL = " + environment.baseUrl + url);
    return this.http.get(environment.baseUrl + url);
  }

  

  
 
}
