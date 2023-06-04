import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RequestServiceService } from '../../services/request-service.service';
import { StorageService } from '../../storage.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-add-location-address',
  templateUrl: './add-location-address.page.html',
  styleUrls: ['./add-location-address.page.scss'],
})
export class AddLocationAddressPage implements OnInit {
  addressFromCoords: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  flatApartment: string;
  mobileNo: any;
  formDataMobile = {
    phoneNo: '',
    userName: '',
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    address: '',
    gender: '',
    userId: ''
  };
  message: any;
  formData = {
    lat: '',
    lon: ''
  };
  constructor(private requestServiceService: RequestServiceService, private geolocation: Geolocation,
    public storageService: StorageService, public alertController: AlertController,
    private navCtrl: NavController

  ) {

  }

  ngOnInit() {
    this.getSessionStorage();

  }

  getSessionStorage() {
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
        console.log('Storage mobileNo & Pin: ' + result);
        let separatedString = result.split('|');
        this.mobileNo = separatedString[0];
        this.formDataMobile.phoneNo = this.mobileNo;
        this.getMobileData();
      }
    }).catch(e => {
      console.log('error: ', e);
    });
  }

  getMobileData() {
    this.requestServiceService.postHttpCall("validateLoginUser", this.formDataMobile).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.formDataMobile.firstName = data.data.firstName;
        this.formDataMobile.lastName = data.data.lastName;
        this.formDataMobile.address = data.data.address;
        this.formDataMobile.emailId = data.data.emailId;
        this.formDataMobile.gender = data.data.gender;
        this.formDataMobile.phoneNo = data.data.phoneNo;
        this.formDataMobile.userName = data.data.userName;
        this.formDataMobile.userId = data.data.id;

      }
      else {
        console.log(data);
        this.message = data.message;
      }
    });
  }

  getCurrentLocation() {
    if ("geolocation" in navigator) {
      // get current position
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        //alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const formData = new FormData();
        formData.append('lat', latitude.toString());
        formData.append('lon', longitude.toString());
        this.requestServiceService.postHttpCall("getLocation", formData).
          subscribe((data: any) => {
            //console.log(data);
            //alert(data);
            // Do something with the data here
            this.streetAddress = data.data.suburb;
            this.city = data.data.city;
            this.state = data.data.state;
            this.zipCode = data.data.postcode;
            //this.addressFromCoords = data.data;
          });
      }, (error) => {
        console.error(error.message);
      }, { enableHighAccuracy: true });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

  }

  onSubmit() {
    const formData = new FormData();
    formData.append('flatApartment', this.flatApartment);
    formData.append('streetAddress', this.streetAddress);
    formData.append('city', this.city);
    formData.append('state', this.state);
    formData.append('zipCode', this.zipCode);
    formData.append('userId', this.formDataMobile.userId);
    this.requestServiceService.postHttpCall("AddLocationAddress", formData).
      subscribe((data: any) => {
        console.log(data);
        if (data.status === 'SUCCESS') {
          this.presentAlert(data.status, data.message);
          this.goToOtherPage('tabs/tab1');
        } else {
          console.log(data);
          this.presentAlert(data.status, data.message);
          this.goToOtherPage('add-location-address');
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
