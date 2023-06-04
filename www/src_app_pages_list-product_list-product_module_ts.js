"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_list-product_list-product_module_ts"],{

/***/ 21853:
/*!*******************************************************************!*\
  !*** ./src/app/pages/list-product/list-product-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProductPageRoutingModule": () => (/* binding */ ListProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _list_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-product.page */ 53378);




const routes = [
    {
        path: '',
        component: _list_product_page__WEBPACK_IMPORTED_MODULE_0__.ListProductPage
    }
];
let ListProductPageRoutingModule = class ListProductPageRoutingModule {
};
ListProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListProductPageRoutingModule);



/***/ }),

/***/ 14352:
/*!***********************************************************!*\
  !*** ./src/app/pages/list-product/list-product.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProductPageModule": () => (/* binding */ ListProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _list_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-product-routing.module */ 21853);
/* harmony import */ var _list_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-product.page */ 53378);







let ListProductPageModule = class ListProductPageModule {
};
ListProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListProductPageRoutingModule
        ],
        declarations: [_list_product_page__WEBPACK_IMPORTED_MODULE_1__.ListProductPage]
    })
], ListProductPageModule);



/***/ }),

/***/ 53378:
/*!*********************************************************!*\
  !*** ./src/app/pages/list-product/list-product.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProductPage": () => (/* binding */ ListProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list-product.page.html */ 198);
/* harmony import */ var _list_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-product.page.scss */ 38982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let ListProductPage = class ListProductPage {
    constructor(requestServiceService, alertController, router, loadingController) {
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.getListOfHeader();
    }
    getListOfHeader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading(); // show loader
            this.requestServiceService.getHttpCall("listOfProduct").subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    console.log(data);
                    this.listOfHeaders = data.data;
                    this.loadingController.dismiss();
                }
                else {
                    console.log(data);
                    this.message = data.message;
                    this.loadingController.dismiss();
                }
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading List Of Product...',
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
    rowClicked(itemId) {
        //alert(itemId);
        const navigationExtras = {
            queryParams: {
                id: itemId
            }
        };
        this.router.navigate(['edit-product'], navigationExtras);
    }
};
ListProductPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
ListProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list-product',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_product_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListProductPage);



/***/ }),

/***/ 198:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/list-product/list-product.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>List Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"main-content\">\n\n    <div *ngFor=\"let item of listOfHeaders\" class=\"bookings\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\" (click)=\"rowClicked(item.id)\">\n        <ion-col size=\"4\">\n          <img src=\"data:image/png;base64,{{item.frontEndBase64 }}\"/>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"salon-name\">Title: {{ item.title }}</ion-label><br>\n          <ion-label class=\"salon-name\">Amount: &#8377; {{ item.rate }}</ion-label>\n        </ion-col>\n      </ion-row>\n   \n<!--\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-label class=\"salon-name\">Remind me 1h in advance</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-toggle></ion-toggle>\n        </ion-col>\n      </ion-row>\n    -->\n    </div>\n  \n\n    \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 38982:
/*!***********************************************************!*\
  !*** ./src/app/pages/list-product/list-product.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXByb2R1Y3QucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_list-product_list-product_module_ts.js.map