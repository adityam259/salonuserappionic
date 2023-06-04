import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  message:any;
  formData = {
    phoneNo: '',
    userName:'',
    firstName:'',
    lastName:'',
    emailId:'',
    password:'',
    address:'',
    gender:''
  };

  constructor(private router: Router,private requestServiceService:RequestServiceService,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  redirectToLogin(){
    this.router.navigate(['/login-phone']);

  }

  verifyMobile() {
    console.log(this.formData);
    this.requestServiceService.postHttpCall("saveUserLogin",this.formData).subscribe((data:any) => {
      if(data.status==='SUCCESS'){  
        console.log(data);  
        this.presentAlert(data.status, data.message);
        //this.goToOtherPage('login-phone');
        //this.router.navigate(['/login-phone']);
        const commands = ['login-phone'];
        this.router.navigate(commands);
        }
      else{
        console.log(data);
        this.message = data.message;
        this.presentAlert(data.status, data.message);
        //this.goToOtherPage('register');
        //this.router.navigate(['/register']);
        const commands = ['register'];
        this.router.navigate(commands);
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
    this.router.navigate(url);
  }
}
