import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  message: any;
  mobileNo: any;
  file: File;
  formData = {
    phoneNo: '',
    userName: '',
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    address: '',
    gender: '',
    img: '',
    id: '',
    alternatephoneNo: '',
    dob:'',
    dateOfAnniversary:''

  };

  constructor(private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private navCtrl: NavController, public storageService: StorageService) { }

  ngOnInit() {
    this.getSessionStorage();
  }

  getSessionStorage() {
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
        console.log('Storage mobileNo & Pin: ' + result);
        let separatedString = result.split('|');
        this.mobileNo = separatedString[0];
        this.formData.phoneNo = this.mobileNo;
        this.verifyMobile();
      }
    }).catch(e => {
      console.log('error: ', e);
    });
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
  }
  verifyMobile() {
    console.log(this.formData);
    this.requestServiceService.postHttpCall("getLoginUser", this.formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.formData.firstName = data.data.firstName;
        this.formData.lastName = data.data.lastName;
        this.formData.emailId = data.data.emailId;
        this.formData.address = data.data.address;
        this.formData.gender = data.data.gender;
        this.formData.img = data.data.frontendBase64;
        this.formData.phoneNo = data.data.phoneNo;
        this.formData.id = data.data.id;
        this.formData.alternatephoneNo = data.data.alternatephoneNo;
        this.formData.dob = data.data.dob;
        this.formData.dateOfAnniversary = data.data.dateOfAnniversary;
      }
      else {
        console.log(data);
        this.message = data.message;
      }
    });
  }

  onSubmit() {
    const formData = new FormData();
    //formData.append('image', this.file);
    formData.append('firstName', this.formData.firstName);
    formData.append('lastName', this.formData.lastName);
    formData.append('emailId', this.formData.emailId);
    formData.append('address', this.formData.address);
    formData.append('gender', this.formData.gender);
    formData.append('phoneNo', this.formData.phoneNo);
    formData.append('id', this.formData.id);
    formData.append('alternatephoneNo', this.formData.alternatephoneNo);
    formData.append('dob', this.formData.dob);
    formData.append('dateOfAnniversary',this.formData.dateOfAnniversary);

    this.requestServiceService.postHttpCall("updateProfileDetails", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('tabs/tab1');
      } else {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('profile-edit');
      }
    });


  }

  async presentAlert(status, message) {
    const alert = await this.alertController.create({
      header: status,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  goToOtherPage(url) {
    this.navCtrl.navigateForward(url);
  }
}
