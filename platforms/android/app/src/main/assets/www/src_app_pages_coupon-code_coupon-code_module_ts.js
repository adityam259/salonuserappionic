"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_coupon-code_coupon-code_module_ts"],{

/***/ 54080:
/*!*****************************************************************!*\
  !*** ./src/app/pages/coupon-code/coupon-code-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponCodePageRoutingModule": () => (/* binding */ CouponCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _coupon_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coupon-code.page */ 30534);




const routes = [
    {
        path: '',
        component: _coupon_code_page__WEBPACK_IMPORTED_MODULE_0__.CouponCodePage
    }
];
let CouponCodePageRoutingModule = class CouponCodePageRoutingModule {
};
CouponCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CouponCodePageRoutingModule);



/***/ }),

/***/ 96892:
/*!*********************************************************!*\
  !*** ./src/app/pages/coupon-code/coupon-code.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponCodePageModule": () => (/* binding */ CouponCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _coupon_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coupon-code-routing.module */ 54080);
/* harmony import */ var _coupon_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupon-code.page */ 30534);







let CouponCodePageModule = class CouponCodePageModule {
};
CouponCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coupon_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.CouponCodePageRoutingModule
        ],
        declarations: [_coupon_code_page__WEBPACK_IMPORTED_MODULE_1__.CouponCodePage]
    })
], CouponCodePageModule);



/***/ }),

/***/ 30534:
/*!*******************************************************!*\
  !*** ./src/app/pages/coupon-code/coupon-code.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponCodePage": () => (/* binding */ CouponCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coupon_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coupon-code.page.html */ 97685);
/* harmony import */ var _coupon_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupon-code.page.scss */ 41437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);






let CouponCodePage = class CouponCodePage {
    constructor(requestServiceService, loadingController) {
        this.requestServiceService = requestServiceService;
        this.loadingController = loadingController;
        this.couponCode200 = 'FLAT200';
        this.couponCode250 = 'FLAT250';
        this.couponCodeFreeff = 'FREEFF';
    }
    ngOnInit() {
        this.getCouponApi();
    }
    getCouponApi() {
        this.presentLoading();
        this.requestServiceService.getHttpCall("getCouponApi").subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.couponData = data.data;
            }
            else {
                console.log(data);
            }
            this.loadingController.dismiss();
        });
    }
    copyCode(code) {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
CouponCodePage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
CouponCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-coupon-code',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coupon_code_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coupon_code_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CouponCodePage);



/***/ }),

/***/ 97685:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/coupon-code/coupon-code.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coupon Code</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card class=\"cardClass\" *ngFor=\"let item of couponData\">\n    <img alt=\"Silhouette of mountains\" src=\"{{item.imageUploadDirectory}}\" />\n    <ion-card-content>\n      <div class=\"coupon\">\n        <div class=\"code\">\n          <h2 [innerHTML]=\"item.description\"></h2>\n          <p class=\"text\"></p>\n          <button class=\"copy-button\" (click)=\"copyCode(item.couponCode)\">Copy Code {{item.couponCode}}</button>\n        </div>\n        <!--<div class=\"image\"></div>-->\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  \n</ion-content>\n");

/***/ }),

/***/ 41437:
/*!*********************************************************!*\
  !*** ./src/app/pages/coupon-code/coupon-code.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  max-width: 500px;\n  margin: 20px auto;\n}\n\n.coupon {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.code {\n  flex: 1;\n}\n\n.highlight {\n  color: #007bff;\n}\n\n.text {\n  margin: 10px 0;\n}\n\n.copy-button {\n  display: block;\n  margin-top: 10px;\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 100%;\n}\n\n.image {\n  width: 100px;\n  height: 100px;\n  background-color: #007bff;\n  border-radius: 50%;\n}\n\n.cardClass {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbi1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLE9BQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKIiwiZmlsZSI6ImNvdXBvbi1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNvdXBvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvZGUge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmhpZ2hsaWdodCB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3B5LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuY2FyZENsYXNze1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coupon-code_coupon-code_module_ts.js.map