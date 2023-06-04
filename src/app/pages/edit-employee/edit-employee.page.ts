import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {
  itemId: string;
  message: any;
  listOfHeaders: any;
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
    id:''
  };

  constructor(private route: ActivatedRoute,
    public loadingController: LoadingController
    , private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemId = params['id'];
    });
    //alert(this.itemId);
    this.getHeaderImageDetails(this.itemId);
  }

  async getHeaderImageDetails(id) {
    const formData = new FormData();
    formData.append('id', id);
    this.presentLoading(); // show loader
    this.requestServiceService.postHttpCall("getLoginData", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        //this.listOfHeaders = data.data;
        this.formData.firstName = data.data.firstName;
        this.formData.lastName = data.data.lastName;
        this.formData.userName = data.data.userName;
        this.formData.password = data.data.password;
        this.formData.phoneNo = data.data.phoneNo;
        this.formData.address = data.data.address;
        this.formData.emailId = data.data.emailId;
        this.formData.type = data.data.type;
        this.formData.gender = data.data.gender;
        this.formData.id=data.data.id;
      } else {
        console.log(data);
        this.message = data.message;
      }
      this.loadingController.dismiss();

    });

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading Header Data...',
      spinner: 'crescent'
    });
    await loading.present();
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('userName', this.formData.userName);
    formData.append('password', this.formData.password);
    formData.append('gender', this.formData.gender);
    formData.append('firstName', this.formData.firstName);
    formData.append('lastName', this.formData.lastName);
    formData.append('phoneNo', this.formData.phoneNo);
    formData.append('address', this.formData.address);
    formData.append('emailId', this.formData.emailId);
    formData.append('type', this.formData.type);
    formData.append('id', this.formData.id);
    this.requestServiceService.postHttpCall("updateEmployeeUser", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('tabs/tab1');
      } else {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('list-employee');
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
