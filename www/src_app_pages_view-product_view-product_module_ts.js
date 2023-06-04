"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_view-product_view-product_module_ts"],{

/***/ 38509:
/*!*******************************************************************!*\
  !*** ./src/app/pages/view-product/view-product-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProductPageRoutingModule": () => (/* binding */ ViewProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-product.page */ 51087);




const routes = [
    {
        path: '',
        component: _view_product_page__WEBPACK_IMPORTED_MODULE_0__.ViewProductPage
    }
];
let ViewProductPageRoutingModule = class ViewProductPageRoutingModule {
};
ViewProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewProductPageRoutingModule);



/***/ }),

/***/ 95991:
/*!***********************************************************!*\
  !*** ./src/app/pages/view-product/view-product.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProductPageModule": () => (/* binding */ ViewProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _view_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-product-routing.module */ 38509);
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-product.page */ 51087);







let ViewProductPageModule = class ViewProductPageModule {
};
ViewProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewProductPageRoutingModule
        ],
        declarations: [_view_product_page__WEBPACK_IMPORTED_MODULE_1__.ViewProductPage]
    })
], ViewProductPageModule);



/***/ }),

/***/ 51087:
/*!*********************************************************!*\
  !*** ./src/app/pages/view-product/view-product.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProductPage": () => (/* binding */ ViewProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-product.page.html */ 32558);
/* harmony import */ var _view_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-product.page.scss */ 21696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ 90196);












let ViewProductPage = class ViewProductPage {
    constructor(route, loadingController, requestServiceService, alertController, navCtrl, storageService, toastController, router) {
        this.route = route;
        this.loadingController = loadingController;
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.toastController = toastController;
        this.router = router;
        this.cartItems = [];
        this.product = {
            id: '',
            image: '',
            price: '',
            quantity: '',
            title: '',
            rate: '',
            time: '',
            description: '',
            type: '',
            originalPrice: '',
            membershipDiscount: '',
            membershipDiscount2: '',
            imageUploadDirectory: ''
        };
        this.i = 1;
        this.buttons = [];
    }
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
    getProduct(id, productType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('productType', productType);
            const loading = yield this.presentLoading(); // show loader
            try {
                const data = yield this.requestServiceService.postHttpCall("getProductDetails", formData).toPromise();
                if (data.status === 'SUCCESS') {
                    console.log(data);
                    this.product.id = data.data.id;
                    this.product.imageUploadDirectory = data.data.imageUploadDirectory;
                    this.product.title = data.data.title;
                    this.product.price = data.data.rate;
                    this.product.quantity = '1';
                    this.product.time = data.data.time;
                    this.product.description = data.data.description;
                    this.product.originalPrice = data.data.originalPrice;
                    this.product.type = productType;
                    this.product.membershipDiscount = data.data.membershipDiscount;
                    this.product.membershipDiscount2 = data.data.membershipDiscount2;
                    this.getListOfCategory();
                }
                else {
                    console.log(data);
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
            // console.log("==>"+this.product.imageUploadDirectory);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    presentAlert(status, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: status,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
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
        console.log("order == " + order.type);
        let existingItem = this.cartItems.find((item) => item.id === order.id);
        if (existingItem) {
            this.presentToast(`${order.title} already added to cart`);
        }
        else {
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
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                position: 'bottom',
            });
            toast.present();
        });
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
    getListOfCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading(); // show loader
            this.requestServiceService.getHttpCall("getCategoryApi").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listOfCategory = data.data;
                    this.listOfCategory.forEach(element => {
                        //console.log("=>"+element.categoryName);
                        this.buttons.push(element.categoryName);
                    });
                    console.log(this.listOfCategory);
                    console.log(this.buttons);
                }
                else {
                    this.message = data.message;
                }
                this.loadingController.dismiss(); // hide loader
            });
        });
    }
    getClickedCatgegory(button) {
        //console.log(button);
        this.listOfCategory.forEach(element => {
            if (element.categoryName.includes(button)) {
                //console.log(element.id);
                //this.getProduct(element.id,'');
                const navigationExtras = {
                    queryParams: {
                        id: element.id,
                        productType: ''
                    }
                };
                this.router.navigate(['product-listing'], navigationExtras);
            }
        });
    }
};
ViewProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ViewProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-view-product',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_product_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewProductPage);



/***/ }),

/***/ 32558:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/view-product/view-product.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Product</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"goToCart()\" style=\"padding-right: 15px;\">\n      <ion-icon name=\"cart\"></ion-icon>\n      <ion-badge color=\"danger\" *ngIf=\"cartBadge!=0\">{{cartBadge}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"scroll-container\">\n    <div class=\"button-container\">\n      <ion-button *ngFor=\"let button of buttons\" shape=\"round\"  style=\"--background: #a91f06;\"  (click)=\"getClickedCatgegory(button)\"><strong>{{ button }}</strong></ion-button>\n    </div>\n  </div>\n  \n  <ion-card>\n    <img src=\"{{product.imageUploadDirectory}}\">\n    <ion-card-header>\n      <ion-card-title>{{product.title }}</ion-card-title>\n      <ion-card-subtitle>&#x20b9; {{product.price }} &nbsp; &#x20b9; <strong style=\"text-decoration: line-through;\"> {{product.originalPrice }}</strong></ion-card-subtitle>\n      <ion-card-subtitle><span class=\"clock\"></span> {{product.time }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content  [innerHTML]=\"product.description\">\n    </ion-card-content>\n    <ion-button expand=\"block\" (click)=\"addToCart(product)\">Add to Cart</ion-button>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 21696:
/*!***********************************************************!*\
  !*** ./src/app/pages/view-product/view-product.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".clock::before {\n  content: \"\";\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #000;\n  position: relative;\n  top: 2px;\n  margin-right: 5px;\n  animation: rotate 1s linear infinite;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.scroll-container {\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-bottom: 10px;\n}\n\n.button-container {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRTtJQUFPLHVCQUFBO0VBRVQ7RUFERTtJQUFLLHlCQUFBO0VBSVA7QUFDRjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7QUFESiIsImZpbGUiOiJ2aWV3LXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb2NrOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcbiAgLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiBcclxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_view-product_view-product_module_ts.js.map