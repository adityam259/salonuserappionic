import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  listOfCategory: any;
  message:any;

  constructor(private requestServiceService: RequestServiceService,
    private router: Router,    public loadingController: LoadingController,

    ) { }

  ngOnInit() {
    this.getListOfCategory();
  }

  async getListOfCategory() {
    const loading = await this.presentLoading(); // show loader
    try {
      const data: any = await this.requestServiceService.getHttpCall("getCategoryApi").toPromise();
      if (data.status === 'SUCCESS') {
        this.listOfCategory = data.data;
      } else {
        this.message = data.message;
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (loading) {
        loading.dismiss(); // hide loader
      }
    }
  }
  rowClickedForCategory(itemId: string, productType) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: itemId,
        productType: productType
      }
    };
    this.router.navigate(['product-listing'], navigationExtras);
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'dots',
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
    return loading;
  }


  rowClicked(itemId: string, productType) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: itemId,
        productType: productType
      }
    };
    this.router.navigate(['product-listing'], navigationExtras);
  }
  whatsapp() {
    const phoneNumber = '919326933875'; // replace with the phone number you want to send the message to
    const message = 'Hello'; // replace with the message you want to pre-fill
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_system', 'location=yes');
  }
}
