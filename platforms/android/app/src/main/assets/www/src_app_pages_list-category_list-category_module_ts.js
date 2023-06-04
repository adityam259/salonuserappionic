"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_list-category_list-category_module_ts"],{

/***/ 1923:
/*!*********************************************************************!*\
  !*** ./src/app/pages/list-category/list-category-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCategoryPageRoutingModule": () => (/* binding */ ListCategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _list_category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-category.page */ 26704);




const routes = [
    {
        path: '',
        component: _list_category_page__WEBPACK_IMPORTED_MODULE_0__.ListCategoryPage
    }
];
let ListCategoryPageRoutingModule = class ListCategoryPageRoutingModule {
};
ListCategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListCategoryPageRoutingModule);



/***/ }),

/***/ 51191:
/*!*************************************************************!*\
  !*** ./src/app/pages/list-category/list-category.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCategoryPageModule": () => (/* binding */ ListCategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _list_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-category-routing.module */ 1923);
/* harmony import */ var _list_category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-category.page */ 26704);







let ListCategoryPageModule = class ListCategoryPageModule {
};
ListCategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListCategoryPageRoutingModule
        ],
        declarations: [_list_category_page__WEBPACK_IMPORTED_MODULE_1__.ListCategoryPage]
    })
], ListCategoryPageModule);



/***/ }),

/***/ 26704:
/*!***********************************************************!*\
  !*** ./src/app/pages/list-category/list-category.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCategoryPage": () => (/* binding */ ListCategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list-category.page.html */ 22302);
/* harmony import */ var _list_category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-category.page.scss */ 75571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let ListCategoryPage = class ListCategoryPage {
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
            this.requestServiceService.getHttpCall("listOfCategory").subscribe((data) => {
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
                message: 'Loading List Of Category...',
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
        this.router.navigate(['list-category-edit'], navigationExtras);
    }
};
ListCategoryPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
ListCategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list-category',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_category_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_category_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListCategoryPage);



/***/ }),

/***/ 22302:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/list-category/list-category.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>List Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"main-content\">\n\n    <div *ngFor=\"let item of listOfHeaders\" class=\"bookings\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\" (click)=\"rowClicked(item.id)\">\n        <ion-col size=\"4\">\n          <img src=\"data:image/png;base64,{{item.frontEndBase64 }}\"/>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"salon-name\">Title: {{ item.title }}</ion-label><br>\n          <ion-label class=\"salon-name\">Amount: &#8377; {{ item.rate }}</ion-label>\n        </ion-col>\n      </ion-row>\n   \n<!--\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-label class=\"salon-name\">Remind me 1h in advance</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-toggle></ion-toggle>\n        </ion-col>\n      </ion-row>\n    -->\n    </div>\n  \n\n    \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 75571:
/*!*************************************************************!*\
  !*** ./src/app/pages/list-category/list-category.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_list-category_list-category_module_ts.js.map