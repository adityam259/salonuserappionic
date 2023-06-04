"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_service-location_service-location_module_ts"],{

/***/ 32115:
/*!***************************************************************************!*\
  !*** ./src/app/pages/service-location/service-location-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceLocationPageRoutingModule": () => (/* binding */ ServiceLocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-location.page */ 1787);

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
        component: _service_location_page__WEBPACK_IMPORTED_MODULE_0__.ServiceLocationPage
    }
];
let ServiceLocationPageRoutingModule = class ServiceLocationPageRoutingModule {
};
ServiceLocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServiceLocationPageRoutingModule);



/***/ }),

/***/ 63489:
/*!*******************************************************************!*\
  !*** ./src/app/pages/service-location/service-location.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceLocationPageModule": () => (/* binding */ ServiceLocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _service_location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-location-routing.module */ 32115);
/* harmony import */ var _service_location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-location.page */ 1787);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let ServiceLocationPageModule = class ServiceLocationPageModule {
};
ServiceLocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _service_location_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceLocationPageRoutingModule
        ],
        declarations: [_service_location_page__WEBPACK_IMPORTED_MODULE_1__.ServiceLocationPage]
    })
], ServiceLocationPageModule);



/***/ }),

/***/ 1787:
/*!*****************************************************************!*\
  !*** ./src/app/pages/service-location/service-location.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceLocationPage": () => (/* binding */ ServiceLocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_service_location_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./service-location.page.html */ 86318);
/* harmony import */ var _service_location_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-location.page.scss */ 64109);
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



let ServiceLocationPage = class ServiceLocationPage {
    constructor(router, NavCtrl) {
        this.router = router;
        this.NavCtrl = NavCtrl;
    }
    ngOnInit() {
    }
    goToBack() {
        this.NavCtrl.back();
    }
    goToPayment() {
        this.router.navigate(['payment']);
    }
};
ServiceLocationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
ServiceLocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-service-location',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_service_location_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_service_location_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServiceLocationPage);



/***/ }),

/***/ 86318:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/service-location/service-location.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pick your Slot</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"calendar-clear-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main-content\">\n    <ion-radio-group value=\"biff\" mode=\"md\">\n      <ion-item class=\"ion-no-padding\" *ngFor=\"let item of [1,2,3]\" lines=\"none\">\n        <ion-radio class=\"ion-no-margin\" slot=\"start\" value=\"1\"></ion-radio>\n        <div>\n          <h6>Jon Snow</h6>\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo voluptatibus molestiae earum, ipsam corrupti saepe,</p>\n        </div>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer\">\n    <ion-button class=\"btn\" (click)=\"goToPayment()\" fill=\"outline\" expand=\"block\">\n      Add New Address\n      </ion-button>\n    <ion-button class=\"btn\" (click)=\"goToPayment()\" expand=\"block\">\n    Continue to Payment\n    </ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 64109:
/*!*******************************************************************!*\
  !*** ./src/app/pages/service-location/service-location.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .main-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\nion-content .main-content ion-item {\n  display: flex;\n  padding: 15px 0px;\n  align-items: flex-start;\n  border-bottom: 3px solid #f6f8ff;\n}\nion-content .main-content ion-item h6 {\n  margin: 0px;\n  font-weight: bold;\n  padding-left: 10px;\n  margin-bottom: 10px;\n}\nion-content .main-content ion-item p {\n  margin: 3px;\n  padding-left: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n}\nion-footer {\n  padding: 15px 20px;\n}\nion-footer .footer .btn {\n  width: 100%;\n  margin-top: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBU0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFFTjtBQURNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdSO0FBRE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUdSO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNOIiwiZmlsZSI6InNlcnZpY2UtbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG5pb24tY29udGVudCAubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjZmOGZmO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCBpb24taXRlbSBoNiB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCBpb24taXRlbSBwIHtcbiAgbWFyZ2luOiAzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG5pb24tZm9vdGVyIC5mb290ZXIgLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_service-location_service-location_module_ts.js.map