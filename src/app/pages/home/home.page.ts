import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CitySelectComponentComponent } from '../../city-select-component/city-select-component.component';
import { IonSlides } from '@ionic/angular';
import { StorageService } from '../../storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slides', { static: false }) slides: IonSlides;

  listOfTrusted: any;
  message: string;
  listOfHeader: any;
  listOfCategory: any;
  listOfProduct: any;
  listOfYouLinks: any;
  listBlog: any;
  listOfReview: any;
  orderPendingCount: string;
  currentAddress: string;
  http: any;
  searchData: any;
  selectedValue: any;
  searchTerm: any;
  mobileNo: any;
  userId: any;
  formDataMobile = {
    phoneNo: '',
    userName: '',
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    address: '',
    gender: '',
    userId: ''
  };
  cities = [
    { name: 'Mumbai' },
    { name: 'Nagpur' },
  ];
  private refreshInterval: any;
  cartBadge:any;
  constructor(private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private router: Router,
    public loadingController: LoadingController,
    private modalController: ModalController,
    public storageService: StorageService,
    private sanitizer: DomSanitizer,
    private navCtrl: NavController,
  ) { }

  async ngOnInit() {
    this.updateCartBadge();
    setInterval(() => {
      this.updateCartBadge();
    }, 2000);
    this.currentAddress = 'Nagpur';
    this.storageService.get('defaultAddress').then(result => {
      this.currentAddress = result;
      this.currentAddress = this.currentAddress.slice(0, 30);
    });
    this.callMethodsSequentially();
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

  callMethodsSequentially() {
    this.getListOfHeader();
    this.getListOfCategory();
    this.getListOfYoutubeLink();
    this.getListOfProduct();
    this.getTrustedProduct();
    this.getBlog();
    this.getReview();


  }

  ngAfterViewInit() {
    this.slides.ionSlideDidChange.subscribe(() => {
      this.slides.startAutoplay();
    });
  }

  public sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  callAndGetLocationMaster(userId) {
    const formData = new FormData();
    formData.append('userId', userId);
    this.requestServiceService.postHttpCall("getLocationAddressByUserId", formData).
      subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          data.data.forEach((city) => {
            let name = city.flatApartment + ", " + city.streetAddress + ", " + city.city + ", " +
              city.state + ", " + city.zipCode;
            this.cities.push({ name: name });
          });
        } else {
          this.message = data.data.message;
        }

      });
  }


  async openCitySelect() {
    const modal = await this.modalController.create({
      component: CitySelectComponentComponent,
      componentProps: { cities: this.cities }
    });

    modal.onDidDismiss().then((result) => {
      if (result.role === 'cancel') {
        return;
      }
      if (result.data === 'addLocation') {
        this.addAddress();
        return;
      } else {
        this.currentAddress = result.data.name;
        this.storageService.set('defaultAddress', this.currentAddress).then(result => {
        });
        this.currentAddress = this.currentAddress.slice(0, 30);

      }
    });
    return await modal.present();
  }

  selectCity(city) {
    this.currentAddress = city.name;
  }

  addAddress() {
    this.router.navigate(['add-location-address']);

  }
  clearSearch() {
    this.searchTerm = '';
  }

  async onSearch(event: any) {
    this.searchTerm = event.target.value;
    const formData = new FormData();
    formData.append('name', this.searchTerm);
    this.requestServiceService.postHttpCall("searchText", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.searchData = data.data;
      } else {
        this.message = data.message;
      }
    });
  }

  async getListOfYoutubeLink() {
    this.requestServiceService.getHttpCall("getAllYoutubeLinkAPI").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listOfYouLinks = data.data;
      } else {
        this.message = data.message;
      }
    });
  }

  async getTrustedProduct() {
    this.requestServiceService.getHttpCall("getTrustedProduct").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listOfTrusted = data.data;
      } else {
        this.message = data.message;
      }
    });
  }

  async getBlog() {
    this.requestServiceService.getHttpCall("listBlogViewAPI").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listBlog = data.data;
      } else {
        this.message = data.message;
      }
    });
  }

  async getReview() {
    this.requestServiceService.getHttpCall("listReviewViewAPI").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listOfReview = data.data;
      } else {
        this.message = data.message;
      }
    });
  }

  selectItem(item: any, productType) {
    this.rowClicked(item, productType)
  }

  async getListOfHeader() {
    const loading = await this.presentLoading(); // show loader
    try {
      const data: any = await this.requestServiceService.getHttpCall("getAllHeader").toPromise();
      if (data.status === 'SUCCESS') {
        this.listOfHeader = data.data;
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

  async getListOfCategory() {
    this.requestServiceService.getHttpCall("getCategoryApi").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listOfCategory = data.data;
      } else {
        this.message = data.message;
      }
    });
  }

  async getListOfProduct() {
    this.requestServiceService.getHttpCall("getAllProduct").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.listOfProduct = data.data;
      } else {
        this.message = data.message;
      }
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

  goToMens() {
    this.router.navigate(['mens'])
  }

  rowClicked(itemId: string, productType) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: itemId,
        productType: productType
      }
    };
    this.router.navigate(['view-product'], navigationExtras);
  }

  rowClickedForCategory(itemId: string, productType) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: itemId,
        productType: productType
      }
    };
    this.router.navigate(['product-listing'], navigationExtras);
  }
  goToCart() {
    this.navCtrl.navigateForward('/cart');
  }

  whatsapp() {
    const phoneNumber = '919326933875'; // replace with the phone number you want to send the message to
    const message = 'Hello'; // replace with the message you want to pre-fill
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_system', 'location=yes');
  }

  getSessionStorage() {
    this.storageService.get('mobileNo').then(result => {
      if (result != null) {
        let separatedString = result.split('|');
        this.mobileNo = separatedString[0];
        this.formDataMobile.phoneNo = this.mobileNo;
        this.getMobileData();
      }
    }).catch(e => {
      console.log('error: ', e);
    });
  }


  getMobileData() {
    this.requestServiceService.postHttpCall("validateLoginUser", this.formDataMobile).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.userId = data.data.id;
        this.callAndGetLocationMaster(this.userId);
      }
      else {
        this.message = data.message;
      }
    });
  }
}
