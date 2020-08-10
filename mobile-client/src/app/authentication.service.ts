import { Injectable, NgZone } from '@angular/core';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';

import Auth0Cordova from '@auth0/cordova';
import * as auth0 from 'auth0-js';
import { environment } from 'src/environments/environment';

const auth0Config = {
  // needed for auth0
  clientID: 'D7NMhqAdPkQmoCk2ufC94TXkpXR50D8i',

  // needed for auth0cordova
  clientId: 'D7NMhqAdPkQmoCk2ufC94TXkpXR50D8i',
  domain: 'dev-bl4737ou.us.auth0.com',
  callbackURL: location.href,
  packageIdentifier: 'io.ionic.starter'
};

declare let cordova: any;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  Auth0 = new auth0.WebAuth(auth0Config);
  Client = new Auth0Cordova(auth0Config);
  accessToken: string;
  user: any;
  loggedIn: boolean;
  loading = true;

  signupURL:string

  constructor(private http:HttpClient, public zone: NgZone, private storage: NativeStorage, private safariViewController: SafariViewController) {    
    this.signupURL = environment.signupurl
    this.storage.getItem('profile').then(user => this.user = user, error=>console.log('get Error', error));
    this.storage.getItem('access_token').then(token => this.accessToken = token, error=>console.log('get Error', error));
    console.log('user', this.user)
    this.storage.getItem('expires_at').then(exp => {
      if(exp){
        this.loggedIn = Date.now() < JSON.parse(exp);
        this.loading = false;
      }
    }, error=>{
      this.storage.setItem('initial', true)
      this.storage.setItem('map_initial', true)
      this.login()  
    });
  }

  login() {
    this.loading = true;
    const options = {
      scope: 'openid profile offline_access'
    };
    try {
      this.Client.authorize(options, (err, authResult) => {
        if (err) {
          this.zone.run(() => this.loading = false);
          throw err;
        }
        console.log('res',authResult)
        // Set access token
          this.storage.setItem('access_token', authResult.accessToken).then(data=>console.log('stored access token'), err=>console.log('ert', err));
          console.log('access token',this.storage.getItem('access_token'))
          this.accessToken = authResult.accessToken;
          // Set access token expiration
          const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
          this.storage.setItem('expires_at', expiresAt).then(data=>console.log('exp stored'),err=>console.log("err",err));
          // Set logged in
          this.loading = false;
          this.loggedIn = true;
          // Fetch user's profile info
         
          this.Auth0.client.userInfo(this.accessToken, (err, profile) => {
            console.log('fetching user info', profile)
            if (err) {
              console.log('got error',err)
              throw err;
            }
            this.updataBackend(profile['sub'].replace('|','')).subscribe(data=>{
              console.log(data),
              err=>console.log(err)
            })
            this.storage.setItem('profile', profile).then(val =>
              this.zone.run(() => this.user = profile),err=>console.log('prof',err)
            ).catch(e=>console.log('error',e));
          });
      });
    } catch (error) {
      console.log('Major error', error)
    }
    // Authorize login request with Auth0: open login page and get auth results
    
    this.storage.keys().then(
      data => console.log(data),
      error => console.error('then',error)
    ).catch(err=>console.log('catch',err));
  }

  updataBackend(user){
    return this.http.post(this.signupURL,{uid:user})
  }

  logout() {
    this.storage.remove('profile');
    this.storage.remove('access_token');
    this.storage.remove('expires_at');
    this.storage.remove('initial');
    this.storage.remove('map_initial');
    this.storage.clear()
    this.accessToken = null;
    this.user = null;
    this.loggedIn = false;
    this.login()
  }
}
