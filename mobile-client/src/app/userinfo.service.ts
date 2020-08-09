import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  URL
  constructor(private http: HttpClient) {
    this.URL = environment.resturl
   }

  getUserData(user){
    return this.http.get(this.URL+user)
  }


}
