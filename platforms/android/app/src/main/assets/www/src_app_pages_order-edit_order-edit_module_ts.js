"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_order-edit_order-edit_module_ts"],{

/***/ 64189:
/*!***************************************************************!*\
  !*** ./src/app/pages/order-edit/order-edit-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderEditPageRoutingModule": () => (/* binding */ OrderEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _order_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-edit.page */ 35020);




const routes = [
    {
        path: '',
        component: _order_edit_page__WEBPACK_IMPORTED_MODULE_0__.OrderEditPage
    }
];
let OrderEditPageRoutingModule = class OrderEditPageRoutingModule {
};
OrderEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderEditPageRoutingModule);



/***/ }),

/***/ 77146:
/*!*******************************************************!*\
  !*** ./src/app/pages/order-edit/order-edit.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderEditPageModule": () => (/* binding */ OrderEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _order_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-edit-routing.module */ 64189);
/* harmony import */ var _order_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-edit.page */ 35020);







let OrderEditPageModule = class OrderEditPageModule {
};
OrderEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderEditPageRoutingModule
        ],
        declarations: [_order_edit_page__WEBPACK_IMPORTED_MODULE_1__.OrderEditPage]
    })
], OrderEditPageModule);



/***/ }),

/***/ 35020:
/*!*****************************************************!*\
  !*** ./src/app/pages/order-edit/order-edit.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderEditPage": () => (/* binding */ OrderEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./order-edit.page.html */ 97979);
/* harmony import */ var _order_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-edit.page.scss */ 52559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);









let OrderEditPage = class OrderEditPage {
    constructor(route, loadingController, requestServiceService, alertController, navCtrl) {
        this.route = route;
        this.loadingController = loadingController;
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.formData = {
            id: '',
            status: '',
            userId: '',
            orderTrackingId: ''
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.itemId = params['id'];
        });
        //alert(this.itemId);
        this.getHeaderImageDetails(this.itemId);
        this.getUserEmployeeDetails();
    }
    getHeaderImageDetails(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('id', id);
            this.presentLoading(); // show loader
            this.requestServiceService.postHttpCall("getOrderById", formData).subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    console.log(data);
                    //this.listOfHeaders = data.data;
                    this.formData.status = data.data.status;
                    this.formData.userId = data.data.userId;
                    this.formData.orderTrackingId = data.data.orderTrackingId;
                    this.formData.id = data.data.id;
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
                message: 'Loading Order Data...',
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
    getUserEmployeeDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //this.presentLoading(); // show loader
            this.requestServiceService.getHttpCall("getLoginDataEmployee").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    console.log(data);
                    this.listOfUser = data.data;
                }
                else {
                    console.log(data);
                    this.message = data.message;
                }
                //this.loadingController.dismiss();
            });
        });
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('status', this.formData.status);
        formData.append('userId', this.formData.userId);
        formData.append('id', this.formData.id);
        this.requestServiceService.postHttpCall("assignUserWithStatusOrder", formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('tabs/tab1');
            }
            else {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('order-status');
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
        this.navCtrl.navigateForward(url);
    }
};
OrderEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
OrderEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-order-edit',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_edit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderEditPage);



/***/ }),

/***/ 97979:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/order-edit/order-edit.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title></ion-card-title>\n      <ion-card-subtitle></ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form (ngSubmit)=\"onSubmit()\">\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Order Tracking Id</ion-label>\n          <ion-input type=\"text\" name=\"orderTrackingId\" [(ngModel)]=\"formData.orderTrackingId\" disabled></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Select Employee</ion-label>\n          <ion-select name=\"userId\" [(ngModel)]=\"userId\">\n            <ion-select-option *ngFor=\"let option of listOfUser\" [value]=\"option.id\">\n              {{option.userName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Status</ion-label>\n          <ion-select [(ngModel)]=\"formData.status\" name=\"status\" required>\n            <ion-select-option [value]=\"pending\">pending</ion-select-option>\n            <ion-select-option [value]=\"completed\">completed</ion-select-option>\n          </ion-select>        \n        </ion-item>\n \n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ 52559:
/*!*******************************************************!*\
  !*** ./src/app/pages/order-edit/order-edit.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1lZGl0LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_order-edit_order-edit_module_ts.js.map