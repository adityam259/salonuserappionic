"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_header-images-list_header-images-list_module_ts"],{

/***/ 24235:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/header-images-list/header-images-list-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderImagesListPageRoutingModule": () => (/* binding */ HeaderImagesListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _header_images_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-images-list.page */ 86757);




const routes = [
    {
        path: '',
        component: _header_images_list_page__WEBPACK_IMPORTED_MODULE_0__.HeaderImagesListPage
    }
];
let HeaderImagesListPageRoutingModule = class HeaderImagesListPageRoutingModule {
};
HeaderImagesListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HeaderImagesListPageRoutingModule);



/***/ }),

/***/ 51133:
/*!***********************************************************************!*\
  !*** ./src/app/pages/header-images-list/header-images-list.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderImagesListPageModule": () => (/* binding */ HeaderImagesListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _header_images_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-images-list-routing.module */ 24235);
/* harmony import */ var _header_images_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-images-list.page */ 86757);







let HeaderImagesListPageModule = class HeaderImagesListPageModule {
};
HeaderImagesListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _header_images_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderImagesListPageRoutingModule
        ],
        declarations: [_header_images_list_page__WEBPACK_IMPORTED_MODULE_1__.HeaderImagesListPage]
    })
], HeaderImagesListPageModule);



/***/ }),

/***/ 86757:
/*!*********************************************************************!*\
  !*** ./src/app/pages/header-images-list/header-images-list.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderImagesListPage": () => (/* binding */ HeaderImagesListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_images_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-images-list.page.html */ 39405);
/* harmony import */ var _header_images_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-images-list.page.scss */ 84387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let HeaderImagesListPage = class HeaderImagesListPage {
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
            this.requestServiceService.getHttpCall("listOfHeader").subscribe((data) => {
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
                message: 'Loading List Of Headers...',
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
        this.router.navigate(['header-images-edit'], navigationExtras);
    }
};
HeaderImagesListPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
HeaderImagesListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-header-images-list',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_images_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_images_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderImagesListPage);



/***/ }),

/***/ 39405:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/header-images-list/header-images-list.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Header List \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"main-content\">\n\n    <div *ngFor=\"let item of listOfHeaders\" class=\"bookings\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\" (click)=\"rowClicked(item.id)\">\n        <ion-col size=\"4\">\n          <img src=\"data:image/png;base64,{{item.frontEndBase64 }}\"/>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"salon-name\">Title: {{ item.title }}</ion-label><br>\n          <ion-label class=\"salon-name\">Amount: &#8377; {{ item.rate }}</ion-label>\n        </ion-col>\n      </ion-row>\n   \n<!--\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-label class=\"salon-name\">Remind me 1h in advance</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-toggle></ion-toggle>\n        </ion-col>\n      </ion-row>\n    -->\n    </div>\n  \n\n    \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 84387:
/*!***********************************************************************!*\
  !*** ./src/app/pages/header-images-list/header-images-list.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItaW1hZ2VzLWxpc3QucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_header-images-list_header-images-list_module_ts.js.map