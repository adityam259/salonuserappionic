import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { StorageService } from '../../storage.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-beautician',
  templateUrl: './add-beautician.page.html',
  styleUrls: ['./add-beautician.page.scss'],
})
export class AddBeauticianPage implements OnInit {
  message:any;
  mobileNo:any;
  orders :any;
  formData = {
    phoneNo: ''
  };
  constructor(private requestServiceService:RequestServiceService,
    public storageService: StorageService,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.getMobileNoFromSession();
  }

  apiCallToGetOrderList(mobile:any){
    this.formData.phoneNo = mobile;
    this.presentLoading(); // show loader
    this.requestServiceService.postHttpCall("orderDetails",this.formData).subscribe((data:any) => {
      if(data.status==='SUCCESS'){ 
        console.log(data);  
        this.orders = data.data;
      }else{
        console.log(data);
        this.message = data.message;
      }
      this.loadingController.dismiss(); // hide loader
    });
  }

  getMobileNoFromSession(){
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
      console.log('Storage mobileNo & Pin: '+ result);
      let separatedString = result.split('|');
      this.mobileNo = separatedString[0];
      this.apiCallToGetOrderList(this.mobileNo);   
      }
      }).catch(e => {
      console.log('error: ', e);
      });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading orders...',
      spinner: 'crescent'
    });
    await loading.present();
  }
}
