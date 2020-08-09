import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor(private platform:Platform,private modalCtrl:ModalController, private storage: NativeStorage) { }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken:environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
    
    setTimeout(() =>this.map.resize(), 0);
    this.map.addControl(new mapboxgl.NavigationControl({showCompass:true,showZoom:true}));
    
    this.storage.getItem('map_initial').then(val=>{
      setTimeout(() =>this.map.resize(), 0);
      this.storage.remove('map_initial').then(da=>console.log('map_i_rem',da),e=>console.log(e))      
    },error=>{
      console.log(error)
    }).catch(err=>{
      console.log('error', err)
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
