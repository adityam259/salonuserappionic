"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_stylist-info_stylist-info_module_ts"],{

/***/ 97212:
/*!*******************************************************************!*\
  !*** ./src/app/pages/stylist-info/stylist-info-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylistInfoPageRoutingModule": () => (/* binding */ StylistInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _stylist_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylist-info.page */ 55648);

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
        component: _stylist_info_page__WEBPACK_IMPORTED_MODULE_0__.StylistInfoPage
    }
];
let StylistInfoPageRoutingModule = class StylistInfoPageRoutingModule {
};
StylistInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StylistInfoPageRoutingModule);



/***/ }),

/***/ 21889:
/*!***********************************************************!*\
  !*** ./src/app/pages/stylist-info/stylist-info.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylistInfoPageModule": () => (/* binding */ StylistInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _stylist_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylist-info-routing.module */ 97212);
/* harmony import */ var _stylist_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylist-info.page */ 55648);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let StylistInfoPageModule = class StylistInfoPageModule {
};
StylistInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stylist_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.StylistInfoPageRoutingModule
        ],
        declarations: [_stylist_info_page__WEBPACK_IMPORTED_MODULE_1__.StylistInfoPage]
    })
], StylistInfoPageModule);



/***/ }),

/***/ 55648:
/*!*********************************************************!*\
  !*** ./src/app/pages/stylist-info/stylist-info.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylistInfoPage": () => (/* binding */ StylistInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stylist_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./stylist-info.page.html */ 80471);
/* harmony import */ var _stylist_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylist-info.page.scss */ 79945);
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



let StylistInfoPage = class StylistInfoPage {
    constructor(router, NavCtrl) {
        this.router = router;
        this.NavCtrl = NavCtrl;
    }
    ngOnInit() {
    }
    goToBack() {
        this.NavCtrl.back();
    }
    goToCheckout() {
        this.router.navigate(['checklist']);
    }
};
StylistInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
StylistInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-stylist-info',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stylist_info_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stylist_info_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StylistInfoPage);



/***/ }),

/***/ 80471:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/stylist-info/stylist-info.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Stylist Info</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"calendar-clear-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"main-content\">\n    <div class=\"banner\">\n      <div class=\"img\" [style.backgroundImage]=\"'url(assets/beard.jpg)'\">\n      </div>\n    </div>\n    <div class=\"info\">\n      <div class=\"item\">\n        <ion-label class=\"name\">John Doe</ion-label>\n        <ion-icon class=\"heart\" name=\"heart\"></ion-icon>\n      </div>\n      <div class=\"item\">\n        <ion-icon class=\"star\" name=\"star\"></ion-icon>\n        <ion-label class=\"reting\">12 reviews</ion-label>\n      </div>\n      <div class=\"detail\">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis id minima incidunt atque cum suscipit\n        molestias quas ipsa sit.\n      </div>\n    </div>\n\n    <div class=\"segments\">\n      <div class=\"item\">\n        <ion-segment value=\"1\">\n          <ion-segment-button value=\"1\">\n            <ion-label>Photos</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n            <ion-label>Reviews</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </div>\n    <div class=\"photos\">\n      <ion-row>\n        <ion-col size=\"3\" *ngFor=\"let item of [1,2,3,4,5,6,7]\">\n          <img src=\"assets/profile.jpg\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <div class=\"view\" [style.backgroundImage]=\"'url(assets/profile.jpg)'\">\n            view all\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class=\"footer\">\n    <ion-button class=\"btn\" (click)=\"goToCheckout()\" expand=\"block\">\n      Continue to Checkout\n    </ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 79945:
/*!***********************************************************!*\
  !*** ./src/app/pages/stylist-info/stylist-info.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .main-content .banner {\n  padding: 20px 20px;\n}\nion-content .main-content .banner .img {\n  width: 100%;\n  height: 20vh;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 20px;\n}\nion-content .main-content .info {\n  padding: 5px 20px;\n}\nion-content .main-content .info .item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n}\nion-content .main-content .info .item .name {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n}\nion-content .main-content .info .item .heart {\n  font-size: 18px;\n  font-weight: 500;\n  color: #ee3f4c;\n}\nion-content .main-content .info .item .star {\n  font-size: 14px;\n  color: #fbbc05;\n}\nion-content .main-content .info .item .reting {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-medium);\n  padding-right: 3px;\n}\nion-content .main-content .info .detail {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-medium);\n}\nion-content .main-content .segments {\n  margin: 10px 0px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: row;\n}\nion-content .main-content .segments .item {\n  background-color: var(--ion-color-light);\n  border-radius: 30px;\n}\nion-content .main-content .segments .item ion-segment {\n  background: transparent;\n}\nion-content .main-content .segments .item ion-segment ion-segment-button {\n  padding: 5px;\n  --border-radius: 30px;\n  --indicator-color: var(--ion-color-primary) !important;\n  --indicator-box-shadow: transparent !important;\n  --color-checked: white;\n  --background: var(--ion-color-light);\n  margin: 5px;\n}\nion-content .main-content .photos {\n  padding: 10px 20px;\n}\nion-content .main-content .photos img {\n  width: 100%;\n  height: 80px;\n  border-radius: 15px;\n}\nion-content .main-content .photos .view {\n  color: black;\n  opacity: 0.5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nion-footer {\n  padding: 15px 20px;\n}\nion-footer .footer .btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxpc3QtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFVSTtFQUNFLGtCQUFBO0FBQU47QUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFDUjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUNNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNSO0FBQVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUVWO0FBQVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRVY7QUFBUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRVY7QUFBUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFFVjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDUjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUNFLHVCQUFBO0FBQVY7QUFDVTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsOENBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQUNaO0FBSUk7RUFDRSxrQkFBQTtBQUZOO0FBSU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRlI7QUFJTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUZSO0FBT0E7RUFDRSxrQkFBQTtBQUpGO0FBTUk7RUFDRSxXQUFBO0FBSk4iLCJmaWxlIjoic3R5bGlzdC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuYmFubmVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuYmFubmVyIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmluZm8ge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmluZm8gLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuaW5mbyAuaXRlbSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmluZm8gLml0ZW0gLmhlYXJ0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2VlM2Y0Yztcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmluZm8gLml0ZW0gLnN0YXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmJiYzA1O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuaW5mbyAuaXRlbSAucmV0aW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmluZm8gLmRldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VnbWVudHMge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zZWdtZW50cyAuaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zZWdtZW50cyAuaXRlbSBpb24tc2VnbWVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VnbWVudHMgLml0ZW0gaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBtYXJnaW46IDVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnBob3RvcyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnBob3RvcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAucGhvdG9zIC52aWV3IHtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuaW9uLWZvb3RlciAuZm9vdGVyIC5idG4ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stylist-info_stylist-info_module_ts.js.map