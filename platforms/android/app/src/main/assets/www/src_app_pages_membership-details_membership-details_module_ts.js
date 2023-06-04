"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_membership-details_membership-details_module_ts"],{

/***/ 84613:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/membership-details/membership-details-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipDetailsPageRoutingModule": () => (/* binding */ MembershipDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _membership_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./membership-details.page */ 1105);




const routes = [
    {
        path: '',
        component: _membership_details_page__WEBPACK_IMPORTED_MODULE_0__.MembershipDetailsPage
    }
];
let MembershipDetailsPageRoutingModule = class MembershipDetailsPageRoutingModule {
};
MembershipDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MembershipDetailsPageRoutingModule);



/***/ }),

/***/ 35117:
/*!***********************************************************************!*\
  !*** ./src/app/pages/membership-details/membership-details.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipDetailsPageModule": () => (/* binding */ MembershipDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _membership_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./membership-details-routing.module */ 84613);
/* harmony import */ var _membership_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./membership-details.page */ 1105);







let MembershipDetailsPageModule = class MembershipDetailsPageModule {
};
MembershipDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _membership_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembershipDetailsPageRoutingModule
        ],
        declarations: [_membership_details_page__WEBPACK_IMPORTED_MODULE_1__.MembershipDetailsPage]
    })
], MembershipDetailsPageModule);



/***/ }),

/***/ 1105:
/*!*********************************************************************!*\
  !*** ./src/app/pages/membership-details/membership-details.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipDetailsPage": () => (/* binding */ MembershipDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_membership_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./membership-details.page.html */ 94220);
/* harmony import */ var _membership_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./membership-details.page.scss */ 28386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);









let MembershipDetailsPage = class MembershipDetailsPage {
    constructor(route, router, loadingController, requestServiceService, toastController, navCtrl) {
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
        this.requestServiceService = requestServiceService;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.cartItems = [];
        this.product = {
            id: '',
            price: '',
            quantity: '',
            title: '',
            type: '',
        };
    }
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
    goToCart() {
        this.navCtrl.navigateForward('/cart');
    }
    //make method and bring the member ship deatils from backend 
    getmemberShipData(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('id', id);
            this.presentLoading(); // show loader
            this.requestServiceService.postHttpCall("fetchAllMembershipDataWithId", formData).subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    console.log("==>" + data);
                    this.membership = data.data;
                    this.heading = this.membership.heading;
                    this.description = this.membership.description;
                    this.termsConditions = this.membership.termsConditions;
                    this.id = this.membership.id;
                    this.price = this.membership.price;
                }
                else {
                    console.log(data);
                    this.message = data.message;
                }
                this.loadingController.dismiss();
            });
        });
    }
    // handle become a member button
    onSubmitBecomeMember(id) {
        console.log(id);
        this.buildOrderFromInputData(id, this.heading, this.price, 1, "membership");
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading Membrship Data',
                spinner: 'crescent'
            });
            yield loading.present();
        });
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
                membershipDiscount: '0',
                membershipDiscount2: '0'
            });
        }
        sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        console.log("Stringy json cart" + JSON.stringify(this.cartItems));
        this.presentToast(`${order.title} added to cart`);
    }
};
MembershipDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
MembershipDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-membership-details',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_membership_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_membership_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MembershipDetailsPage);



/***/ }),

/***/ 94220:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/membership-details/membership-details.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{heading}} Details</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"goToCart()\" size=\"large\"  style=\"padding-right: 15px;color: black;\">\n      <ion-icon name=\"cart\" class=\"black-cart-icon\"></ion-icon>\n      <ion-badge color=\"danger\" *ngIf=\"cartBadge!=0\">{{cartBadge}}</ion-badge>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header style=\"text-align: center;background-color: #842029;\">\n      <ion-card-title style=\"color:white\">{{heading}}</ion-card-title>\n      <ion-card-subtitle></ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item style=\"text-align: center;width: 100%;\">\n          <ion-label\n            style=\"display: flex; justify-content: center; align-items: center; text-align: center; width: 100%;\"\n            [innerHTML]=\"description\"></ion-label>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <div style=\"text-align: center;\">\n        <h6 style=\"font-size: 20px;font-weight: bold;\">Terms & Conditions</h6>\n      </div>\n      <br>\n      <p style=\"text-align: justify;\" [innerHTML]=\"termsConditions\"></p>\n\n    </ion-card-content>\n  </ion-card>\n\n  <div style=\"display: flex; justify-content: center;\">\n    <ion-button (click)=\"onSubmitBecomeMember(id)\">\n      Become Member\n    </ion-button>\n  </div>\n<br>\n</ion-content>");

/***/ }),

/***/ 28386:
/*!***********************************************************************!*\
  !*** ./src/app/pages/membership-details/membership-details.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXJzaGlwLWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_membership-details_membership-details_module_ts.js.map