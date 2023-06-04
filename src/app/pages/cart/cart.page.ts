import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import { NavController } from '@ionic/angular';
import { RequestServiceService } from '../../services/request-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems = [];
  i = 1;
  initialAmount: any;
  total: any;
  deliveryInstructionData;
  showAddCoupon: any;
  inputValueCoupon: string;
  finalCouponValue: number;
  amountSaved: string;
  coupounCount: string;
  loginUser: any;
  finalOrders: any;
  isChecked = false;
  deliverNotify: boolean = true;
  mobileNo: any;
  formData = {
    phoneNo: ''
  };
  isMember: any;
  memberStartDate: any;
  memberEndDate: any;
  isMembershipValid: boolean = false;
  membershipId: any;
  membershipTotalDiscount: any;

  constructor(public storageService: StorageService,
    private navCtrl: NavController,
    private requestServiceService: RequestServiceService,
    private router: Router) { }

  ngOnInit() {
    this.getSessionStorageForUser();
    this.showAddCoupon = false;
    this.getSessionStorage();
    this.calculate(this.cartItems);
    this.getdeliveryInstruction();
    this.finalCouponValue = 0;
    this.membershipTotalDiscount = 0;
    this.amountSaved = "";
    this.getCoupounCount();
  }

  handleCheckboxChange(checked: boolean) {
    if (checked) {
      this.deliverNotify = false;
    } else {
      this.deliverNotify = true;
    }
    sessionStorage.setItem('deliverNotify', this.deliverNotify.toString());
  }

  getdeliveryInstruction() {
    this.requestServiceService.getHttpCall("fetchDeliveryInstructions").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.deliveryInstructionData = data.data.deliveryInstruction;
      } else {
        console.log(data);
      }
    });
  }

  getCoupounCount() {
    this.requestServiceService.getHttpCall("getCoupounCount").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.coupounCount = data.data;
      } else {
        console.log(data);
      }
    });
  }

  getSessionStorage() {
    const storedCartItems = sessionStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      console.log("Cart Data from session = > " + JSON.stringify(this.cartItems));
    }
  }

  getSessionStorageForUser() {
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
        console.log('Storage mobileNo & Pin: ' + result);
        let separatedString = result.split('|');
        this.mobileNo = separatedString[0];
        this.callToGetLogedInUser();
      }
    }).catch(e => {
      console.log('error: ', e);
    });

  }



  callToGetLogedInUser() {
    this.formData.phoneNo = this.mobileNo;
    this.requestServiceService.postHttpCall("validateLoginUser", this.formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.loginUser = data.data;
        // console.log("member login member Plan Id == "+ this.loginUser.memberPlanId);
        this.membershipId = this.loginUser.memberPlanId;
        this.isMember = this.loginUser.isMember;
        this.memberEndDate = this.loginUser.memberEndDate;
        this.memberStartDate = this.loginUser.memberStartDate;
        var currentDate = new Date();
        console.log("currentDate = " + currentDate);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // January is 0, so we add 1 to get the correct month
        var year = currentDate.getFullYear();
        var formattedDay = String(day).padStart(2, '0');
        var formattedMonth = String(month).padStart(2, '0');
        var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
        console.log("is Member = " + this.isMember);
        console.log("formattedDate = " + formattedDate);
        console.log("memberStartDate = " + this.memberStartDate);
        console.log("memberEndDate = " + this.memberEndDate);
        var formattedDateObj = new Date(formattedDate.split('-').reverse().join('-'));
        if (this.memberStartDate != null && this.memberEndDate != null) {
          var memberStartDateObj = new Date(this.memberStartDate.split('-').reverse().join('-'));
          var memberEndDateObj = new Date(this.memberEndDate.split('-').reverse().join('-'));
        }
        if (this.isMember != null) {
          if (memberStartDateObj <= formattedDateObj && memberEndDateObj >= formattedDateObj) {

            console.log("Current date is within the membership period.");
            this.isMembershipValid = true;
            console.log("isMembershipValid =" + this.isMembershipValid);


            this.calculate(this.cartItems);

          } else {
            console.log("Current date is outside the membership period.");
          }
        }
      } else {
        console.log(data);
      }
    });
  }

  calculate(orders) {
    let prices = orders.map((item) => parseInt(item.price));
    console.log("Price = " + prices);
    let total = prices.reduce((acc, curr) => acc + curr, 0);
    console.log("total " + total); // Output: 60
    if (this.isMembershipValid) {
      console.log("calculate is membership valid" + this.isMembershipValid);
      const formData = new FormData();
      formData.append('id', this.membershipId);
      this.requestServiceService.postHttpCall("fetchAllMembershipDataWithId", formData).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          console.log("==>" + data);
          let membership = data.data;
          let heading = membership.heading;
          console.log("==>" + heading);
          if (heading.includes("Star")) {
            console.log("The heading contains 'star'");
            let starmembershipdiscount = orders.map((item) => parseInt(item.membershipDiscount));
            console.log("starmembershipdiscount = " + starmembershipdiscount);
            let totalDiscount = total * (starmembershipdiscount / 100);
            console.log("Total Discount = " + totalDiscount);
            this.membershipTotalDiscount = totalDiscount;
            // Deduct the discount from the total
            let discountedTotal = total - totalDiscount;
            console.log("Discounted Total = " + discountedTotal);
            total = discountedTotal;
            console.log(total);
            this.total = total;
            sessionStorage.setItem('cartItems', JSON.stringify(orders));
            sessionStorage.setItem('total', this.total);
            this.calculateNewOrder();
          } else if (heading.includes("Premium")) {
            console.log("The heading does not contain 'premium'.");
            console.log("The heading contains 'star'");
            let starmembershipdiscount = orders.map((item) => parseInt(item.membershipDiscount));
            console.log("starmembershipdiscount = " + starmembershipdiscount);
            let totalDiscount = total * (starmembershipdiscount / 100);
            console.log("Total Discount = " + totalDiscount);
            this.membershipTotalDiscount = Number(totalDiscount.toFixed(2));
            // Deduct the discount from the total
            let discountedTotal = total - totalDiscount;
            console.log("Discounted Total = " + discountedTotal);
            total = discountedTotal;
            console.log(total);
            this.total = total;
            sessionStorage.setItem('cartItems', JSON.stringify(orders));
            sessionStorage.setItem('total', this.total);
            this.calculateNewOrder();
          }
        } else {
          console.log(data);
        }
      });
    } else {
      console.log(total);
      this.total = total;
      sessionStorage.setItem('cartItems', JSON.stringify(orders));
      sessionStorage.setItem('total', this.total);
      this.calculateNewOrder();
    }

  }

  calculateNewOrder() {
    let couponCode = this.finalCouponValue;
    console.log(couponCode);

    let newTotal = this.total;
    newTotal = newTotal - (couponCode || 0);
    this.total = newTotal;

    if (couponCode !== 0) {
      this.amountSaved = (couponCode ?? "").toString();
      sessionStorage.setItem('total', this.total);
    }
  }

  decrementQuantity(item) {
    let itemIdToFind = item.id;
    if (item.quantity > 1) {
      item.quantity--;
      item.price = item.price - this.initialAmount;
      let foundIndex = this.cartItems.findIndex((item) => item.id === itemIdToFind);
      if (foundIndex !== -1) {
        //this.cartItems[foundIndex].quantity--;
        //this.cartItems[foundIndex].price = item.price;
      } else {
        this.cartItems.push(item);
      }
      this.calculate(this.cartItems);
    } else {
      // Remove item from cartItems array when quantity becomes 0
      let itemIndex = this.cartItems.findIndex((item) => item.id === itemIdToFind);
      if (itemIndex !== -1) {
        this.cartItems.splice(itemIndex, 1);
      }
      this.calculate(this.cartItems);
    }
  }


  incrementQuantity(item) {
    let itemIdToFind = item.id;
    if (this.i == 1) {
      this.initialAmount = item.price;
      this.i++;
    }
    item.quantity++;
    item.price = item.quantity * this.initialAmount;

    let foundIndex = this.cartItems.findIndex((item) => item.id === itemIdToFind);
    if (foundIndex !== -1) {
      //this.cartItems[foundIndex].quantity++;
      //this.cartItems[foundIndex].price = item.price;
    } else {
      this.cartItems.push(item);
    }

    this.calculate(this.cartItems);
  }


  removeItem(item) {
    const index = this.cartItems.indexOf(item);
    //alert(index)
    if (index > -1) {
      this.cartItems.splice(index, 1);
      sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }

  }

  goToCheckout() {
    this.navCtrl.navigateForward('/checkout');
  }

  navigateToRoute() {
    this.showAddCoupon = true;
    this.router.navigate(['/coupon-code']); // Replace '/your-route' with the desired route path
  }

  apply() {
    // Handle the application logic with the input value
    this.showAddCoupon = false;
    console.log('Input value:', this.inputValueCoupon);
    this.inputValueCoupon = this.inputValueCoupon.replace(/\D/g, "");
    console.log('Modified input value:', this.inputValueCoupon);
    this.finalCouponValue = parseFloat(this.inputValueCoupon);
    this.calculateNewOrder();
  }
}
