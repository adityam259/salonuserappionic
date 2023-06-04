import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RequestServiceService } from '../../services/request-service.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-membership-details',
  templateUrl: './membership-details.page.html',
  styleUrls: ['./membership-details.page.scss'],
})
export class MembershipDetailsPage implements OnInit {
  argument: string;
  message: any;
  membership: any;
  heading: any;
  description: any;
  termsConditions: any;
  cartItems = [];
  id: any;
  price: any;
  cartBadge:any;

  constructor(private route: ActivatedRoute, private router: Router,
    public loadingController: LoadingController,
    private requestServiceService: RequestServiceService,
    public toastController: ToastController,
    private navCtrl: NavController,) { }

  ngOnInit() {
    this.updateCartBadge();
    setInterval(() => {
      this.updateCartBadge();
    }, 2000);
    this.route.queryParams.subscribe(params => {
      this.argument = params.argument;
      console.log("argument received: " + this.argument);
      this.getmemberShipData(this.argument);
    });
    //call method below
  }

  updateCartBadge() {
    const storedCartItems = sessionStorage.getItem('cartItems');
    if(storedCartItems!=null){
    const cartItemsArray = JSON.parse(storedCartItems); // Parse the string to convert it back to an array
    const count = cartItemsArray.length;
    //console.log(count); // Display the count of elements in the array
    //console.log("tab == "+count);
    this.cartBadge = count;
    }else{
      this.cartBadge = 0;
    }
  }
  
  goToCart() {
    this.navCtrl.navigateForward('/cart');
  }
  //make method and bring the member ship deatils from backend 
  async getmemberShipData(id) {
    const formData = new FormData();
    formData.append('id', id);
    this.presentLoading(); // show loader
    this.requestServiceService.postHttpCall("fetchAllMembershipDataWithId", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log("==>" + data);
        this.membership = data.data;
        this.heading = this.membership.heading;
        this.description = this.membership.description;
        this.termsConditions = this.membership.termsConditions;
        this.id = this.membership.id;
        this.price = this.membership.price;
      } else {
        console.log(data);
        this.message = data.message;
      }
      this.loadingController.dismiss();

    });

  }
  // handle become a member button
  onSubmitBecomeMember(id) {
    console.log(id);
    this.buildOrderFromInputData(id, this.heading, this.price, 1, "membership");
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading Membrship Data',
      spinner: 'crescent'
    });
    await loading.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  product = {
    id: '',
    price: '',
    quantity: '',
    title: '',
    type: '',
  };

  buildOrderFromInputData(id, heading, price, quantity, type) {
    console.log("id ->" + id);
    console.log("heading ->" + heading);
    console.log("price ->" + price);
    console.log("quantity ->" + quantity);
    console.log("type ->" + type);
    this.product.id = id;
    this.product.title = heading;
    this.product.price = price;
    this.product.quantity = quantity;
    this.product.type = type;
      this.addToCart(this.product);
  }

  addToCart(order) {
    console.log("order == " + order.type);
    let existingItem = this.cartItems.find((item) => item.id === order.id);
    if (existingItem) {
      this.presentToast(`${order.title} already added to cart`);
    } else {
      const storedCartItems = sessionStorage.getItem('cartItems');
      if (storedCartItems) {
        this.cartItems = JSON.parse(storedCartItems);
      }
      this.cartItems.push({
        id: order.id,
        title: order.title,
        price: order.price,
        quantity: order.quantity,
        type: order.type,
        membershipDiscount:'0',
        membershipDiscount2:'0'
      });
    }
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log("Stringy json cart" + JSON.stringify(this.cartItems));
    this.presentToast(`${order.title} added to cart`);
  }

}
