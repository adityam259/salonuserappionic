import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RequestServiceService } from '../../services/request-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-brand-details',
  templateUrl: './product-brand-details.page.html',
  styleUrls: ['./product-brand-details.page.scss'],
})
export class ProductBrandDetailsPage implements OnInit {
  itemId: string;
  message: any;
  productData: any;
  imageUploadDirectory2:any;
  imageUploadDirectory:any;
  imageUploadDirectory3:any;
  imageUploadDirectory4:any;
  imageUploadDirectory5:any;
  title:any;
  description:any;
  brand:any;
  serviceTime:any;
  cartItems = [];
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
  price:any;
  constructor(    private route: ActivatedRoute,
    public loadingController: LoadingController,
    private requestServiceService: RequestServiceService,
    public toastController: ToastController

    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemId = params['id'];
    });
    console.log(this.itemId)
    this.getProduct(this.itemId);
  }

  async getProduct(id) {
    const formData = new FormData();
    formData.append('id', id);
    const loading = await this.presentLoading(); // show loader
    try {
      const data: any = await this.requestServiceService.postHttpCall("getDataBySubCategory", formData).toPromise();
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.product = data.data;
        this.imageUploadDirectory2 = data.data.imageUploadDirectory2;
        this.imageUploadDirectory = data.data.imageUploadDirectory;
        this.imageUploadDirectory3 = data.data.imageUploadDirectory3;
        this.imageUploadDirectory4 = data.data.imageUploadDirectory4;
        this.imageUploadDirectory5 = data.data.imageUploadDirectory5;
        this.title = data.data.title;
        this.description = data.data.description;
        this.brand=data.data.brand;
        this.serviceTime = data.data.serviceTime;
        this.price = data.data.price;
        this.product.quantity ="1";
        this.product.type = "category";
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
}
