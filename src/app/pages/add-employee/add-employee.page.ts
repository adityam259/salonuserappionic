import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  formData = {
    phoneNo: '',
    userName: '',
    firstName: '',
    lastName:'',
    address: '',
    password: '',
    emailId: '',
    gender: '',
    type: '',

  };

  message:any;
  constructor(private router: Router,private requestServiceService:RequestServiceService,
    public storageService: StorageService,public alertController: AlertController,) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formData);
    this.requestServiceService.postHttpCall("registerUserEmployee",this.formData).subscribe((data:any) => {
      if(data.status==='SUCCESS'){  
        console.log(data);  
        this.presentAlert(data.status, data.message);
        
        }
      else{
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.message = data.message;
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
}
