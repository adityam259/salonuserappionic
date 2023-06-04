"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 89639:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 88774);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 35129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 89639);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 88774);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 88774:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 99090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 40932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _city_select_component_city_select_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../city-select-component/city-select-component.component */ 90580);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 86219);













let HomePage = class HomePage {
    constructor(requestServiceService, alertController, router, loadingController, modalController, storageService, sanitizer, navCtrl) {
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.storageService = storageService;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.formDataMobile = {
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
        this.cities = [
            { name: 'Mumbai' },
            { name: 'Nagpur' },
        ];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        });
    }
    updateCartBadge() {
        const storedCartItems = sessionStorage.getItem('cartItems');
        if (storedCartItems != null) {
            const cartItemsArray = JSON.parse(storedCartItems); // Parse the string to convert it back to an array
            const count = cartItemsArray.length;
            //console.log(count); // Display the count of elements in the array
            //console.log("tab == "+count);
            this.cartBadge = count;
        }
        else {
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
    sanitizeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    callAndGetLocationMaster(userId) {
        const formData = new FormData();
        formData.append('userId', userId);
        this.requestServiceService.postHttpCall("getLocationAddressByUserId", formData).
            subscribe((data) => {
            if (data.status === 'SUCCESS') {
                data.data.forEach((city) => {
                    let name = city.flatApartment + ", " + city.streetAddress + ", " + city.city + ", " +
                        city.state + ", " + city.zipCode;
                    this.cities.push({ name: name });
                });
            }
            else {
                this.message = data.data.message;
            }
        });
    }
    openCitySelect() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _city_select_component_city_select_component_component__WEBPACK_IMPORTED_MODULE_3__.CitySelectComponentComponent,
                componentProps: { cities: this.cities }
            });
            modal.onDidDismiss().then((result) => {
                if (result.role === 'cancel') {
                    return;
                }
                if (result.data === 'addLocation') {
                    this.addAddress();
                    return;
                }
                else {
                    this.currentAddress = result.data.name;
                    this.storageService.set('defaultAddress', this.currentAddress).then(result => {
                    });
                    this.currentAddress = this.currentAddress.slice(0, 30);
                }
            });
            return yield modal.present();
        });
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
    onSearch(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.searchTerm = event.target.value;
            const formData = new FormData();
            formData.append('name', this.searchTerm);
            this.requestServiceService.postHttpCall("searchText", formData).subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.searchData = data.data;
                }
                else {
                    this.message = data.message;
                }
            });
        });
    }
    getListOfYoutubeLink() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.requestServiceService.getHttpCall("getAllYoutubeLinkAPI").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listOfYouLinks = data.data;
                }
                else {
                    this.message = data.message;
                }
            });
        });
    }
    getTrustedProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.requestServiceService.getHttpCall("getTrustedProduct").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listOfTrusted = data.data;
                }
                else {
                    this.message = data.message;
                }
            });
        });
    }
    getBlog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.requestServiceService.getHttpCall("listBlogViewAPI").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listBlog = data.data;
                }
                else {
                    this.message = data.message;
                }
            });
        });
    }
    getReview() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.requestServiceService.getHttpCall("listReviewViewAPI").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listOfReview = data.data;
                }
                else {
                    this.message = data.message;
                }
            });
        });
    }
    selectItem(item, productType) {
        this.rowClicked(item, productType);
    }
    getListOfHeader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.presentLoading(); // show loader
            try {
                const data = yield this.requestServiceService.getHttpCall("getAllHeader").toPromise();
                if (data.status === 'SUCCESS') {
                    this.listOfHeader = data.data;
                }
                else {
                    this.message = data.message;
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                if (loading) {
                    loading.dismiss(); // hide loader
                }
            }
        });
    }
    getListOfCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.requestServiceService.getHttpCall("getCategoryApi").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listOfCategory = data.data;
                }
                else {
                    this.message = data.message;
                }
            });
        });
    }
    getListOfProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.requestServiceService.getHttpCall("getAllProduct").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listOfProduct = data.data;
                }
                else {
                    this.message = data.message;
                }
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                spinner: 'dots',
                translucent: true,
                backdropDismiss: false
            });
            yield loading.present();
            return loading;
        });
    }
    goToMens() {
        this.router.navigate(['mens']);
    }
    rowClicked(itemId, productType) {
        const navigationExtras = {
            queryParams: {
                id: itemId,
                productType: productType
            }
        };
        this.router.navigate(['view-product'], navigationExtras);
    }
    rowClickedForCategory(itemId, productType) {
        const navigationExtras = {
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
        this.requestServiceService.postHttpCall("validateLoginUser", this.formDataMobile).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                this.userId = data.data.id;
                this.callAndGetLocationMaster(this.userId);
            }
            else {
                this.message = data.message;
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['slides', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 99090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"location\" slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </div>\n    <div>\n      <ion-label class=\"text\" (click)=\"openCitySelect()\"\n        style=\"font-weight: bold;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\"> <ion-icon\n          name=\"location\"></ion-icon> &nbsp; <span style=\"min-width: 100px; display: inline-block;\">{{ currentAddress\n          }}</span></ion-label>\n    </div>\n    <ion-buttons slot=\"end\" (click)=\"goToCart()\" size=\"large\"  style=\"padding-right: 15px;color: black;\">\n      <ion-icon name=\"cart\" class=\"black-cart-icon\"></ion-icon>\n      <ion-badge color=\"danger\" *ngIf=\"cartBadge!=0\">{{cartBadge}}</ion-badge>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"logo-whatsapp\" size=\"large\" (click)=\"whatsapp()\"\n        style=\"padding-right: 10px; width: 20px; height: 20px;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main-content\">\n    <div class=\"heading\">\n      <div class=\"wish\">\n      </div>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" style=\"height:40px;background-color: rgb(255, 255, 255);\"><i\n              class=\"fa fa-search\"></i></span>\n        </div>\n        <input type=\"search\" class=\"form-control\" placeholder=\"Search for salon services etc\" [(ngModel)]=\"searchTerm\"\n          (keyup)=\"onSearch($event)\" style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n      </div>\n      <div style=\"position: relative\">\n        <ul class=\"list-group\" style=\"position: absolute; z-index: 10; width: 100%;\">\n          <li class=\"list-group-item\" *ngFor=\"let item of searchData\" (click)=\"selectItem(item.id,item.source)\">{{\n            item.title }}</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"card shadow\"\n      style=\"background-color: white; border-color: rgb(144, 144, 144);margin-left: 5px;margin-right: 10px;\">\n      <div class=\"card-body\">\n        <ion-grid>\n          <ion-row>\n            <ion-slides #slides autoplay=\"true\" delay=\"2000\" pager=\"true\">\n              <ion-slide *ngFor=\"let item of listOfHeader\">\n                <!--imageUploadDirectory-->\n                <img src=\"{{item.imageUploadDirectory}}\" (click)=\"rowClicked(item.id,'header')\" width=\"375px\"\n                  height=\"196.25px\" style=\"width: 375px !important; height: 196.25px !important;\">\n              </ion-slide>\n            </ion-slides>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"card shadow\"\n      style=\"background-color: white; border-color: rgb(144, 144, 144);margin-left: 5px;margin-right: 10px;\">\n      <div class=\"card-header text-center\" style=\"background-color: white;font-size: medium;font-weight: bold;\">Shop By\n        Category</div>\n      <div class=\"card-body\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\" *ngFor=\"let item of listOfCategory\">\n              <ion-img src=\"{{item.imageUploadDirectory}}\" (click)=\"rowClickedForCategory(item.id,'category')\" style=\"width: 91.66px !important; height: 98.45px !important;\n                     object-fit: cover !important;\n                            border-radius: 100% !important; overflow: hidden;\"></ion-img>\n              <br>\n              <h6 style=\"text-align: center;font-weight: bold;height: 25px;\">{{item.categoryName}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </div>\n    </div>\n\n    <div class=\"card shadow\"\n      style=\"background-color: white; border-color: rgb(144, 144, 144);margin-left: 5px;margin-right: 10px;\">\n      <div class=\"card-header text-center\" style=\"background-color: white;font-size: medium;font-weight: bold;\">\n        Wondering how Heykudi works?\n      </div>\n      <div class=\"card-body\">\n        <ion-grid>\n          <ion-row>\n            <ion-slides pager=\"true\">\n              <ion-slide *ngFor=\"let url of listOfYouLinks\">\n                <iframe width=\"375px\" height=\"196.25px\"\n                  [src]=\"sanitizeUrl('https://www.youtube.com/embed/' + url?.youtubeLink)\" title=\"YouTube video player\"\n                  frameborder=\"0\"\n                  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n                  allowfullscreen></iframe>\n              </ion-slide>\n            </ion-slides>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"card shadow\"\n      style=\"background-color: white; border-color: rgb(144, 144, 144);margin-left: 5px;margin-right: 10px;\">\n      <div class=\"card-header text-center\" style=\"background-color: white;font-size: medium;font-weight: bold;\">\n        Best Selling packages\n      </div>\n      <div class=\"card-body\">\n        <ion-grid>\n          <ion-row>\n            <ion-slides #slides autoplay=\"true\" delay=\"2000\" pager=\"true\">\n              <ion-slide *ngFor=\"let item of listOfProduct\">\n                <img src=\"{{item.imageUploadDirectory}}\" (click)=\"rowClicked(item.id,'product')\" width=\"375px\"\n                  height=\"196.25px\" style=\"width: 375px !important; height: 196.25px !important;\">\n              </ion-slide>\n            </ion-slides>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n  <div class=\"card shadow\"\n    style=\"background-color: white; border-color: rgb(144, 144, 144);margin-left: 5px;margin-right: 10px;\">\n    <div class=\"card-header text-center\" style=\"background-color: white;font-size: medium;font-weight: bold;\">\n      Trusted Products and Brands Used By Us\n    </div>\n    <div class=\"card-body\">\n      <ion-grid>\n        <ion-row>\n          <ion-img src=\"{{listOfTrusted}}\"></ion-img>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <div class=\"card shadow\"\n      style=\"background-color: white; border-color: rgb(144, 144, 144);margin-left: 5px;margin-right: 10px;\">\n      <div class=\"card-header text-center\" style=\"background-color: white;font-size: medium;font-weight: bold;\">\n        Blog\n      </div>\n      <div class=\"card-body\">\n        <ion-grid>\n          <ion-row>\n            <ion-list>\n              <ion-item *ngFor=\"let blog of listBlog\" style=\"width: 300px\">\n                <ion-label>\n                  <ion-img src=\"{{blog.imageUploadDirectory}}\"></ion-img>\n                  <h2>{{ blog.blogTitle }}</h2>\n                  <p [innerHTML]=\"blog.description\" style=\"white-space: pre-wrap;\"></p>\n                </ion-label>\n              </ion-item>\n            </ion-list> </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"card shadow\"\n      style=\"background-color: white; border-color: rgb(144, 144, 144);margin-left: 5px;margin-right: 10px;\">\n      <div class=\"card-header text-center\" style=\"background-color: white;font-size: medium;font-weight: bold;\">\n        What do our customers have to say?\n      </div>\n      <div class=\"card-body\">\n        <ion-grid>\n          <ion-row>\n            <ion-list>\n              <ion-card *ngFor=\"let review of listOfReview\" style=\"width: 300px\">\n                <ion-item>\n                  <ion-label>\n                    <h2>{{ review.name }}</h2>\n                    <div>\n                      <ion-icon *ngIf=\"review.rating >= 1\" name=\"star\"></ion-icon>\n                      <ion-icon *ngIf=\"review.rating >= 2\" name=\"star\"></ion-icon>\n                      <ion-icon *ngIf=\"review.rating >= 3\" name=\"star\"></ion-icon>\n                      <ion-icon *ngIf=\"review.rating >= 4\" name=\"star\"></ion-icon>\n                      <ion-icon *ngIf=\"review.rating >= 5\" name=\"star\"></ion-icon>\n                    </div>\n                    <div [innerHTML]=\"review.review\" style=\"white-space: pre-wrap;\">\n                    </div>\n                  </ion-label>\n                </ion-item>\n              </ion-card>\n\n            </ion-list> </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ 40932:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .main-content .heading {\n  padding: 5px 20px;\n}\nion-content .main-content .heading .location {\n  padding-bottom: 5px;\n}\nion-content .main-content .heading .location ion-icon {\n  padding-right: 5px;\n}\nion-content .main-content .heading .location .text {\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\nion-content .main-content .heading .wish {\n  font-size: 22px;\n  font-weight: 600;\n}\nion-content .main-content .heading .searchbox {\n  width: 100%;\n  border: 1px solid lightgray;\n  border-radius: 15px;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n  align-items: center;\n  margin: 15px 0px 5px 0px;\n}\nion-content .main-content .heading .searchbox .icon {\n  font-size: 20px;\n  color: gray;\n  padding-right: 10px;\n}\nion-content .main-content .banner {\n  overflow: scroll;\n  display: flex;\n  flex-direction: row;\n}\nion-content .main-content .banner .menu {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\nion-content .main-content .banner .menu .card {\n  padding-left: 20px;\n}\nion-content .main-content .banner .menu .card .img {\n  width: 300px;\n  height: 20vh;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 15px;\n  margin: 10px 0px 10px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: white;\n}\nion-content .main-content .banner .menu .card .img .text {\n  font-size: 16px;\n}\nion-content .main-content .banner .menu .card .img .title {\n  font-size: 35px;\n  font-weight: 700px;\n}\nion-content .main-content .category {\n  padding: 20px;\n}\nion-content .main-content .category ion-label {\n  font-size: 18px;\n  font-weight: 600;\n}\nion-content .main-content .category .row {\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-around;\n}\nion-content .main-content .category .row .box {\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content .main-content .category .row .box img {\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n}\nion-content .main-content .category .row .box .title {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  margin: 10px;\n}\nion-content .main-content .style-main {\n  padding: 0px 20px;\n}\nion-content .main-content .style-main .title {\n  display: flex;\n  justify-content: space-between;\n}\nion-content .main-content .style-main .title ion-label {\n  font-size: 18px;\n  font-weight: 600;\n}\nion-content .main-content .style-main .title .text {\n  font-size: 14px;\n  color: gray;\n}\nion-content .main-content .style-main .style ion-col .style-img {\n  width: 100%;\n  height: 200px;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 15px;\n  margin: 10px 0px 10px 0px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-direction: column;\n  color: white;\n}\nion-content .main-content .style-main .style ion-col .style-img .text {\n  font-size: 16px;\n}\nion-content .main-content .style-main .style ion-col .style-img .title {\n  font-size: 24px;\n  font-weight: 700px;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 10px;\n}\n.grid-item {\n  background-color: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n}\n.button-menu {\n  font-size: 24px;\n  color: #000000;\n  background-color: transparent;\n  padding: 6px;\n  border-radius: 50%;\n}\nion-icon {\n  color: #25d366;\n}\n.black-cart-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBV0k7RUFDRSxpQkFBQTtBQUROO0FBRU07RUFDRSxtQkFBQTtBQUFSO0FBQ1E7RUFDRSxrQkFBQTtBQUNWO0FBQ1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUNWO0FBRU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVNO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUFSO0FBQ1E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ1Y7QUFJSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRk47QUFHTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0Usa0JBQUE7QUFEVjtBQUVVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFBWjtBQUNZO0VBQ0UsZUFBQTtBQUNkO0FBQ1k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDZDtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBSU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFGUjtBQUlRO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGVjtBQUdVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRFo7QUFHVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURaO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBS007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQUlRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRlY7QUFJUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBRlY7QUFPVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBTFo7QUFNWTtFQUNFLGVBQUE7QUFKZDtBQU1ZO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSmQ7QUFhQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7QUFWRjtBQVlBO0VBQ0Usc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVRGO0FBWUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVEY7QUFZQTtFQUNFLGNBQUE7QUFURjtBQVdBO0VBQ0UsWUFBQTtBQVJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5oZWFkaW5nIC5sb2NhdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5oZWFkaW5nIC5sb2NhdGlvbiBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmhlYWRpbmcgLmxvY2F0aW9uIC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5oZWFkaW5nIC53aXNoIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuaGVhZGluZyAuc2VhcmNoYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweCAwcHggNXB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmhlYWRpbmcgLnNlYXJjaGJveCAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5iYW5uZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuYmFubmVyIC5tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5iYW5uZXIgLm1lbnUgLmNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5iYW5uZXIgLm1lbnUgLmNhcmQgLmltZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuYmFubmVyIC5tZW51IC5jYXJkIC5pbWcgLnRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5iYW5uZXIgLm1lbnUgLmNhcmQgLmltZyAudGl0bGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmNhdGVnb3J5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmNhdGVnb3J5IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmNhdGVnb3J5IC5yb3cge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5jYXRlZ29yeSAucm93IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuY2F0ZWdvcnkgLnJvdyAuYm94IGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmNhdGVnb3J5IC5yb3cgLmJveCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc3R5bGUtbWFpbiB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc3R5bGUtbWFpbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zdHlsZS1tYWluIC50aXRsZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zdHlsZS1tYWluIC50aXRsZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zdHlsZS1tYWluIC5zdHlsZSBpb24tY29sIC5zdHlsZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnN0eWxlLW1haW4gLnN0eWxlIGlvbi1jb2wgLnN0eWxlLWltZyAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnN0eWxlLW1haW4gLnN0eWxlIGlvbi1jb2wgLnN0eWxlLWltZyAudGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24tbWVudSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzI1ZDM2Njtcbn1cblxuLmJsYWNrLWNhcnQtaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map