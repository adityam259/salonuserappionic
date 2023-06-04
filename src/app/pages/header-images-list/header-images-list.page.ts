import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-header-images-list',
  templateUrl: './header-images-list.page.html',
  styleUrls: ['./header-images-list.page.scss'],
})
export class HeaderImagesListPage implements OnInit {
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
    this.requestServiceService.getHttpCall("listOfHeader").subscribe((data: any) => {
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
      message: 'Loading List Of Headers...',
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
   this.router.navigate(['header-images-edit'],navigationExtras); 
  }
}
