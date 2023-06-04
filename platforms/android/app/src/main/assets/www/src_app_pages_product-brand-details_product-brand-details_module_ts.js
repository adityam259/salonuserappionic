"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product-brand-details_product-brand-details_module_ts"],{

/***/ 69606:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/product-brand-details/product-brand-details-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBrandDetailsPageRoutingModule": () => (/* binding */ ProductBrandDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _product_brand_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-brand-details.page */ 47172);




const routes = [
    {
        path: '',
        component: _product_brand_details_page__WEBPACK_IMPORTED_MODULE_0__.ProductBrandDetailsPage
    }
];
let ProductBrandDetailsPageRoutingModule = class ProductBrandDetailsPageRoutingModule {
};
ProductBrandDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductBrandDetailsPageRoutingModule);



/***/ }),

/***/ 87519:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product-brand-details/product-brand-details.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBrandDetailsPageModule": () => (/* binding */ ProductBrandDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _product_brand_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-brand-details-routing.module */ 69606);
/* harmony import */ var _product_brand_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-brand-details.page */ 47172);







let ProductBrandDetailsPageModule = class ProductBrandDetailsPageModule {
};
ProductBrandDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_brand_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductBrandDetailsPageRoutingModule
        ],
        declarations: [_product_brand_details_page__WEBPACK_IMPORTED_MODULE_1__.ProductBrandDetailsPage]
    })
], ProductBrandDetailsPageModule);



/***/ }),

/***/ 47172:
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-brand-details/product-brand-details.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBrandDetailsPage": () => (/* binding */ ProductBrandDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_brand_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-brand-details.page.html */ 55338);
/* harmony import */ var _product_brand_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-brand-details.page.scss */ 79993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);








let ProductBrandDetailsPage = class ProductBrandDetailsPage {
    constructor(route, loadingController, requestServiceService, toastController) {
        this.route = route;
        this.loadingController = loadingController;
        this.requestServiceService = requestServiceService;
        this.toastController = toastController;
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
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.itemId = params['id'];
        });
        console.log(this.itemId);
        this.getProduct(this.itemId);
    }
    getProduct(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('id', id);
            const loading = yield this.presentLoading(); // show loader
            try {
                const data = yield this.requestServiceService.postHttpCall("getDataBySubCategory", formData).toPromise();
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
                    this.brand = data.data.brand;
                    this.serviceTime = data.data.serviceTime;
                    this.price = data.data.price;
                    this.product.quantity = "1";
                    this.product.type = "category";
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
};
ProductBrandDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ProductBrandDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product-brand-details',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_brand_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_brand_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductBrandDetailsPage);



/***/ }),

/***/ 55338:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/product-brand-details/product-brand-details.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content>\n    <ion-slides [options]=\"slideOptions\">\n      <ion-slides #slides autoplay=\"true\" delay=\"2000\" pager=\"true\">\n        <ion-slide *ngIf=\"imageUploadDirectory!=''\">\n          <!--imageUploadDirectory-->\n          <img src=\"{{imageUploadDirectory}}\" width=\"375px\" height=\"196.25px\"\n            style=\"width: 375px !important; height: 196.25px !important;\">\n        </ion-slide>\n\n        <ion-slide *ngIf=\"imageUploadDirectory2!=''\">\n          <!--imageUploadDirectory-->\n          <img src=\"{{imageUploadDirectory2}}\" width=\"375px\" height=\"196.25px\"\n            style=\"width: 375px !important; height: 196.25px !important;\">\n        </ion-slide>\n\n        <ion-slide *ngIf=\"imageUploadDirectory3!=''\">\n          <!--imageUploadDirectory-->\n          <img src=\"{{imageUploadDirectory3}}\" width=\"375px\" height=\"196.25px\"\n            style=\"width: 375px !important; height: 196.25px !important;\">\n        </ion-slide>\n\n        <ion-slide *ngIf=\"imageUploadDirectory4!=''\">\n          <!--imageUploadDirectory-->\n          <img src=\"{{imageUploadDirectory4}}\" width=\"375px\" height=\"196.25px\"\n            style=\"width: 375px !important; height: 196.25px !important;\">\n        </ion-slide>\n\n        <ion-slide *ngIf=\"imageUploadDirectory5!=''\">\n          <!--imageUploadDirectory-->\n          <img src=\"{{imageUploadDirectory5}}\" width=\"375px\" height=\"196.25px\"\n            style=\"width: 375px !important; height: 196.25px !important;\">\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-slides>\n\n    <ion-item *ngIf=\"description!=''\">\n      <ion-label><b>Description</b></ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"description!=''\">\n      <ion-textarea [innerHTML]=\"description\"></ion-textarea><br>\n    </ion-item>\n    <ion-item *ngIf=\"brand!=''\">\n      <ion-label><b>Brand</b></ion-label><br>\n    </ion-item>\n    <ion-item *ngIf=\"brand!=''\">\n      <ion-textarea [innerHTML]=\"brand\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"serviceTime!=''\">\n      <ion-label><b>Service Time</b></ion-label><br>\n    </ion-item>\n    <ion-item *ngIf=\"serviceTime!=''\">\n      <ion-textarea [innerHTML]=\"serviceTime\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"price!=''\">\n      <ion-label><b>Price In ₹</b></ion-label><br>\n    </ion-item>\n    <ion-item *ngIf=\"price!=''\">\n      <ion-textarea [innerHTML]=\"price\"></ion-textarea>\n    </ion-item>\n\n    <ion-button expand=\"full\" (click)=\"addToCart(product)\">Add to Cart</ion-button>\n  </ion-content>\n</ion-content>");

/***/ }),

/***/ 79993:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product-brand-details/product-brand-details.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWJyYW5kLWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-brand-details_product-brand-details_module_ts.js.map