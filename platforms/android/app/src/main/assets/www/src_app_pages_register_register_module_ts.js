"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 70973:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 29298);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 69751:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 70973);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 29298);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 29298:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 12004);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 93866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);







let RegisterPage = class RegisterPage {
    constructor(router, requestServiceService, alertController) {
        this.router = router;
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
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
    }
    ngOnInit() {
    }
    redirectToLogin() {
        this.router.navigate(['/login-phone']);
    }
    verifyMobile() {
        console.log(this.formData);
        this.requestServiceService.postHttpCall("saveUserLogin", this.formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.presentAlert(data.status, data.message);
                //this.goToOtherPage('login-phone');
                //this.router.navigate(['/login-phone']);
                const commands = ['login-phone'];
                this.router.navigate(commands);
            }
            else {
                console.log(data);
                this.message = data.message;
                this.presentAlert(data.status, data.message);
                //this.goToOtherPage('register');
                //this.router.navigate(['/register']);
                const commands = ['register'];
                this.router.navigate(commands);
            }
        });
    }
    presentAlert(status, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: status,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    goToOtherPage(url) {
        this.router.navigate(url);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 12004:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/register/register.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login-phone\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n <ion-content>\n\n \n  <div class=\"main-content\">\n\n\n    <div class=\"card\">\n      <div class=\"text\">\n        <ion-label></ion-label>\n      </div>\n      <form (ngSubmit)=\"verifyMobile()\" #myForm=\"ngForm\">\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">Mobile Number</ion-label>\n        <ion-input type=\"number\" class=\"ion-no-padding\" placeholder=\"Mobile Number\"  [(ngModel)]=\"formData.phoneNo\" \n        name=\"phoneNo\"  maxlength=\"10\"></ion-input>\n      </ion-item>\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">User Name</ion-label>\n        <ion-input type=\"text\" class=\"ion-no-padding\" placeholder=\"User Name\"  \n        [(ngModel)]=\"formData.userName\" \n        name=\"userName\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">First Name</ion-label>\n        <ion-input type=\"text\" class=\"ion-no-padding\" placeholder=\"First Name\"  \n        [(ngModel)]=\"formData.firstName\" \n        name=\"firstName\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">Last Name</ion-label>\n        <ion-input type=\"text\" class=\"ion-no-padding\" placeholder=\"Last Name\"  \n        [(ngModel)]=\"formData.lastName\" \n        name=\"lastName\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">Email Id</ion-label>\n        <ion-input type=\"text\" class=\"ion-no-padding\" placeholder=\"Email Id\"  \n        [(ngModel)]=\"formData.emailId\" \n        name=\"emailId\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"text\" class=\"ion-no-padding\" placeholder=\"Password\"  \n        [(ngModel)]=\"formData.password\" \n        name=\"password\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">Address</ion-label>\n        <ion-input type=\"text\" class=\"ion-no-padding\" placeholder=\"Address\"  \n        [(ngModel)]=\"formData.address\" \n        name=\"address\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"textbox\" lines=\"full\">\n        <ion-label position=\"floating\">Gender</ion-label>\n        <ion-select [(ngModel)]=\"formData.gender\" name=\"gender\" placeholder=\"Select your gender\" required>\n          <ion-select-option [value]=\"male\">Male</ion-select-option>\n          <ion-select-option [value]=\"female\">Female</ion-select-option>\n        </ion-select>        \n      </ion-item>\n      <span class=\"center\"> </span>\n      <div class=\"form-group\" style=\"width: 100%;\">\n        <div class=\"container\" style=\"width: 100%;\">\n          <button class=\"btn btn-primary\" type=\"submit\" style=\"width: 100%;\">Register</button>\n        </div>\n    </div>\n    </form>\n    <div class=\"text\">\n      <ion-label>Existing User! <a (click)=\"redirectToLogin()\">Click here to login.</a></ion-label>\n    </div>\n    </div>\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ 93866:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nimg {\n  width: 100%;\n  height: 30vh;\n}\n.main-content .card {\n  background-color: white;\n  z-index: 9999;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  border-radius: 30px;\n  padding: 0px 10px;\n}\n.main-content .card .title {\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n  margin-top: 3rem;\n}\n.main-content .card .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 20px;\n}\n.main-content .card .logo .logo-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.main-content .card .logo .logo-info {\n  font-size: 35px;\n  font-weight: bold;\n}\n.main-content .card .text {\n  font-size: 15px;\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  color: gray;\n  padding: 10px 20px 0px 20px;\n}\n.main-content .card .textbox {\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 14px;\n}\n.main-content .card .textbox img {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n.main-content .card .btn {\n  margin: 15px 14px;\n}\n.main-content .card .login-heading {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 15px 0px;\n}\n.main-content .card .btn-row ion-row .btn-login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--ion-color-light);\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0px;\n  padding: 10px 0px;\n}\n.main-content .card .btn-row ion-row .btn-login ion-label {\n  margin: 2px 10px;\n}\n.main-content .card .btn-row ion-row .btn-login img {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n.main-content .card .footer {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px 0px;\n  color: var(--ion-color-medium);\n}\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* set the container height to fill the screen */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUVJO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUFNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRVY7QUFBUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVWO0FBRU07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBQVI7QUFHTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURWO0FBSU07RUFDRSxpQkFBQTtBQUZSO0FBS007RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFIVjtBQVFVO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5aO0FBT1k7RUFDRSxnQkFBQTtBQUxkO0FBT1k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTGQ7QUFVTTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQVJWO0FBYUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBVkoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwdmg7XG59XG5cbi5tYWluLWNvbnRlbnQgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLmxvZ28gLmxvZ28tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1jb250ZW50IC5jYXJkIC5sb2dvIC5sb2dvLWluZm8ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW4tY29udGVudCAuY2FyZCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAwcHggMjBweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLnRleHRib3gge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweCAxNHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAudGV4dGJveCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ubWFpbi1jb250ZW50IC5jYXJkIC5idG4ge1xuICBtYXJnaW46IDE1cHggMTRweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLmxvZ2luLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNhcmQgLmJ0bi1yb3cgaW9uLXJvdyAuYnRuLWxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG4ubWFpbi1jb250ZW50IC5jYXJkIC5idG4tcm93IGlvbi1yb3cgLmJ0bi1sb2dpbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDJweCAxMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAuYnRuLXJvdyBpb24tcm93IC5idG4tbG9naW4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLm1haW4tY29udGVudCAuY2FyZCAuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBzZXQgdGhlIGNvbnRhaW5lciBoZWlnaHQgdG8gZmlsbCB0aGUgc2NyZWVuICovXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map