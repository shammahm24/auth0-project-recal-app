import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { ModalComponent } from '../map/modal/modal.component'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  
  map_button = '/assets/maps_button.png'
  profile_button='/assets/profile_button.png'
  reward_button='/assets/rewards_button.png'
  splash_screen = '/assets/splash_screen.png'
  slide1 = '/assets/slide1.png'
  slide2 = '/assets/slide2.png'
  outer_c = '/assets/outer_circle.png'
  cam = '/assets/cam.png'
  home_button = '/assets/home_button.png'

  showMe:boolean=true
  @ViewChild('mySlider')  slides: IonSlides;
  prev
  rb
  sb
  pb

  bro
  rafiki
  camera_img='/assets/camera.png'
  locate_blob
  scan_blob
  reward_blob
  profile_blob

  constructor(public modalController: ModalController, public auth:AuthenticationService) {
    
  }

  hide(data){
    if(data=='reward'){
      console.log(this.rb)
      this.rb.style.setProperty('display','none')
      this.prev.style.setProperty('display', 'block')
      this.prev=this.rb
    }else if(data=='scan'){
      this.sb.style.setProperty('display','none')
      this.prev.style.setProperty('display', 'block')
      this.prev=this.sb
    }else if(data=='profile'){
      this.pb.style.setProperty('display','none')
      this.prev.style.setProperty('display', 'block')
      this.prev=this.pb
    }
    
  }

  showMain(){
    let sli=<HTMLElement>document.getElementById('slides');
    let main=<HTMLElement>document.getElementById('main');
    sli.style.setProperty('display','none')
    main.style.setProperty('display','block')

  }

  swipeNext(){
    this.slides.slideNext();
  }
  
  ngAfterViewInit(): void {
    let sli=<HTMLElement>document.getElementById('slides');
    let main=<HTMLElement>document.getElementById('main');
    if(!this.auth.loggedIn){
      this.locate_blob = '/assets/locate_blob.png'
      this.scan_blob = '/assets/scan_blob.png'
      this.reward_blob = '/assets/reward_blob.png'
      this.profile_blob = '/assets/profile_blob.png'
      this.bro = '/assets/bro.png'
      this.rafiki= '/assets/rafiki.png'
      sli.style.setProperty('display','block')
      main.style.setProperty('display','none')
    }else{
      sli.style.setProperty('display','none')
      main.style.setProperty('display','block')
    }
    

    this.prev=<HTMLElement>document.getElementById('sb');
    this.rb = <HTMLElement>document.getElementById('rb');
    this.sb = <HTMLElement>document.getElementById('sb');
    this.pb = <HTMLElement>document.getElementById('pb');
  }
   
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
  
  async getMap(){
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    return await modal.present();
  } 
}
