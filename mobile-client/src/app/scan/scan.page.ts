import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { QrserviceService} from '../qr/qrservice.service'
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  camera_img = '/assets/camera.png'
  
  constructor(public toastController: ToastController, private qrScanCtrl: QRScanner, private socketservice: QrserviceService,private storage:NativeStorage) { }
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];

  scanqr(){
    this.qrScanCtrl.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.ionApp.style.display = 'none';
        const scanSub = this.qrScanCtrl.scan().subscribe((text) => {
          this.qrScanCtrl.hide(); 
          this.ionApp.style.display = 'block'
          this.storage.getItem('profile').then(data=>{
            let userId = data['sub'].replace('|','')
            this.socketservice.postUserData(userId, text).subscribe(async (data)=>{
              let msg = data['message'].toLowerCase()
              let m=''
              if(msg.includes('collect')){
                m='Collected'
              }else if(msg.includes('return')){
                m='Returned'
              }
              const toast = await this.toastController.create({
                message: m,
                duration: 2000
              });
              toast.present();
            },error=>console.log(error))
          })

          scanSub.unsubscribe(); 
            
          },(err)=>{
            console.log(err);
          });
          this.qrScanCtrl.show();

        } else if (status.denied) {
          this.qrScanCtrl.openSettings();
        } else {
          console.log('nothing is happening')
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  ngOnInit() {
  }

}
