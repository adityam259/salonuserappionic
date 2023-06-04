import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  message: any;
  currentOrders: string = 'ongoing'; 
  listOfHeadersPending: any[] = []; // Replace with your actual data array
  listOfHeadersCompleted: any[] = []; // Replace with your actual data array
  mobileNo:any;
  constructor(private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private router: Router,
    public loadingController: LoadingController,
    public storageService: StorageService) { }

  async ngOnInit() {
    await this.getSessionStorage();
  }

  showOngoingOrders(){
    this.currentOrders="ongoing";
  }
  showPastOrders(){
    this.currentOrders="past";
  }
  async getOrderHistoryPending(mobile) {
    console.log(mobile);
    const formData = new FormData();
    formData.append('mobileNumber', mobile);
    const loading = await this.presentLoading(); // show loader
    try {
      const data: any = await  this.requestServiceService.postHttpCall("getOrderHistoryPending",formData).toPromise();
      if (data.status === 'SUCCESS') {
        this.listOfHeadersPending = data.data;
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

  async getOrderHistoryCompleted(mobile) {
    console.log(mobile);
    const formData = new FormData();
    formData.append('mobileNumber', mobile);
    const loading = await this.presentLoading(); // show loader
    try {
      const data: any = await  this.requestServiceService.postHttpCall("getOrderHistoryCompleted",formData).toPromise();
      if (data.status === 'SUCCESS') {
        this.listOfHeadersCompleted = data.data;
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
  
  async getSessionStorage(){
    await this.storageService.get('mobileNo').then(result => {
      if (result != null) {
      let separatedString = result.split('|');
      this.mobileNo = separatedString[0];
      this.getOrderHistoryCompleted(this.mobileNo);
      this.getOrderHistoryPending(this.mobileNo);
      
      }
      }).catch(e => {
      console.log('error: ', e);
      });
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

  rowClicked(itemId: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: itemId
      }
    };
    this.router.navigate(['order-history'], navigationExtras);
  }

  doRefresh(event) {
    // Perform data fetching or processing here
    this.getSessionStorage();
     setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };
  
}
