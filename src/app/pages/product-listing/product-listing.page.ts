import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RequestServiceService } from '../../services/request-service.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.page.html',
  styleUrls: ['./product-listing.page.scss'],
})
export class ProductListingPage implements OnInit {
  cartBadge:any;
  message: any;
  productData: any;
  cartItems = [];
  itemId: string;
  productType: string;
  headerName: string;
  product = {
    id: '',
    image: '',
    price: '',
    quantity: '',
    title: '',
    rate: '',
    time: '',
    description: '',
    type: '',
    originalPrice: ''

  };
  buttons: any[] = [];

  listOfCategory: any;

  constructor(public toastController: ToastController,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    private requestServiceService: RequestServiceService,
    private navCtrl: NavController,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.updateCartBadge();
    setInterval(() => {
      this.updateCartBadge();
    }, 2000);
    this.route.queryParams.subscribe(params => {
      this.itemId = params['id'];
      this.productType = params['productType'];
    });
    this.getProduct(this.itemId, this.productType);
    this.getListOfCategory();
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

  async getProduct(id, productType) {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('productType', productType);
    const loading = await this.presentLoading(); // show loader
    try {
      const data: any = await this.requestServiceService.postHttpCall("getDataByCategory", formData).toPromise();
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.productData = data.data;
        this.headerName = data.message;
      } else {
        console.log(data);
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
        membershipDiscount: order.membershipDiscount,
        membershipDiscount2: order.membershipDiscount2
      });
    }
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log("Stringy json cart" + JSON.stringify(this.cartItems));
    this.presentToast(`${order.title} added to cart`);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  goToCart() {
    this.navCtrl.navigateForward('/cart');
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

  
  async getListOfCategory() {
    this.presentLoading(); // show loader
    this.requestServiceService.getHttpCall("getCategoryApi").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listOfCategory = data.data;
        this.listOfCategory.forEach(element => {
          //console.log("=>"+element.categoryName);
          this.buttons.push(element.categoryName);
        });
        console.log(this.listOfCategory );
        console.log(this.buttons );
      } else {
        this.message = data.message;
      }
      this.loadingController.dismiss(); // hide loader
    });
  }

  getClickedCatgegory(button: string){
    //console.log(button);
    this.listOfCategory.forEach(element => {
      if(element.categoryName.includes(button)){
        //console.log(element.id);
        this.getProduct(element.id,'');
      }
    });
  }

  openProductView(id){
    console.log("id = "+id);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['product-brand-details'], navigationExtras);
  }
}
