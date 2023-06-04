/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';
import { IonInput } from '@ionic/angular';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  mobileNo:any;
  fullName:any;
  emailId:any;
  img:any;
  formData = {
    phoneNo: ''
  };
  constructor(
    private navCtrl: NavController,
    private router: Router,
    public storageService: StorageService,
    private requestServiceService:RequestServiceService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getSessionStorage();
  }

  logout() {
    this.storageService.clear();
    localStorage.clear();
    
    this.navCtrl.navigateRoot(['/welcome']);
  }

  getSessionStorage(){
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
      console.log('Storage mobileNo & Pin: '+ result);
      let separatedString = result.split('|');
      let phoneNo = separatedString[0];
      this.formData.phoneNo = phoneNo;
      this.requestServiceService.postHttpCall("getDataByMobileNo",this.formData).subscribe((data:any) => {
        console.log(data);
        this.fullName = data.data.firstName + " "+data.data.lastName;
        this.emailId = data.data.emailId;
        this.mobileNo = data.data.phoneNo;
        this.img = data.data.image;
      });
      }
      }).catch(e => {
      console.log('error: ', e);
      });
  }


}
