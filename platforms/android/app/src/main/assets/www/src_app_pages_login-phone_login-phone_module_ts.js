"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login-phone_login-phone_module_ts"],{

/***/ 90277:
/*!*****************************************************************!*\
  !*** ./src/app/pages/login-phone/login-phone-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPhonePageRoutingModule": () => (/* binding */ LoginPhonePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_phone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-phone.page */ 98025);

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
        component: _login_phone_page__WEBPACK_IMPORTED_MODULE_0__.LoginPhonePage
    }
];
let LoginPhonePageRoutingModule = class LoginPhonePageRoutingModule {
};
LoginPhonePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPhonePageRoutingModule);



/***/ }),

/***/ 12220:
/*!*********************************************************!*\
  !*** ./src/app/pages/login-phone/login-phone.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPhonePageModule": () => (/* binding */ LoginPhonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_phone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-phone-routing.module */ 90277);
/* harmony import */ var _login_phone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-phone.page */ 98025);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let LoginPhonePageModule = class LoginPhonePageModule {
};
LoginPhonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_phone_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPhonePageRoutingModule
        ],
        declarations: [_login_phone_page__WEBPACK_IMPORTED_MODULE_1__.LoginPhonePage]
    })
], LoginPhonePageModule);



/***/ }),

/***/ 98025:
/*!*******************************************************!*\
  !*** ./src/app/pages/login-phone/login-phone.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPhonePage": () => (/* binding */ LoginPhonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_phone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-phone.page.html */ 44095);
/* harmony import */ var _login_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-phone.page.scss */ 13578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let LoginPhonePage = class LoginPhonePage {
    constructor(router, requestServiceService, storageService, storage, navCtrl) {
        this.router = router;
        this.requestServiceService = requestServiceService;
        this.storageService = storageService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.formData = {
            phoneNo: ''
        };
    }
    ngOnInit() {
        //this.logout();
    }
    verifyMobile() {
        console.log(this.formData);
        this.requestServiceService.postHttpCall("validateLoginUser", this.formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                let mobileNoPin = data.data.phoneNo + "|" + data.data.verificationCode;
                this.storageService.set('mobileNo', mobileNoPin).then(result => {
                    //this.storage.set('hasLoggedIn', true);
                    this.storageService.set('hasLoggedIn', true).then(result => {
                        this.router.navigate(['verification']);
                    });
                }).catch(e => {
                    console.log("error: " + e);
                });
            }
            else {
                console.log(data);
                this.message = data.message;
            }
        });
    }
    redirectToRegister() {
        this.router.navigate(['/register']);
    }
    logout() {
        this.storageService.clear();
        localStorage.clear();
    }
};
LoginPhonePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
LoginPhonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login-phone',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_phone_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPhonePage);



/***/ }),

/***/ 44095:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login-phone/login-phone.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-content>\n\n  <img src=\"assets/banner.jpg\">\n  <div class=\"main-content\">\n\n\n    <div class=\"card\">\n      <div class=\"logo\">\n        <ion-label class=\"logo-name\">HEY</ion-label>\n        <ion-label class=\"logo-info\">KUDY</ion-label>\n        <ion-label class=\"logo-info\">Login</ion-label>\n      </div>\n      <div class=\"title\">\n        <ion-label>Sign in with Mobile </ion-label>\n      </div>\n      <div class=\"text\">\n        <ion-label>We will send one time password for into login</ion-label>\n      </div>\n      <form (ngSubmit)=\"verifyMobile()\" #myForm=\"ngForm\">\n      <ion-item class=\"textbox\" lines=\"none\">\n        <img class=\"img\" src=\"assets/india.png\">\n        <ion-label>|</ion-label>\n        <ion-input type=\"number\" class=\"ion-no-padding\"  [(ngModel)]=\"formData.phoneNo\" \n        name=\"phoneNo\"  maxlength=\"10\"></ion-input>\n      </ion-item>\n      <span class=\"center\"> {{message}}</span>\n      <div class=\"form-group\">\n        <div class=\"container\">\n          <button class=\"btn btn-primary\" type=\"submit\">Get OTP</button>\n        </div>\n    </div>\n    </form>\n    <div class=\"text\">\n      <ion-label>New User! <a (click)=\"redirectToRegister()\">Click here to register.</a></ion-label>\n    </div>\n    </div>\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ 13578:
/*!*********************************************************!*\
  !*** ./src/app/pages/login-phone/login-phone.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nimg {\n  width: 100%;\n  height: 30vh;\n}\n.main-content .card {\n  background-color: white;\n  z-index: 9999;\n  position: absolute;\n  top: 200px;\n  width: 100%;\n  border-radius: 30px;\n  padding: 0px 10px;\n}\n.main-content .card .title {\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n  margin-top: 3rem;\n}\n.main-content .card .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 20px;\n}\n.main-content .card .logo .logo-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.main-content .card .logo .logo-info {\n  font-size: 35px;\n  font-weight: bold;\n}\n.main-content .card .text {\n  font-size: 15px;\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  color: gray;\n  padding: 10px 20px 0px 20px;\n}\n.main-content .card .textbox {\n  border: 2px solid var(--ion-color-light);\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 14px;\n}\n.main-content .card .textbox ion-input {\n  margin: 2px 0px;\n}\n.main-content .card .textbox ion-label {\n  font-size: 22px;\n  color: var(--ion-color-medium);\n  padding: 0px 10px;\n}\n.main-content .card .textbox img {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n.main-content .card .btn {\n  margin: 15px 14px;\n}\n.main-content .card .login-heading {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 15px 0px;\n}\n.main-content .card .btn-row ion-row .btn-login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--ion-color-light);\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0px;\n  padding: 10px 0px;\n}\n.main-content .card .btn-row ion-row .btn-login ion-label {\n  margin: 2px 10px;\n}\n.main-content .card .btn-row ion-row .btn-login img {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n.main-content .card .footer {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px 0px;\n  color: var(--ion-color-medium);\n}\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* set the container height to fill the screen */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQUFNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRVI7QUFBTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBQU47QUFHSTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUROO0FBRU07RUFDRSxlQUFBO0FBQVI7QUFFTTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFFTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBUjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBRlI7QUFPUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMVjtBQU1VO0VBQ0UsZ0JBQUE7QUFKWjtBQU1VO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpaO0FBU0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFQUjtBQVdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQVJGIiwiZmlsZSI6ImxvZ2luLXBob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoO1xufVxuXG4ubWFpbi1jb250ZW50IC5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuLm1haW4tY29udGVudCAuY2FyZCAubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAubG9nbyAubG9nby1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLmxvZ28gLmxvZ28taW5mbyB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1jb250ZW50IC5jYXJkIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZzogMTBweCAyMHB4IDBweCAyMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAudGV4dGJveCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxMHB4IDE0cHg7XG59XG4ubWFpbi1jb250ZW50IC5jYXJkIC50ZXh0Ym94IGlvbi1pbnB1dCB7XG4gIG1hcmdpbjogMnB4IDBweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLnRleHRib3ggaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAudGV4dGJveCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ubWFpbi1jb250ZW50IC5jYXJkIC5idG4ge1xuICBtYXJnaW46IDE1cHggMTRweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLmxvZ2luLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLmJ0bi1yb3cgaW9uLXJvdyAuYnRuLWxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG4ubWFpbi1jb250ZW50IC5jYXJkIC5idG4tcm93IGlvbi1yb3cgLmJ0bi1sb2dpbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDJweCAxMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAuYnRuLXJvdyBpb24tcm93IC5idG4tbG9naW4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBzZXQgdGhlIGNvbnRhaW5lciBoZWlnaHQgdG8gZmlsbCB0aGUgc2NyZWVuICovXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-phone_login-phone_module_ts.js.map