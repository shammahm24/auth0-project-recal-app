import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QrserviceService {
  
  socket;
  URL
  constructor(private http: HttpClient) { 
    this.URL = environment.qrurl
  }

  postUserData(uid, data){
    return this.http.post(this.URL,{userId:uid, code:data})
  }
}
