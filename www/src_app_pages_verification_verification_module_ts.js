"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_verification_verification_module_ts"],{

/***/ 93301:
/*!*******************************************************************!*\
  !*** ./src/app/pages/verification/verification-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageRoutingModule": () => (/* binding */ VerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page */ 28019);

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
        component: _verification_page__WEBPACK_IMPORTED_MODULE_0__.VerificationPage
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ 44725:
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageModule": () => (/* binding */ VerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-routing.module */ 93301);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page */ 28019);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificationPageRoutingModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_1__.VerificationPage]
    })
], VerificationPageModule);



/***/ }),

/***/ 28019:
/*!*********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPage": () => (/* binding */ VerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verification.page.html */ 2456);
/* harmony import */ var _verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page.scss */ 94994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let VerificationPage = class VerificationPage {
    constructor(router, navCtrl, storageService, requestServiceService, alertController) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.formData = {
            verificationCode: ''
        };
    }
    ngOnInit() {
        this.getSessionStorage();
    }
    goToBack() {
        this.navCtrl.back();
    }
    goToHome() {
        if (this.formData.verificationCode.toString() === this.pin.toString()) {
            this.navCtrl.navigateRoot(['tabs']);
        }
        else {
            this.message = "Invalid OTP";
        }
    }
    getSessionStorage() {
        this.storageService.get('mobileNo').then(result => {
            if (result != null) {
                console.log('Storage mobileNo & Pin: ' + result);
                let separatedString = result.split('|');
                let maskedNumber = separatedString[0].replace(/\d(?=\d{4})/g, "*");
                this.mobileNo = maskedNumber;
                this.pin = separatedString[1];
                console.log('Storage Pin: ' + this.pin);
            }
        }).catch(e => {
            console.log('error: ', e);
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'OTP',
                message: 'As sms service is not there we are showing otp temparory here Pin = ' + this.pin,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
VerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
VerificationPage.propDecorators = {
    input1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input1', { static: false },] }],
    input2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input2', { static: false },] }],
    input3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input3', { static: false },] }],
    input4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input4', { static: false },] }]
};
VerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-verification',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerificationPage);



/***/ }),

/***/ 2456:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/verification/verification.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"main-content\">\n    <!-- <div class=\"icon\">\n      <ion-icon name=\"arrow-back-outline\" (click)=\"goToBack()\"></ion-icon>\n    </div> -->\n\n    <div class=\"logo\">\n      <ion-label class=\"logo-name\">HEY</ion-label>\n      <ion-label class=\"logo-info\">KUDY</ion-label>\n    </div>\n    <div class=\"title\">\n      <ion-label>OTP Verification </ion-label>\n    </div>\n\n    <div class=\"text\">\n      <ion-label>Enter the OTP sent to <span class=\"spc\">{{mobileNo}}</span></ion-label>\n    </div>\n    <form  (ngSubmit)=\"goToHome()\" #myForm=\"ngForm\">\n    <div class=\"verify\">\n      <ion-input type=\"number\" maxLength=\"4\" size=\"4\" min=\"0\" max=\"9\" \n      [(ngModel)]=\"formData.verificationCode\" \n      name=\"verificationCode\" ></ion-input>\n    </div>\n    <span class=\"center\"> {{message}} </span>\n    <div class=\"form-group\">\n      <div class=\"container\">\n        <button class=\"btn btn-primary\" type=\"submit\">Verify to Proceed</button>\n      </div>\n  </div>\n   \n  </form>\n    <div class=\"text\">\n      <ion-label>Dont Recieve the OTP? <span class=\"spc\">Resend</span></ion-label>\n    </div>\n   \n    <img src=\"../../../assets/info.png\" aria-label=\"Information\" (click)=\"presentAlert()\" id=\"info-image\">\n\n  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ 94994:
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n.main-content {\n  padding: 20px;\n}\n.main-content .icon ion-icon {\n  background-color: white;\n  display: flex;\n  font-size: 22px;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px var(--box-shadow-color);\n  --box-shadow-color: lightgray;\n}\n.main-content .title {\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n  margin-top: 3rem;\n}\n.main-content .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 3rem;\n  padding-bottom: 3rem;\n}\n.main-content .logo .logo-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.main-content .logo .logo-info {\n  font-size: 35px;\n  font-weight: bold;\n}\n.main-content .text {\n  font-size: 15px;\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  color: gray;\n  padding: 10px 20px 0px 20px;\n}\n.main-content .verify {\n  display: flex;\n  justify-content: center;\n  padding: 10px 50px;\n}\n.main-content .spc {\n  color: var(--ion-color-primary);\n}\n.main-content ion-input {\n  margin: 10px 10px;\n  text-align: center;\n  font-size: 24px;\n  border: solid 2px lightgray;\n  border-radius: 10px;\n  width: 10%;\n}\n.main-content .btn {\n  margin: 15px 14px;\n}\n.main-content .login-heading {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 15px 0px;\n  margin-top: 4rem;\n}\n.main-content .btn-row ion-row .btn-login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--ion-color-light);\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0px;\n  padding: 10px 0px;\n}\n.main-content .btn-row ion-row .btn-login ion-label {\n  margin: 2px 10px;\n}\n.main-content .btn-row ion-row .btn-login img {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n.main-content .footer {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px 0px;\n  color: var(--ion-color-medium);\n}\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#info-image {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: 0 auto;\n}\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* set the container height to fill the screen */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFRQTtFQUNFLGFBQUE7QUFFRjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7QUFDTjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQU47QUFJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtFO0VBQ0UsK0JBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUpKO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBT0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBVU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUlI7QUFTUTtFQUNFLGdCQUFBO0FBUFY7QUFTUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQVjtBQVlFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBVko7QUFjQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFaRjtBQWNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQVhGIiwiZmlsZSI6InZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW4tY29udGVudCAuaWNvbiBpb24taWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gIC0tYm94LXNoYWRvdy1jb2xvcjogbGlnaHRncmF5O1xufVxuLm1haW4tY29udGVudCAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuLm1haW4tY29udGVudCAubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbi5tYWluLWNvbnRlbnQgLmxvZ28gLmxvZ28tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1jb250ZW50IC5sb2dvIC5sb2dvLWluZm8ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW4tY29udGVudCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAwcHggMjBweDtcbn1cbi5tYWluLWNvbnRlbnQgLnZlcmlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG59XG4ubWFpbi1jb250ZW50IC5zcGMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW4tY29udGVudCBpb24taW5wdXQge1xuICBtYXJnaW46IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJvcmRlcjogc29saWQgMnB4IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwJTtcbn1cbi5tYWluLWNvbnRlbnQgLmJ0biB7XG4gIG1hcmdpbjogMTVweCAxNHB4O1xufVxuLm1haW4tY29udGVudCAubG9naW4taGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuLm1haW4tY29udGVudCAuYnRuLXJvdyBpb24tcm93IC5idG4tbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbi5tYWluLWNvbnRlbnQgLmJ0bi1yb3cgaW9uLXJvdyAuYnRuLWxvZ2luIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMnB4IDEwcHg7XG59XG4ubWFpbi1jb250ZW50IC5idG4tcm93IGlvbi1yb3cgLmJ0bi1sb2dpbiBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ubWFpbi1jb250ZW50IC5mb290ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNpbmZvLWltYWdlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIHNldCB0aGUgY29udGFpbmVyIGhlaWdodCB0byBmaWxsIHRoZSBzY3JlZW4gKi9cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verification_verification_module_ts.js.map