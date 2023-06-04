import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.page.html',
  styleUrls: ['./coupon-code.page.scss'],
})
export class CouponCodePage implements OnInit {
  couponCode200: string = 'FLAT200';
  couponCode250: string = 'FLAT250';
  couponCodeFreeff: string = 'FREEFF';
  couponData :any;

  constructor(private requestServiceService: RequestServiceService,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.getCouponApi();
  }

  
  getCouponApi(){
    this.presentLoading(); 
    this.requestServiceService.getHttpCall("getCouponApi").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.couponData = data.data;
      } else {
        console.log(data);
      }
      this.loadingController.dismiss();
    });
  }

  copyCode(code) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
  }

}
