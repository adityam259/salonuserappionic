import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.page.html',
  styleUrls: ['./order-edit.page.scss'],
})
export class OrderEditPage implements OnInit {
  itemId: string;
  message: any;
  listOfUser: any;
  formData = {
    id: '',
    status: '',
    userId: '',
    orderTrackingId:''
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
    this.getUserEmployeeDetails();
  }

  
  async getHeaderImageDetails(id) {
    const formData = new FormData();
    formData.append('id', id);
    this.presentLoading(); // show loader
    this.requestServiceService.postHttpCall("getOrderById", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        //this.listOfHeaders = data.data;
        this.formData.status = data.data.status;
        this.formData.userId = data.data.userId;
        this.formData.orderTrackingId = data.data.orderTrackingId;
        this.formData.id = data.data.id;
      } else {
        console.log(data);
        this.message = data.message;
      }
      this.loadingController.dismiss();

    });

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading Order Data...',
      spinner: 'crescent'
    });
    await loading.present();
  }



  
  async getUserEmployeeDetails() {
    //this.presentLoading(); // show loader
    this.requestServiceService.getHttpCall("getLoginDataEmployee").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.listOfUser = data.data;
      } else {
        console.log(data);
        this.message = data.message;
      }
      //this.loadingController.dismiss();

    });

  }


  
  onSubmit() {
    const formData = new FormData();
    formData.append('status', this.formData.status);
    formData.append('userId', this.formData.userId);
    formData.append('id', this.formData.id);
    this.requestServiceService.postHttpCall("assignUserWithStatusOrder", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('tabs/tab1');
      } else {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('order-status');
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
