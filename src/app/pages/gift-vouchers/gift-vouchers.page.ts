import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-gift-vouchers',
  templateUrl: './gift-vouchers.page.html',
  styleUrls: ['./gift-vouchers.page.scss'],
})
export class GiftVouchersPage implements OnInit {
  listOfData: any[] = []; // Replace with your actual data array
  message: any;
  constructor(private requestServiceService: RequestServiceService,
    public loadingController: LoadingController,
    ) { }

    async ngOnInit() {
    await this.getGiftVouchersData();
  }
  async getGiftVouchersData() {
    this.presentLoading(); // show loader
    await this.requestServiceService.getHttpCall("getGiftVouchers").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listOfData = data.data;
      } else {
        this.message = data.message;
      }
      this.loadingController.dismiss(); // hide loader
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading List Of Gift Voucher Status...',
      spinner: 'crescent'
    });
    await loading.present();
  }

  buyNow(id:any){
    console.log(id);
  }

}
