/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { StorageService } from '../../storage.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.page.html',
  styleUrls: ['./login-phone.page.scss'],
})
export class LoginPhonePage implements OnInit {

  formData = {
    phoneNo: ''
  };

  message:any;
  myMap:any;

  constructor(private router: Router,private requestServiceService:RequestServiceService,
    public storageService: StorageService,private storage: Storage,private navCtrl: NavController,) { }

  ngOnInit() {
    //this.logout();
  }

  verifyMobile() {
    console.log(this.formData);
    this.requestServiceService.postHttpCall("validateLoginUser",this.formData).subscribe((data:any) => {
      if(data.status==='SUCCESS'){  
        console.log(data);  
        let mobileNoPin = data.data.phoneNo+"|"+data.data.verificationCode;
        this.storageService.set('mobileNo', mobileNoPin).then(result => {
          //this.storage.set('hasLoggedIn', true);
          this.storageService.set('hasLoggedIn', true).then(result => {
            this.router.navigate(['verification']); 
          });

                 
          }).catch(e => {
          console.log("error: " + e);
        });
        }
      else{
        console.log(data);
        this.message = data.message;
      }    
    });

    
  }

  redirectToRegister(){
    this.router.navigate(['/register']);
  }

  logout() {
    this.storageService.clear();
    localStorage.clear();
  }

}
