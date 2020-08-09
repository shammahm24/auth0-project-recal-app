import { Component, AfterViewInit } from '@angular/core';
import { UserinfoService } from '../userinfo.service'
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements AfterViewInit {
  rewards
  
  constructor(private service:UserinfoService,private storage:NativeStorage) { 
    
  }
  slideOpts= {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true,
    loop: true,
    centeredSlides: true,
  };
  ngAfterViewInit(): void {
    this.storage.getItem('profile').then(data=>{
      let uid=data['sub'].replace('|','')
      this.service.getUserData(uid).subscribe(data=>{
        console.log(data)
        this.rewards=data['user']['points']
      },error=>console.log(error))
    })
  }

  burger = '/assets/burger.jpg'
  pizza='/assets/pizza.jpg'
  choclate = '/assets/chocolate.jpg'
  cupcake='/assets/cupcake.jpg'
  donuts='/assets/donuts.jpg'
  ice_cream='/assets/ice_cream.jpg'

  
}
