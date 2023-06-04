"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_list-employee_list-employee_module_ts"],{

/***/ 39930:
/*!*********************************************************************!*\
  !*** ./src/app/pages/list-employee/list-employee-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListEmployeePageRoutingModule": () => (/* binding */ ListEmployeePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _list_employee_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-employee.page */ 14331);




const routes = [
    {
        path: '',
        component: _list_employee_page__WEBPACK_IMPORTED_MODULE_0__.ListEmployeePage
    }
];
let ListEmployeePageRoutingModule = class ListEmployeePageRoutingModule {
};
ListEmployeePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListEmployeePageRoutingModule);



/***/ }),

/***/ 20725:
/*!*************************************************************!*\
  !*** ./src/app/pages/list-employee/list-employee.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListEmployeePageModule": () => (/* binding */ ListEmployeePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _list_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-employee-routing.module */ 39930);
/* harmony import */ var _list_employee_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-employee.page */ 14331);







let ListEmployeePageModule = class ListEmployeePageModule {
};
ListEmployeePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListEmployeePageRoutingModule
        ],
        declarations: [_list_employee_page__WEBPACK_IMPORTED_MODULE_1__.ListEmployeePage]
    })
], ListEmployeePageModule);



/***/ }),

/***/ 14331:
/*!***********************************************************!*\
  !*** ./src/app/pages/list-employee/list-employee.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListEmployeePage": () => (/* binding */ ListEmployeePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_employee_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list-employee.page.html */ 44382);
/* harmony import */ var _list_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-employee.page.scss */ 30998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);







let ListEmployeePage = class ListEmployeePage {
    constructor(requestServiceService, loadingController, router) {
        this.requestServiceService = requestServiceService;
        this.loadingController = loadingController;
        this.router = router;
    }
    ngOnInit() {
        this.getListOfUserEmployee();
    }
    getListOfUserEmployee() {
        this.requestServiceService.getHttpCall("getLoginUserEmployee").subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.listOfHeaders = data.data;
            }
            else {
                console.log(data);
                this.message = data.message;
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading List Of Employee / Users...',
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
        this.router.navigate(['edit-employee'], navigationExtras);
    }
};
ListEmployeePage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ListEmployeePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list-employee',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_employee_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListEmployeePage);



/***/ }),

/***/ 44382:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/list-employee/list-employee.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>List Employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"main-content\">\n\n    <div *ngFor=\"let item of listOfHeaders\" class=\"bookings\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\" (click)=\"rowClicked(item.id)\">\n        <ion-col size=\"12\">\n          <ion-label class=\"salon-name\" style=\"padding-left: 20px;\" >Name: {{ item.firstName }} {{ item.lastName }}</ion-label><br>\n          <ion-label class=\"salon-name\" style=\"padding-left: 20px;\" >User Name:{{ item.userName }}</ion-label><br>\n          <ion-label class=\"salon-name\" style=\"padding-left: 20px;\" >Type:{{ item.type }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 30998:
/*!*************************************************************!*\
  !*** ./src/app/pages/list-employee/list-employee.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWVtcGxveWVlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_list-employee_list-employee_module_ts.js.map