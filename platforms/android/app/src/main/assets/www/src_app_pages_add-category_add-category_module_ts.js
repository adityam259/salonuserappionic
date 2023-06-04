"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-category_add-category_module_ts"],{

/***/ 15233:
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-category/add-category-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryPageRoutingModule": () => (/* binding */ AddCategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-category.page */ 32052);




const routes = [
    {
        path: '',
        component: _add_category_page__WEBPACK_IMPORTED_MODULE_0__.AddCategoryPage
    }
];
let AddCategoryPageRoutingModule = class AddCategoryPageRoutingModule {
};
AddCategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddCategoryPageRoutingModule);



/***/ }),

/***/ 13711:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryPageModule": () => (/* binding */ AddCategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-category-routing.module */ 15233);
/* harmony import */ var _add_category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-category.page */ 32052);







let AddCategoryPageModule = class AddCategoryPageModule {
};
AddCategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCategoryPageRoutingModule
        ],
        declarations: [_add_category_page__WEBPACK_IMPORTED_MODULE_1__.AddCategoryPage]
    })
], AddCategoryPageModule);



/***/ }),

/***/ 32052:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryPage": () => (/* binding */ AddCategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-category.page.html */ 90254);
/* harmony import */ var _add_category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-category.page.scss */ 51127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);







let AddCategoryPage = class AddCategoryPage {
    constructor(requestServiceService, alertController, navCtrl) {
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.formData = {
            title: '',
            rate: '',
            time: '',
            description: '',
            headerImage: ''
        };
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        this.file = event.target.files[0];
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('headerImage', this.file);
        formData.append('title', this.formData.title);
        formData.append('rate', this.formData.rate);
        formData.append('time', this.formData.time);
        formData.append('description', this.formData.description);
        this.requestServiceService.postHttpCall("submitCategoryImage", formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('tabs/tab1');
            }
            else {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('add-category');
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
    formValid() {
        return this.formData.title && this.formData.rate && this.formData.time && this.formData.description && this.file;
    }
    goToOtherPage(url) {
        this.navCtrl.navigateForward(url);
    }
};
AddCategoryPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
AddCategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-category',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_category_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_category_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCategoryPage);



/***/ }),

/***/ 90254:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-category/add-category.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title></ion-card-title>\n      <ion-card-subtitle></ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form (ngSubmit)=\"onSubmit()\">\n        <ion-item lines=\"full\">\n          <label for=\"fileButton\" class=\"custom-file-upload\">\n            <ion-icon name=\"attach\"></ion-icon>\n            Upload a Header Image\n          </label>\n          <input type=\"file\" name=\"headerImage\" id=\"fileButton\" (change)=\"onFileSelected($event)\" required hidden>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Title</ion-label>\n          <ion-input class=\"ion-no-padding\" type=\"text\" name=\"title\" [(ngModel)]=\"formData.title\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Rate</ion-label>\n          <ion-input type=\"text\" name=\"rate\" [(ngModel)]=\"formData.rate\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Time</ion-label>\n          <ion-input type=\"text\" name=\"time\" [(ngModel)]=\"formData.time\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Description</ion-label>\n          <ion-textarea name=\"description\" [(ngModel)]=\"formData.description\"></ion-textarea>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ 51127:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2F0ZWdvcnkucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-category_add-category_module_ts.js.map