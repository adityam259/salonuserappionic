/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../storage.service';
import { IonInput } from '@ionic/angular';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  @ViewChild('input1', { static: false }) input1: IonInput;
  @ViewChild('input2', { static: false }) input2: IonInput;
  @ViewChild('input3', { static: false }) input3: IonInput;
  @ViewChild('input4', { static: false }) input4: IonInput;

  mobileNo:any;
  nonMaskedNumber:string;
  pin:any;
  message:string;

  formData = {
    verificationCode: ''
  };

  constructor(
    private router: Router,
    private navCtrl: NavController,
    public storageService: StorageService,
    private requestServiceService:RequestServiceService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getSessionStorage();
  }
  goToBack() {
    this.navCtrl.back();
  }
  goToHome() {
    if(this.formData.verificationCode.toString()===this.pin.toString()){
      this.navCtrl.navigateRoot(['tabs']);
    }else{
      this.message = "Invalid OTP";
    }

  }

  getSessionStorage(){
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
      console.log('Storage mobileNo & Pin: '+ result);
      let separatedString = result.split('|');
      let maskedNumber = separatedString[0].replace(/\d(?=\d{4})/g, "*");
      this.mobileNo = maskedNumber;
      this.pin = separatedString[1];
      console.log('Storage Pin: '+ this.pin);
      }
      }).catch(e => {
      console.log('error: ', e);
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'OTP',
      message: 'As sms service is not there we are showing otp temparory here Pin = '+ this.pin,
      buttons: ['OK']
    });

    await alert.present();
  }


}
  


