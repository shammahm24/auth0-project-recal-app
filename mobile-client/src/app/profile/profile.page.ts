import { Component, AfterViewInit } from '@angular/core';
import {} from '@ionic-native/core'
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthenticationService } from '../authentication.service'
import { UserinfoService } from '../userinfo.service'
import { ViewWillEnter, ViewDidEnter } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit, ViewWillEnter, ViewDidEnter {
  profileimg='https://s.gravatar.com/avatar/310c81f71fdec127bb5c…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fab.png'
  name= 'John'
  email = 'abc@test.com'
  points = '/assets/points.png'
  collected =0
  returned = 0
  point = 0
  disable = true
  pending =0
  constructor(private storage: NativeStorage, private service:UserinfoService, public auth:AuthenticationService) { 
    
  }
  ionViewDidEnter(): void {
    console.log('did enter')
  }

  ngAfterViewInit() {
    
  }

  ionViewWillEnter(){
    console.log('profile', this.storage.getItem('profile'))
    this.storage.getItem('profile').then(data=>{
      this.profileimg = data['picture']
      this.email = data['name']
      this.name = data['nickname']
      let uid = data['sub'].replace('|','')
      console.log(data)
      this.service.getUserData(uid).subscribe(val=>{
        console.log(uid,val)
        this.point=val['user']['points']
        this.collected=parseInt(val['user']['collected']) 
        this.returned=parseInt(val['user']['returned'])
        console.log(this.collected,this.returned)
        this.pending = this.collected-this.returned
      },err=>console.log(err))
    }).catch(err=>console.log(err))
  }

  logout(){
    this.auth.logout()
  }

}
