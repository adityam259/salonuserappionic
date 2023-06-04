"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product-listing_product-listing_module_ts"],{

/***/ 67277:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-listing/product-listing-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListingPageRoutingModule": () => (/* binding */ ProductListingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _product_listing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-listing.page */ 1702);




const routes = [
    {
        path: '',
        component: _product_listing_page__WEBPACK_IMPORTED_MODULE_0__.ProductListingPage
    }
];
let ProductListingPageRoutingModule = class ProductListingPageRoutingModule {
};
ProductListingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductListingPageRoutingModule);



/***/ }),

/***/ 21377:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-listing/product-listing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListingPageModule": () => (/* binding */ ProductListingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _product_listing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-listing-routing.module */ 67277);
/* harmony import */ var _product_listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-listing.page */ 1702);







let ProductListingPageModule = class ProductListingPageModule {
};
ProductListingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_listing_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductListingPageRoutingModule
        ],
        declarations: [_product_listing_page__WEBPACK_IMPORTED_MODULE_1__.ProductListingPage]
    })
], ProductListingPageModule);



/***/ }),

/***/ 1702:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-listing/product-listing.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListingPage": () => (/* binding */ ProductListingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_listing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-listing.page.html */ 73047);
/* harmony import */ var _product_listing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-listing.page.scss */ 63907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);










let ProductListingPage = class ProductListingPage {
    constructor(toastController, route, loadingController, requestServiceService, navCtrl, router) {
        this.toastController = toastController;
        this.route = route;
        this.loadingController = loadingController;
        this.requestServiceService = requestServiceService;
        this.navCtrl = navCtrl;
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
            originalPrice: ''
        };
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
        this.getListOfCategory();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('productType', productType);
            const loading = yield this.presentLoading(); // show loader
            try {
                const data = yield this.requestServiceService.postHttpCall("getDataByCategory", formData).toPromise();
                if (data.status === 'SUCCESS') {
                    console.log(data);
                    this.productData = data.data;
                    this.headerName = data.message;
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
        });
    }
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    getListOfCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
                this.getProduct(element.id, '');
            }
        });
    }
    openProductView(id) {
        console.log("id = " + id);
        const navigationExtras = {
            queryParams: {
                id: id
            }
        };
        this.router.navigate(['product-brand-details'], navigationExtras);
    }
};
ProductListingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ProductListingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product-listing',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_listing_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_listing_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductListingPage);



/***/ }),

/***/ 73047:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/product-listing/product-listing.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Product Listing</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"goToCart()\" size=\"large\"  style=\"padding-right: 15px;color: black;\">\n      <ion-icon name=\"cart\" class=\"black-cart-icon\"></ion-icon>\n      <ion-badge color=\"danger\" *ngIf=\"cartBadge!=0\">{{cartBadge}}</ion-badge>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"scroll-container\">\n    <div class=\"button-container\">\n      <ion-button *ngFor=\"let button of buttons\" shape=\"round\"  style=\"--background: #a91f06;\"  (click)=\"getClickedCatgegory(button)\"><strong>{{ button }}</strong></ion-button>\n    </div>\n  </div>\n  \n  <h5 style=\"padding: 10px;text-align: center;\">{{headerName}}</h5>\n  <ion-list>\n    <ion-item *ngFor=\"let product of productData\">\n      <ion-card style=\"width: 100%;\">\n        <ion-card-header>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <ion-card-title style=\"font-size: 15px;\">{{ product.title }}</ion-card-title>\n              <ion-card-subtitle>&#x20B9;{{ product.price }} &nbsp; &#x20B9;<s>{{ product.originalPrice }}</s> &nbsp; <i class=\"fas fa-info-circle\" (click)=\"openProductView(product.id)\"></i>\n              </ion-card-subtitle>\n              <p>{{ product.serviceTime }} </p>\n            </div>\n            <div class=\"col-4\">\n              <ion-button (click)=\"addToCart(product)\" style=\"--background: #ffffff;\n              border: solid blue;\n              color: blue;\n              font-weight: bold;\n              border-radius: 10px;\" (click)=\"addToCart(product)\">ADD +</ion-button>\n            </div>\n          </div>\n          \n          <hr>\n        </ion-card-header>\n        <ion-card-content [innerHTML]=\"product.description\">\n         \n        </ion-card-content>\n       \n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 63907:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-listing/product-listing.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".scroll-container {\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-bottom: 10px;\n}\n\n.button-container {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHRTtFQUNFLHFCQUFBO0FBQUoiLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiBcclxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-listing_product-listing_module_ts.js.map