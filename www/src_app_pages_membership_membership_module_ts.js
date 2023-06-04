"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_membership_membership_module_ts"],{

/***/ 28690:
/*!***************************************************************!*\
  !*** ./src/app/pages/membership/membership-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipPageRoutingModule": () => (/* binding */ MembershipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _membership_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./membership.page */ 56781);




const routes = [
    {
        path: '',
        component: _membership_page__WEBPACK_IMPORTED_MODULE_0__.MembershipPage
    }
];
let MembershipPageRoutingModule = class MembershipPageRoutingModule {
};
MembershipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MembershipPageRoutingModule);



/***/ }),

/***/ 72304:
/*!*******************************************************!*\
  !*** ./src/app/pages/membership/membership.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipPageModule": () => (/* binding */ MembershipPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./membership-routing.module */ 28690);
/* harmony import */ var _membership_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./membership.page */ 56781);







let MembershipPageModule = class MembershipPageModule {
};
MembershipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembershipPageRoutingModule
        ],
        declarations: [_membership_page__WEBPACK_IMPORTED_MODULE_1__.MembershipPage]
    })
], MembershipPageModule);



/***/ }),

/***/ 56781:
/*!*****************************************************!*\
  !*** ./src/app/pages/membership/membership.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipPage": () => (/* binding */ MembershipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_membership_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./membership.page.html */ 27129);
/* harmony import */ var _membership_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./membership.page.scss */ 79954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);







let MembershipPage = class MembershipPage {
    constructor(navCtrl, loadingController, requestServiceService) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.requestServiceService = requestServiceService;
    }
    ngOnInit() {
        this.getListOfHeader();
    }
    cardClicked(arg) {
        // Perform your desired action here
        // For example, navigate to another page
        console.log("arg = " + arg);
        const navigationExtras = {
            queryParams: {
                argument: arg
            }
        };
        this.navCtrl.navigateForward('/membership-details', navigationExtras);
    }
    getListOfHeader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading(); // show loader
            this.requestServiceService.getHttpCall("fetchAllMembershipData").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    console.log(data);
                    this.listOfMembership = data.data;
                }
                else {
                    console.log(data);
                    this.message = data.message;
                }
                this.loadingController.dismiss();
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading Membrship Data',
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
MembershipPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService }
];
MembershipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-membership',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_membership_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_membership_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MembershipPage);



/***/ }),

/***/ 27129:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/membership/membership.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>HeyKudi Membership</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n  <img src=\"/assets/membership.png\" id=\"topSavingImage\"/>\n  </div>\n  <ion-card style=\"background-color: #dd8989;\">\n    <ion-card-content style=\"text-align: center;\">\n      <ion-label style=\"color:white;font-size: 18px;text-align: center;align-content: center;\">Join at a special Price of just</ion-label>\n      <h5 style=\"color:white;font-size: 20px;\">&#8377; <s>599</s> &nbsp;<b style=\"color:white\">&#8377; 249 / For 12 Months</b></h5> \n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card (click)=\"cardClicked(item.id)\" *ngFor=\"let item of listOfMembership\">\n    <ion-card-header style=\"text-align: center;background-color: #842029;\">\n      <ion-card-title style=\"color:white\">{{item.heading}}</ion-card-title>\n      <ion-card-subtitle></ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item style=\"text-align: center;width: 100%;\">\n          <ion-label style=\"display: flex; justify-content: center; align-items: center; text-align: center; width: 100%;\" [innerHTML]=\"item.description\"></ion-label>\n        </ion-item>\n        \n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  \n\n</ion-content>\n");

/***/ }),

/***/ 79954:
/*!*******************************************************!*\
  !*** ./src/app/pages/membership/membership.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #e27171;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.container img {\n  max-width: 100%;\n  height: auto;\n  width: 40%;\n  margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlcnNoaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJtZW1iZXJzaGlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2UyNzE3MTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_membership_membership_module_ts.js.map