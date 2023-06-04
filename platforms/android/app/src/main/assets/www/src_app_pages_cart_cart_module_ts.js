"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 54229:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 68455);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 7399:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 54229);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 68455);







let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 68455:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cart.page.html */ 3958);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 93431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let CartPage = class CartPage {
    constructor(storageService, navCtrl, requestServiceService, router) {
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.requestServiceService = requestServiceService;
        this.router = router;
        this.cartItems = [];
        this.i = 1;
        this.isChecked = false;
        this.deliverNotify = true;
        this.formData = {
            phoneNo: ''
        };
        this.isMembershipValid = false;
    }
    ngOnInit() {
        this.getSessionStorageForUser();
        this.showAddCoupon = false;
        this.getSessionStorage();
        this.calculate(this.cartItems);
        this.getdeliveryInstruction();
        this.finalCouponValue = 0;
        this.membershipTotalDiscount = 0;
        this.amountSaved = "";
        this.getCoupounCount();
    }
    handleCheckboxChange(checked) {
        if (checked) {
            this.deliverNotify = false;
        }
        else {
            this.deliverNotify = true;
        }
        sessionStorage.setItem('deliverNotify', this.deliverNotify.toString());
    }
    getdeliveryInstruction() {
        this.requestServiceService.getHttpCall("fetchDeliveryInstructions").subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.deliveryInstructionData = data.data.deliveryInstruction;
            }
            else {
                console.log(data);
            }
        });
    }
    getCoupounCount() {
        this.requestServiceService.getHttpCall("getCoupounCount").subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.coupounCount = data.data;
            }
            else {
                console.log(data);
            }
        });
    }
    getSessionStorage() {
        const storedCartItems = sessionStorage.getItem('cartItems');
        if (storedCartItems) {
            this.cartItems = JSON.parse(storedCartItems);
            console.log("Cart Data from session = > " + JSON.stringify(this.cartItems));
        }
    }
    getSessionStorageForUser() {
        this.storageService.get('mobileNo').then(result => {
            if (result != null) {
                console.log('Storage mobileNo & Pin: ' + result);
                let separatedString = result.split('|');
                this.mobileNo = separatedString[0];
                this.callToGetLogedInUser();
            }
        }).catch(e => {
            console.log('error: ', e);
        });
    }
    callToGetLogedInUser() {
        this.formData.phoneNo = this.mobileNo;
        this.requestServiceService.postHttpCall("validateLoginUser", this.formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.loginUser = data.data;
                // console.log("member login member Plan Id == "+ this.loginUser.memberPlanId);
                this.membershipId = this.loginUser.memberPlanId;
                this.isMember = this.loginUser.isMember;
                this.memberEndDate = this.loginUser.memberEndDate;
                this.memberStartDate = this.loginUser.memberStartDate;
                var currentDate = new Date();
                console.log("currentDate = " + currentDate);
                var day = currentDate.getDate();
                var month = currentDate.getMonth() + 1; // January is 0, so we add 1 to get the correct month
                var year = currentDate.getFullYear();
                var formattedDay = String(day).padStart(2, '0');
                var formattedMonth = String(month).padStart(2, '0');
                var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
                console.log("is Member = " + this.isMember);
                console.log("formattedDate = " + formattedDate);
                console.log("memberStartDate = " + this.memberStartDate);
                console.log("memberEndDate = " + this.memberEndDate);
                var formattedDateObj = new Date(formattedDate.split('-').reverse().join('-'));
                if (this.memberStartDate != null && this.memberEndDate != null) {
                    var memberStartDateObj = new Date(this.memberStartDate.split('-').reverse().join('-'));
                    var memberEndDateObj = new Date(this.memberEndDate.split('-').reverse().join('-'));
                }
                if (this.isMember != null) {
                    if (memberStartDateObj <= formattedDateObj && memberEndDateObj >= formattedDateObj) {
                        console.log("Current date is within the membership period.");
                        this.isMembershipValid = true;
                        console.log("isMembershipValid =" + this.isMembershipValid);
                        this.calculate(this.cartItems);
                    }
                    else {
                        console.log("Current date is outside the membership period.");
                    }
                }
            }
            else {
                console.log(data);
            }
        });
    }
    calculate(orders) {
        let prices = orders.map((item) => parseInt(item.price));
        console.log("Price = " + prices);
        let total = prices.reduce((acc, curr) => acc + curr, 0);
        console.log("total " + total); // Output: 60
        if (this.isMembershipValid) {
            console.log("calculate is membership valid" + this.isMembershipValid);
            const formData = new FormData();
            formData.append('id', this.membershipId);
            this.requestServiceService.postHttpCall("fetchAllMembershipDataWithId", formData).subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    console.log("==>" + data);
                    let membership = data.data;
                    let heading = membership.heading;
                    console.log("==>" + heading);
                    if (heading.includes("Star")) {
                        console.log("The heading contains 'star'");
                        let starmembershipdiscount = orders.map((item) => parseInt(item.membershipDiscount));
                        console.log("starmembershipdiscount = " + starmembershipdiscount);
                        let totalDiscount = total * (starmembershipdiscount / 100);
                        console.log("Total Discount = " + totalDiscount);
                        this.membershipTotalDiscount = totalDiscount;
                        // Deduct the discount from the total
                        let discountedTotal = total - totalDiscount;
                        console.log("Discounted Total = " + discountedTotal);
                        total = discountedTotal;
                        console.log(total);
                        this.total = total;
                        sessionStorage.setItem('cartItems', JSON.stringify(orders));
                        sessionStorage.setItem('total', this.total);
                        this.calculateNewOrder();
                    }
                    else if (heading.includes("Premium")) {
                        console.log("The heading does not contain 'premium'.");
                        console.log("The heading contains 'star'");
                        let starmembershipdiscount = orders.map((item) => parseInt(item.membershipDiscount));
                        console.log("starmembershipdiscount = " + starmembershipdiscount);
                        let totalDiscount = total * (starmembershipdiscount / 100);
                        console.log("Total Discount = " + totalDiscount);
                        this.membershipTotalDiscount = Number(totalDiscount.toFixed(2));
                        // Deduct the discount from the total
                        let discountedTotal = total - totalDiscount;
                        console.log("Discounted Total = " + discountedTotal);
                        total = discountedTotal;
                        console.log(total);
                        this.total = total;
                        sessionStorage.setItem('cartItems', JSON.stringify(orders));
                        sessionStorage.setItem('total', this.total);
                        this.calculateNewOrder();
                    }
                }
                else {
                    console.log(data);
                }
            });
        }
        else {
            console.log(total);
            this.total = total;
            sessionStorage.setItem('cartItems', JSON.stringify(orders));
            sessionStorage.setItem('total', this.total);
            this.calculateNewOrder();
        }
    }
    calculateNewOrder() {
        let couponCode = this.finalCouponValue;
        console.log(couponCode);
        let newTotal = this.total;
        newTotal = newTotal - (couponCode || 0);
        this.total = newTotal;
        if (couponCode !== 0) {
            this.amountSaved = (couponCode !== null && couponCode !== void 0 ? couponCode : "").toString();
            sessionStorage.setItem('total', this.total);
        }
    }
    decrementQuantity(item) {
        let itemIdToFind = item.id;
        if (item.quantity > 1) {
            item.quantity--;
            item.price = item.price - this.initialAmount;
            let foundIndex = this.cartItems.findIndex((item) => item.id === itemIdToFind);
            if (foundIndex !== -1) {
                //this.cartItems[foundIndex].quantity--;
                //this.cartItems[foundIndex].price = item.price;
            }
            else {
                this.cartItems.push(item);
            }
            this.calculate(this.cartItems);
        }
        else {
            // Remove item from cartItems array when quantity becomes 0
            let itemIndex = this.cartItems.findIndex((item) => item.id === itemIdToFind);
            if (itemIndex !== -1) {
                this.cartItems.splice(itemIndex, 1);
            }
            this.calculate(this.cartItems);
        }
    }
    incrementQuantity(item) {
        let itemIdToFind = item.id;
        if (this.i == 1) {
            this.initialAmount = item.price;
            this.i++;
        }
        item.quantity++;
        item.price = item.quantity * this.initialAmount;
        let foundIndex = this.cartItems.findIndex((item) => item.id === itemIdToFind);
        if (foundIndex !== -1) {
            //this.cartItems[foundIndex].quantity++;
            //this.cartItems[foundIndex].price = item.price;
        }
        else {
            this.cartItems.push(item);
        }
        this.calculate(this.cartItems);
    }
    removeItem(item) {
        const index = this.cartItems.indexOf(item);
        //alert(index)
        if (index > -1) {
            this.cartItems.splice(index, 1);
            sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        }
    }
    goToCheckout() {
        this.navCtrl.navigateForward('/checkout');
    }
    navigateToRoute() {
        this.showAddCoupon = true;
        this.router.navigate(['/coupon-code']); // Replace '/your-route' with the desired route path
    }
    apply() {
        // Handle the application logic with the input value
        this.showAddCoupon = false;
        console.log('Input value:', this.inputValueCoupon);
        this.inputValueCoupon = this.inputValueCoupon.replace(/\D/g, "");
        console.log('Modified input value:', this.inputValueCoupon);
        this.finalCouponValue = parseFloat(this.inputValueCoupon);
        this.calculateNewOrder();
    }
};
CartPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__.RequestServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-cart',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartPage);



/***/ }),

/***/ 3958:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/cart/cart.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Your Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"cartItems.length != 0\">\n  <ion-card *ngFor=\"let item of cartItems\">\n    <ion-card-header>\n      <ion-card-title>{{ item.title }}</ion-card-title>\n      <ion-card-subtitle>{{ item.title }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <table style=\"width: 100%;\">\n              <tr>\n                <td>Amount</td>\n                <td style=\"text-align: right;\"><b>&#x20b9;{{ item.price }}</b></td>\n              </tr>\n              <tr>\n                <td>Quantity</td>\n                <td style=\"text-align: right;\">\n                  <ion-buttons>\n                    <ion-button (click)=\"decrementQuantity(item)\">\n                      <ion-icon name=\"remove-circle-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-label>{{ item.quantity }}</ion-label>\n                    <ion-button (click)=\"incrementQuantity(item)\">\n                      <ion-icon name=\"add-circle-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"removeItem(item)\">\n                      <ion-icon name=\"trash-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                </td>\n              </tr>\n            </table>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-footer>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-label style=\"color: black;\">Delivery instruction</ion-label> <br>\n        <div class=\"checkbox-wrapper\">\n          <input type=\"checkbox\" [(ngModel)]=\"isChecked\" (change)=\"handleCheckboxChange($event.target.checked)\">\n          <label style=\"font-size: small;\"> &nbsp;&nbsp; {{deliveryInstructionData}}</label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n      <ion-card-content>\n        <ion-label style=\"color: black;\"></ion-label>\n        <img src=\"assets/discount.png\" width=\"15px\" height=\"15px\">\n\n          <label style=\"font-size: small;\"> &nbsp;&nbsp; Coupons & Offers </label>\n\n          <label style=\"font-size: small;float: right;\"> &nbsp;&nbsp; {{coupounCount}} &nbsp; Offers &nbsp;\n            <img src=\"assets/skip-track.png\" width=\"15px\" height=\"15px\" style=\"float: right;\"\n            (click)=\"navigateToRoute()\"></label>\n          \n\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"showAddCoupon\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              <ion-item>\n                <ion-input placeholder=\"Paste Coupon Code\" [(ngModel)]=\"inputValueCoupon\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-button color=\"danger\" expand=\"block\" (click)=\"apply()\">Apply</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n\n    </ion-card>\n    <ion-row>\n      <ion-col>\n        <hr>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <table style=\"width:100%\">\n                <tr>\n                  <td style=\"text-align: left;color: black;\"> Subtotal : </td> <td style=\"text-align: right;color: black;\"> &#x20b9; {{total}} </td>\n                </tr>\n                <tr>\n                  <td style=\"text-align: left;color: rgb(0, 0, 0);\"> Membership Discount : </td> <td style=\"text-align: right;color: rgb(5, 217, 245);\"> &#x20b9; {{membershipTotalDiscount}} </td>\n                </tr>\n                <tr>\n                  <td style=\"text-align: left;color: rgb(5, 217, 245);\"> Discount : </td> <td style=\"text-align: right;color: rgb(5, 217, 245);\"> &#x20b9; 0 </td>\n                </tr>\n                <tr>\n                  <td style=\"text-align: left;color: rgb(194, 39, 0);\"> Coupon Discount : </td> <td style=\"text-align: right;color: rgb(194, 39, 0);\"> &#x20b9; {{finalCouponValue}} </td>\n                </tr>\n                <tr>\n                  <td style=\"text-align: left;font-weight: bold;color: black;\"> Grand Total : </td> <td style=\"text-align: right;font-weight: bold;color: black;\"> &#x20b9; {{total}} </td>\n                </tr>\n              </table>\n            </ion-card-content>\n          </ion-card>\n        <ion-card style=\"background-color: aquamarine;\" *ngIf=\"amountSaved!=''\">\n          <ion-card-content>\n            <ion-label style=\"color: black;\"></ion-label>\n          <img src=\"assets/tag.png\" width=\"20px\" height=\"20px\">\n          <label style=\"font-size: small;\"> &nbsp;&nbsp; You have saved {{amountSaved}} on final bill </label>\n\n          </ion-card-content>\n        </ion-card>\n        <hr>\n        </ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"goToCheckout()\">Checkout</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</ion-content>\n\n<ion-content *ngIf=\"cartItems.length === 0\">\n  <ion-card>\n    <ion-card-content>\n      Your cart is empty.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 93431:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".checkbox-wrapper input[type=checkbox],\n.checkbox-wrapper label {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHFCQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveC13cmFwcGVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuLmNoZWNrYm94LXdyYXBwZXIgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts.js.map