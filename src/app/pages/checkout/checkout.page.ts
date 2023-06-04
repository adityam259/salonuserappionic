import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  mobileNo: any;
  timeSlotsData: any;
  timeSlots: string[];


  bookedtimeSlots: string[] = [
    //'10:00 AM - 10:15 AM'
  ];

  formData = {
    phoneNo: '',
    userName: '',
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    address: '',
    gender: ''
  };

  postFormData = {
    userId: '',
    productId: [],
    totalAmount: '',
    type: '',
    orderTrackingId: '',
    status: '',
  };
  selectedDate: string;
  selectedTime: string;
  message: any;
  mobileData: any;
  cartItems = [];
  cartTotal: any;
  total: any;
  paymentMode: any;
  buttonColor: string;
  fontColor: string;
  cancelationDeatils: any;
  deliverNotify: any;

  constructor(public storageService: StorageService,
    public alertController: AlertController,
    private requestServiceService: RequestServiceService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.getSessionStorage();
    this.getSessionStorageCart();
    this.calculate(this.cartItems, this.cartTotal);
    this.getCancelationDetailsData();
    this.getAllTimeSlotsData();
    this.getdeliverNotify();
  }

  selectTime(timeSlot: string) {
    // Handle the selected time slot
    console.log('Selected date:', moment(this.selectedDate).format('YYYY-MM-DD'));
    console.log('Selected time:', timeSlot);
    this.selectedTime = timeSlot;

  }



  isTimeSlotBooked(timeSlot: string): boolean {
    return this.bookedtimeSlots.includes(timeSlot);
  }

  getSessionStorageCart() {
    const storedCartItems = sessionStorage.getItem('cartItems');
    const storedTotal = sessionStorage.getItem('total');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
    if (storedTotal) {
      this.cartTotal = JSON.parse(storedTotal);
    }

  }
  getSessionStorage() {
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
        console.log('Storage mobileNo & Pin: ' + result);
        let separatedString = result.split('|');
        this.mobileNo = separatedString[0];
        this.formData.phoneNo = this.mobileNo;
        this.getMobileData();
      }
    }).catch(e => {
      console.log('error: ', e);
    });
  }

  getAllTimeSlotsData() {
    this.requestServiceService.getHttpCall("getAllTimeSlots").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.timeSlotsData = data.data;
        console.log("time slot data: " + this.timeSlotsData);
        this.timeSlots = this.timeSlotsData.map(obj => obj.timeSlot);
        console.log("time slot data: " + this.timeSlots);
      }
      else {
        console.log(data);
        this.message = data.message;
      }
    });
  }

  getCancelationDetailsData() {
    this.requestServiceService.getHttpCall("fetchCancelationInstructions").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.cancelationDeatils = data.data.cancelationInstruction;
      }
      else {
        console.log(data);
        this.message = data.message;
      }
    });
  }

  getMobileData() {
    this.requestServiceService.postHttpCall("validateLoginUser", this.formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.formData.firstName = data.data.firstName;
        this.formData.lastName = data.data.lastName;
        this.formData.address = data.data.address;
        this.formData.emailId = data.data.emailId;
        this.formData.gender = data.data.gender;
        this.formData.phoneNo = data.data.phoneNo;
        this.formData.userName = data.data.userName;
        this.postFormData.userId = data.data.id;

      }
      else {
        console.log(data);
        this.message = data.message;
      }
    });
  }

  onPaymentMethodChange(value: string) {
    this.paymentMode = value;
  }

  calculate(orders, totalValue) {
    let prices = orders.map((item) => parseInt(item.price));
    console.log("Price = " + prices);
    let total = prices.reduce((acc, curr) => acc + curr, 0);
    console.log("total " + total); // Output: 60
    this.total = total;
    this.total = totalValue;
    sessionStorage.setItem('cartItems', JSON.stringify(orders));
    this.postFormData.totalAmount = this.total;
    var productIds = orders;
    this.postFormData.productId = productIds;
    console.log("=====>Checkout Place order" + JSON.stringify(this.postFormData.productId));
  }

  placeOrder() {
    const formData1 = new FormData();
    formData1.append('userId', this.postFormData.userId);
    formData1.append('productId', JSON.stringify(this.postFormData.productId));
    formData1.append('status', "pending");
    formData1.append('totalAmount', this.postFormData.totalAmount);
    formData1.append('dateSeleted', moment(this.selectedDate).format('YYYY-MM-DD'));
    formData1.append('timeSlot', this.selectedTime);
    formData1.append('paymentMode', this.paymentMode);
    formData1.append('deliverNotify', this.deliverNotify);
    //deliverNotify
    //formData1.append('type', this.postFormData.type);
    //console.log("===> "+formData1.get('productId'));
    console.log("proceed checkout==> " + formData1);
    this.requestServiceService.postHttpCall("confirmOrder", formData1).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        //clear the cart session object 
        this.storageService.remove('cartItems');
        sessionStorage.removeItem('cartItems');

        sessionStorage.setItem('mobileNo', this.mobileNo);

        //show popup
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('tabs/tab1');

      } else {
        console.log(data);
        //show popup
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

  getdeliverNotify() {
    const value = sessionStorage.getItem('deliverNotify');
    console.log("deliverNotify =" + value);
    this.deliverNotify = value;
  }


  goToOtherPage(url) {
    this.navCtrl.navigateForward(url);
  }
}
