"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gift-vouchers_gift-vouchers_module_ts"],{

/***/ 35635:
/*!*********************************************************************!*\
  !*** ./src/app/pages/gift-vouchers/gift-vouchers-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftVouchersPageRoutingModule": () => (/* binding */ GiftVouchersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _gift_vouchers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-vouchers.page */ 45119);




const routes = [
    {
        path: '',
        component: _gift_vouchers_page__WEBPACK_IMPORTED_MODULE_0__.GiftVouchersPage
    }
];
let GiftVouchersPageRoutingModule = class GiftVouchersPageRoutingModule {
};
GiftVouchersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GiftVouchersPageRoutingModule);



/***/ }),

/***/ 77797:
/*!*************************************************************!*\
  !*** ./src/app/pages/gift-vouchers/gift-vouchers.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftVouchersPageModule": () => (/* binding */ GiftVouchersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _gift_vouchers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-vouchers-routing.module */ 35635);
/* harmony import */ var _gift_vouchers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift-vouchers.page */ 45119);







let GiftVouchersPageModule = class GiftVouchersPageModule {
};
GiftVouchersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gift_vouchers_routing_module__WEBPACK_IMPORTED_MODULE_0__.GiftVouchersPageRoutingModule
        ],
        declarations: [_gift_vouchers_page__WEBPACK_IMPORTED_MODULE_1__.GiftVouchersPage]
    })
], GiftVouchersPageModule);



/***/ }),

/***/ 45119:
/*!***********************************************************!*\
  !*** ./src/app/pages/gift-vouchers/gift-vouchers.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftVouchersPage": () => (/* binding */ GiftVouchersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gift_vouchers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gift-vouchers.page.html */ 75632);
/* harmony import */ var _gift_vouchers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift-vouchers.page.scss */ 88606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);






let GiftVouchersPage = class GiftVouchersPage {
    constructor(requestServiceService, loadingController) {
        this.requestServiceService = requestServiceService;
        this.loadingController = loadingController;
        this.listOfData = []; // Replace with your actual data array
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getGiftVouchersData();
        });
    }
    getGiftVouchersData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading(); // show loader
            yield this.requestServiceService.getHttpCall("getGiftVouchers").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    this.listOfData = data.data;
                }
                else {
                    this.message = data.message;
                }
                this.loadingController.dismiss(); // hide loader
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading List Of Gift Voucher Status...',
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
    buyNow(id) {
        console.log(id);
    }
};
GiftVouchersPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
GiftVouchersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-gift-vouchers',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gift_vouchers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gift_vouchers_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiftVouchersPage);



/***/ }),

/***/ 75632:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/gift-vouchers/gift-vouchers.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Gift Vouchers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  \n  <ion-card class=\"cardClass\" *ngFor=\"let item of listOfData\">\n    <img src=\"{{item.imageUploadDirectory}}\" />\n    <ion-card-content>\n      <div class=\"coupon\">\n        <div class=\"code\">\n          <h2>{{item.giftTitle}}</h2>\n          <p class=\"text\" [innerHTML]=\"item.description\"></p>\n          <button class=\"copy-button\" style=\"width: 100%;height: 30px;border-radius: 5px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);background-color: coral;color: aliceblue;\" (click)=\"buyNow(item.id)\">Buy Now</button>\n        </div>\n        <!--<div class=\"image\"></div>-->\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n");

/***/ }),

/***/ 88606:
/*!*************************************************************!*\
  !*** ./src/app/pages/gift-vouchers/gift-vouchers.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWZ0LXZvdWNoZXJzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gift-vouchers_gift-vouchers_module_ts.js.map