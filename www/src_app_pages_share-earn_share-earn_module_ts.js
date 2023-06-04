"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_share-earn_share-earn_module_ts"],{

/***/ 3219:
/*!***************************************************************!*\
  !*** ./src/app/pages/share-earn/share-earn-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareEarnPageRoutingModule": () => (/* binding */ ShareEarnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _share_earn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-earn.page */ 40045);




const routes = [
    {
        path: '',
        component: _share_earn_page__WEBPACK_IMPORTED_MODULE_0__.ShareEarnPage
    }
];
let ShareEarnPageRoutingModule = class ShareEarnPageRoutingModule {
};
ShareEarnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShareEarnPageRoutingModule);



/***/ }),

/***/ 89394:
/*!*******************************************************!*\
  !*** ./src/app/pages/share-earn/share-earn.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareEarnPageModule": () => (/* binding */ ShareEarnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _share_earn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-earn-routing.module */ 3219);
/* harmony import */ var _share_earn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share-earn.page */ 40045);







let ShareEarnPageModule = class ShareEarnPageModule {
};
ShareEarnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _share_earn_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShareEarnPageRoutingModule
        ],
        declarations: [_share_earn_page__WEBPACK_IMPORTED_MODULE_1__.ShareEarnPage]
    })
], ShareEarnPageModule);



/***/ }),

/***/ 40045:
/*!*****************************************************!*\
  !*** ./src/app/pages/share-earn/share-earn.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareEarnPage": () => (/* binding */ ShareEarnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_share_earn_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./share-earn.page.html */ 51371);
/* harmony import */ var _share_earn_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share-earn.page.scss */ 22048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3242);





let ShareEarnPage = class ShareEarnPage {
    constructor(inAppBrowser) {
        this.inAppBrowser = inAppBrowser;
    }
    ngOnInit() {
    }
    share() {
        const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        const referralLink = `https://heykudy/signup?referralCode=${referralCode}`;
        const message = `Sign up using my referral link: ${referralLink}`;
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        this.inAppBrowser.create(url, '_system');
    }
};
ShareEarnPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
ShareEarnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-share-earn',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_share_earn_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_share_earn_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShareEarnPage);



/***/ }),

/***/ 51371:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/share-earn/share-earn.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Share & Earn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img alt=\"Silhouette of mountains\" src=\"assets/referEarn.png\" style=\"width: 100%;\" />  \n    <ion-card-content>\n      <button class=\"rounded-button\" disabled>1 Refferal =  &#8377;200 </button>\n    </ion-card-content>\n  </ion-card>\n  <button (click)=\"share()\" class=\"fixed-bottom\">Share and Earn</button>\n\n</ion-content>\n");

/***/ }),

/***/ 22048:
/*!*******************************************************!*\
  !*** ./src/app/pages/share-earn/share-earn.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".rounded-button {\n  border: none;\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 10px 10px 10px 10px;\n  width: 100%;\n}\n\n.fixed-bottom {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #007bff !important;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 10px 10px 10px 10px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLWVhcm4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJzaGFyZS1lYXJuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZGVkLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5maXhlZC1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_share-earn_share-earn_module_ts.js.map