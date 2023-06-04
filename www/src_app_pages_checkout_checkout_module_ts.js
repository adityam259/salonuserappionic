"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_checkout_checkout_module_ts"],{

/***/ 4565:
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageRoutingModule": () => (/* binding */ CheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page */ 83022);




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ 885:
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageModule": () => (/* binding */ CheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 4565);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page */ 83022);







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
    })
], CheckoutPageModule);



/***/ }),

/***/ 83022:
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPage": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./checkout.page.html */ 56799);
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.scss */ 52980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);









let CheckoutPage = class CheckoutPage {
    constructor(storageService, alertController, requestServiceService, navCtrl) {
        this.storageService = storageService;
        this.alertController = alertController;
        this.requestServiceService = requestServiceService;
        this.navCtrl = navCtrl;
        this.bookedtimeSlots = [
        //'10:00 AM - 10:15 AM'
        ];
        this.formData = {
            phoneNo: '',
            userName: '',
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            address: '',
            gender: ''
        };
        this.postFormData = {
            userId: '',
            productId: [],
            totalAmount: '',
            type: '',
            orderTrackingId: '',
            status: '',
        };
        this.cartItems = [];
    }
    ngOnInit() {
        this.getSessionStorage();
        this.getSessionStorageCart();
        this.calculate(this.cartItems, this.cartTotal);
        this.getCancelationDetailsData();
        this.getAllTimeSlotsData();
        this.getdeliverNotify();
    }
    selectTime(timeSlot) {
        // Handle the selected time slot
        console.log('Selected date:', moment__WEBPACK_IMPORTED_MODULE_4__(this.selectedDate).format('YYYY-MM-DD'));
        console.log('Selected time:', timeSlot);
        this.selectedTime = timeSlot;
    }
    isTimeSlotBooked(timeSlot) {
        return this.bookedtimeSlots.includes(timeSlot);
    }
    getSessionStorageCart() {
        const storedCartItems = sessionStorage.getItem('cartItems');
        const storedTotal = sessionStorage.getItem('total');
        if (storedCartItems) {
            this.cartItems = JSON.parse(storedCartItems);
        }
        if (storedTotal) {
            this.cartTotal = JSON.parse(storedTotal);
        }
    }
    getSessionStorage() {
        this.storageService.get('mobileNo').then(result => {
            if (result != null) {
                console.log('Storage mobileNo & Pin: ' + result);
                let separatedString = result.split('|');
                this.mobileNo = separatedString[0];
                this.formData.phoneNo = this.mobileNo;
                this.getMobileData();
            }
        }).catch(e => {
            console.log('error: ', e);
        });
    }
    getAllTimeSlotsData() {
        this.requestServiceService.getHttpCall("getAllTimeSlots").subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.timeSlotsData = data.data;
                console.log("time slot data: " + this.timeSlotsData);
                this.timeSlots = this.timeSlotsData.map(obj => obj.timeSlot);
                console.log("time slot data: " + this.timeSlots);
            }
            else {
                console.log(data);
                this.message = data.message;
            }
        });
    }
    getCancelationDetailsData() {
        this.requestServiceService.getHttpCall("fetchCancelationInstructions").subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.cancelationDeatils = data.data.cancelationInstruction;
            }
            else {
                console.log(data);
                this.message = data.message;
            }
        });
    }
    getMobileData() {
        this.requestServiceService.postHttpCall("validateLoginUser", this.formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.formData.firstName = data.data.firstName;
                this.formData.lastName = data.data.lastName;
                this.formData.address = data.data.address;
                this.formData.emailId = data.data.emailId;
                this.formData.gender = data.data.gender;
                this.formData.phoneNo = data.data.phoneNo;
                this.formData.userName = data.data.userName;
                this.postFormData.userId = data.data.id;
            }
            else {
                console.log(data);
                this.message = data.message;
            }
        });
    }
    onPaymentMethodChange(value) {
        this.paymentMode = value;
    }
    calculate(orders, totalValue) {
        let prices = orders.map((item) => parseInt(item.price));
        console.log("Price = " + prices);
        let total = prices.reduce((acc, curr) => acc + curr, 0);
        console.log("total " + total); // Output: 60
        this.total = total;
        this.total = totalValue;
        sessionStorage.setItem('cartItems', JSON.stringify(orders));
        this.postFormData.totalAmount = this.total;
        var productIds = orders;
        this.postFormData.productId = productIds;
        console.log("=====>Checkout Place order" + JSON.stringify(this.postFormData.productId));
    }
    placeOrder() {
        const formData1 = new FormData();
        formData1.append('userId', this.postFormData.userId);
        formData1.append('productId', JSON.stringify(this.postFormData.productId));
        formData1.append('status', "pending");
        formData1.append('totalAmount', this.postFormData.totalAmount);
        formData1.append('dateSeleted', moment__WEBPACK_IMPORTED_MODULE_4__(this.selectedDate).format('YYYY-MM-DD'));
        formData1.append('timeSlot', this.selectedTime);
        formData1.append('paymentMode', this.paymentMode);
        formData1.append('deliverNotify', this.deliverNotify);
        //deliverNotify
        //formData1.append('type', this.postFormData.type);
        //console.log("===> "+formData1.get('productId'));
        console.log("proceed checkout==> " + formData1);
        this.requestServiceService.postHttpCall("confirmOrder", formData1).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                //clear the cart session object 
                this.storageService.remove('cartItems');
                sessionStorage.removeItem('cartItems');
                sessionStorage.setItem('mobileNo', this.mobileNo);
                //show popup
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('tabs/tab1');
            }
            else {
                console.log(data);
                //show popup
            }
        });
    }
    presentAlert(status, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: status,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    getdeliverNotify() {
        const value = sessionStorage.getItem('deliverNotify');
        console.log("deliverNotify =" + value);
        this.deliverNotify = value;
    }
    goToOtherPage(url) {
        this.navCtrl.navigateForward(url);
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
CheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-checkout',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckoutPage);



/***/ }),

/***/ 56799:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/checkout/checkout.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>checkout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Name:</ion-label>\n        <ion-input type=\"text\">{{formData.firstName}} {{formData.lastName}}</ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email:</ion-label>\n        <ion-input type=\"email\">{{formData.emailId}}</ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mobile No:</ion-label>\n        <ion-input type=\"text\">{{formData.phoneNo}}</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address:</ion-label>\n        <ion-textarea>{{formData.address}}</ion-textarea>\n      </ion-item>\n\n\n    </ion-list>\n  </ion-card>\n  <ion-card style=\"background-color: bisque;border-color: rgb(250, 143, 12);\">\n    <ion-card-content>\n      <ion-label></ion-label>\n      <p [innerHTML]=\"cancelationDeatils\"></p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label>Select Date</ion-label>\n    </ion-item>\n    <br>\n    <ion-datetime displayFormat=\"DD.MM.YYYY\" presentation=\"date\" [(ngModel)]=\"selectedDate\"\n      style=\"background-color: white;\"></ion-datetime>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label>Time</ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let timeSlot of timeSlots\">\n          <button  [ngStyle]=\"{'background-color': isTimeSlotBooked(timeSlot) ? '#e27171' : '',\n          'color': isTimeSlotBooked(timeSlot) ? 'white' : '',\n          'background-color.clicked': selectedTime === timeSlot ? 'green' : ''\n        }\"\n          [disabled]=\"isTimeSlotBooked(timeSlot)\"\n          ion-button (click)=\"selectTime(timeSlot)\"\n          [class.clicked]=\"selectedTime === timeSlot\"\n            style=\"width: 100%;height: 30px;border-radius: 5px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\"> {{ timeSlot }}</button>\n\n        </ion-col>\n        \n      </ion-row>\n      <!-- Add more rows and columns for other time slots -->\n    </ion-grid>\n\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label>Payment Method:</ion-label>\n      <ion-select (ionChange)=\"onPaymentMethodChange($event.target.value)\">\n        <!--<ion-select-option value=\"credit-card\">Credit Card</ion-select-option>-->\n        <ion-select-option value=\"cod\">COD</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-label>Products :</ion-label>\n      <ul>\n        <li *ngFor=\"let item of cartItems; let i = index\">\n          {{ i + 1 }}. &nbsp; {{ item.title }}\n        </li>\n      </ul>\n      <table style=\"width:100%\">\n        <tr>\n          <td style=\"text-align: left;font-weight: bold;color: black;\"> Grand Total : </td>\n          <td style=\"text-align: right;font-weight: bold;color: black;\"> &#x20b9; {{total}} </td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"placeOrder()\">Place Order</ion-button>\n</ion-content>");

/***/ }),

/***/ 52980:
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ul {\n  list-style-type: none;\n}\n\nli {\n  padding-left: 20px;\n  text-indent: -20px;\n}\n\n.clicked {\n  background-color: green !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHRleHQtaW5kZW50OiAtMjBweDtcclxuICB9XHJcblxyXG4gIC5jbGlja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_checkout_checkout_module_ts.js.map