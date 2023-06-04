"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mens_mens_module_ts"],{

/***/ 55896:
/*!***************************************************!*\
  !*** ./src/app/pages/mens/mens-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensPageRoutingModule": () => (/* binding */ MensPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _mens_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mens.page */ 25425);

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
        component: _mens_page__WEBPACK_IMPORTED_MODULE_0__.MensPage
    }
];
let MensPageRoutingModule = class MensPageRoutingModule {
};
MensPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MensPageRoutingModule);



/***/ }),

/***/ 26798:
/*!*******************************************!*\
  !*** ./src/app/pages/mens/mens.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensPageModule": () => (/* binding */ MensPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _mens_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mens-routing.module */ 55896);
/* harmony import */ var _mens_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mens.page */ 25425);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let MensPageModule = class MensPageModule {
};
MensPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mens_routing_module__WEBPACK_IMPORTED_MODULE_0__.MensPageRoutingModule
        ],
        declarations: [_mens_page__WEBPACK_IMPORTED_MODULE_1__.MensPage]
    })
], MensPageModule);



/***/ }),

/***/ 25425:
/*!*****************************************!*\
  !*** ./src/app/pages/mens/mens.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensPage": () => (/* binding */ MensPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mens_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mens.page.html */ 9583);
/* harmony import */ var _mens_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mens.page.scss */ 94043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



let MensPage = class MensPage {
    constructor(router, NavCtrl) {
        this.router = router;
        this.NavCtrl = NavCtrl;
    }
    ngOnInit() {
    }
    goToBack() {
        this.NavCtrl.back();
    }
    goToSlot() {
        this.router.navigate(['select-slot']);
    }
};
MensPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
MensPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mens',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mens_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mens_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MensPage);



/***/ }),

/***/ 9583:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/mens/mens.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Mens</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main-content\">\n    <div class=\"segments\">\n      <div class=\"item\">\n        <ion-segment value=\"1\">\n          <ion-segment-button value=\"1\">\n            <ion-label>Hair</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n            <ion-label>Beard</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"3\">\n            <ion-label>Face</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"4\">\n            <ion-label>Massage</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"5\">\n            <ion-label>mask</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </div>\n    <div class=\"services\">\n      <div class=\"card\" *ngFor=\"let item of [1,2,3,4]\">\n        <div class=\"img\" [style.backgroundImage]=\"'url(assets/beard.jpg)'\">\n          <div class=\"title\">\n            <ion-label class=\"name\">Regular Hair Cut</ion-label>\n            <ion-label class=\"price\">$ 10.12</ion-label>\n          </div>\n          <ion-label class=\"add-btn\">Add Service</ion-label>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer\">\n\n    <ion-button (click)=\"goToSlot()\" expand=\"block\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"btn\" (click)=\"goToSlot()\" expand=\"block\">\n      Book Appointmet\n    </ion-button>\n  </div>\n\n</ion-footer>\n");

/***/ }),

/***/ 94043:
/*!*******************************************!*\
  !*** ./src/app/pages/mens/mens.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .main-content .segments {\n  margin: 0px 0px 1rem 0px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: row;\n  overflow: scroll;\n}\nion-content .main-content .segments .item {\n  background-color: var(--ion-color-light);\n  border-radius: 30px;\n}\nion-content .main-content .segments .item ion-segment {\n  background: transparent;\n}\nion-content .main-content .segments .item ion-segment ion-segment-button {\n  padding: 5px;\n  --border-radius: 30px;\n  --indicator-color: var(--ion-color-primary) !important;\n  --indicator-box-shadow: transparent !important;\n  --color-checked: white;\n  --background: var(--ion-color-light);\n  margin: 5px;\n}\nion-content .main-content .services .card {\n  padding: 8px 20px;\n}\nion-content .main-content .services .card .img {\n  width: 100%;\n  height: 20vh;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 20px;\n}\nion-content .main-content .services .card .img .title {\n  display: flex;\n  flex-direction: column;\n  color: white;\n}\nion-content .main-content .services .card .img .title .name {\n  font-size: 18px;\n  font-weight: 500;\n  padding: 10px 0px;\n}\nion-content .main-content .services .card .img .title .price {\n  font-size: 16px;\n  font-weight: 500;\n}\nion-content .main-content .services .card .img .add-btn {\n  background-color: white;\n  padding: 5px 10px;\n  border-radius: 30px;\n  font-size: 14px;\n  font-weight: 600;\n}\nion-footer {\n  padding: 20px;\n}\nion-footer .footer {\n  display: flex;\n}\nion-footer .footer .btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBV0k7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUVNO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDRSx1QkFBQTtBQUFWO0FBQ1U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtFQUNBLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFDWjtBQUtNO0VBQ0UsaUJBQUE7QUFIUjtBQUlRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUZWO0FBR1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRFo7QUFHWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRGQ7QUFHWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURkO0FBSVU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGWjtBQVNBO0VBQ0UsYUFBQTtBQU5GO0FBT0U7RUFDRSxhQUFBO0FBTEo7QUFPSTtFQUNFLFdBQUE7QUFMTiIsImZpbGUiOiJtZW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VnbWVudHMge1xuICBtYXJnaW46IDBweCAwcHggMXJlbSAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnNlZ21lbnRzIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnNlZ21lbnRzIC5pdGVtIGlvbi1zZWdtZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zZWdtZW50cyAuaXRlbSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1ib3gtc2hhZG93OiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbjogNXB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VydmljZXMgLmNhcmQge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnNlcnZpY2VzIC5jYXJkIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnNlcnZpY2VzIC5jYXJkIC5pbWcgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VydmljZXMgLmNhcmQgLmltZyAudGl0bGUgLm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VydmljZXMgLmNhcmQgLmltZyAudGl0bGUgLnByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VydmljZXMgLmNhcmQgLmltZyAuYWRkLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbmlvbi1mb290ZXIgLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24tZm9vdGVyIC5mb290ZXIgLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mens_mens_module_ts.js.map