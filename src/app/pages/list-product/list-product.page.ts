import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.page.html',
  styleUrls: ['./list-product.page.scss'],
})
export class ListProductPage implements OnInit {


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
    this.requestServiceService.getHttpCall("listOfProduct").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.listOfHeaders = data.data;
        this.loadingController.dismiss();
      } else {
        console.log(data);
        this.message = data.message;
        this.loadingController.dismiss();
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading List Of Product...',
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
   this.router.navigate(['edit-product'],navigationExtras); 
  }

}
