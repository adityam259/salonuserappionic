import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {
  message: any;
  listOfHeaders: any;
  constructor(private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private router: Router,
    public loadingController: LoadingController) { }
  ngOnInit() {
    this.getListOfHeader();
  }
  async getListOfHeader() {
    this.presentLoading(); // show loader
    this.requestServiceService.getHttpCall("allOrderDetails").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.listOfHeaders = data.data;
      } else {
        console.log(data);
        this.message = data.message;
      }
      this.loadingController.dismiss(); // hide loader
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading List Of Order Status...',
      spinner: 'crescent'
    });
    await loading.present();
  }

  rowClicked(itemId: string) {
    //alert(itemId);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: itemId
      }
    };
    this.router.navigate(['order-edit'], navigationExtras);
  }

}
