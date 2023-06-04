import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../storage.service';
import { ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  itemId: string;
  message: any;
  image: any;
  productType: string;
  rate: string;
  time: string;
  description: string;
  cartItems = [];
  id: any;
  title: any;
  mobileNo: any;
  product = {
    id:'',
    image: '',
    price: '',
    quantity: '',
    title:'',
    rate:'',
    time:'',
    description:'',
    type:'',
    originalPrice:'',
    membershipDiscount:'',
    membershipDiscount2:'',
    imageUploadDirectory:''

  };
  i= 1;
  initialAmount:any;
  buttons: any[] = [];
  imageurl:any;

  listOfCategory: any;
  cartBadge:any;

  constructor(private route: ActivatedRoute,
    public loadingController: LoadingController
    , private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private navCtrl: NavController,
    public storageService: StorageService,
    public toastController: ToastController,
    private router: Router, ) { }

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
    //this.getListOfCategory();
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
      const data: any = await this.requestServiceService.postHttpCall("getProductDetails", formData).toPromise();
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.product.id = data.data.id;
        this.product.imageUploadDirectory = data.data.imageUploadDirectory;
        this.product.title = data.data.title;
        this.product.price = data.data.rate;
        this.product.quantity = '1';
        this.product.time=data.data.time;
        this.product.description = data.data.description;
        this.product.originalPrice = data.data.originalPrice;
        this.product.type=productType;
        this.product.membershipDiscount = data.data.membershipDiscount;
        this.product.membershipDiscount2 = data.data.membershipDiscount2;
        this.getListOfCategory();
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
   // console.log("==>"+this.product.imageUploadDirectory);
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

  async presentAlert(status, message) {
    const alert = await this.alertController.create({
      header: status,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  goToOtherPage(url) {
    this.navCtrl.navigateForward(url);
  }

  //addToCart() {
   // this.cartItems.push(this.product);
    //console.log('Product added to cart:', this.product);
    //this.setCartData();
  //}

  addToCart(order) {
    console.log("order == "+order.type);
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
        membershipDiscount:order.membershipDiscount,
        membershipDiscount2:order.membershipDiscount2
      });
    }
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log("Stringy json cart"+JSON.stringify(this.cartItems));
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

  goToCheckout() {
    this.navCtrl.navigateForward('/checkout');
  }

  
  checkout() {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.presentToast(`Total: $${total}`);
    this.cartItems = [];
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
        //this.getProduct(element.id,'');
        const navigationExtras: NavigationExtras = {
          queryParams: {
            id: element.id,
            productType: ''
          }
        };
        this.router.navigate(['product-listing'], navigationExtras);
      }
    });
  }
}
