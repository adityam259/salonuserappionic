"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-employee_add-employee_module_ts"],{

/***/ 58034:
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEmployeePageRoutingModule": () => (/* binding */ AddEmployeePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_employee_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-employee.page */ 8163);




const routes = [
    {
        path: '',
        component: _add_employee_page__WEBPACK_IMPORTED_MODULE_0__.AddEmployeePage
    }
];
let AddEmployeePageRoutingModule = class AddEmployeePageRoutingModule {
};
AddEmployeePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddEmployeePageRoutingModule);



/***/ }),

/***/ 67282:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEmployeePageModule": () => (/* binding */ AddEmployeePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-employee-routing.module */ 58034);
/* harmony import */ var _add_employee_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-employee.page */ 8163);







let AddEmployeePageModule = class AddEmployeePageModule {
};
AddEmployeePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddEmployeePageRoutingModule
        ],
        declarations: [_add_employee_page__WEBPACK_IMPORTED_MODULE_1__.AddEmployeePage]
    })
], AddEmployeePageModule);



/***/ }),

/***/ 8163:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEmployeePage": () => (/* binding */ AddEmployeePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_employee_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-employee.page.html */ 78442);
/* harmony import */ var _add_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-employee.page.scss */ 29643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);








let AddEmployeePage = class AddEmployeePage {
    constructor(router, requestServiceService, storageService, alertController) {
        this.router = router;
        this.requestServiceService = requestServiceService;
        this.storageService = storageService;
        this.alertController = alertController;
        this.formData = {
            phoneNo: '',
            userName: '',
            firstName: '',
            lastName: '',
            address: '',
            password: '',
            emailId: '',
            gender: '',
            type: '',
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.formData);
        this.requestServiceService.postHttpCall("registerUserEmployee", this.formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.presentAlert(data.status, data.message);
            }
            else {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.message = data.message;
            }
        });
    }
    presentAlert(status, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: status,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AddEmployeePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
AddEmployeePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-employee',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_employee_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEmployeePage);



/***/ }),

/***/ 78442:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-employee/add-employee.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Employee / User</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title></ion-card-title>\n      <ion-card-subtitle></ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form (ngSubmit)=\"onSubmit()\">\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">First Name</ion-label>\n          <ion-input type=\"text\" name=\"firstName\" [(ngModel)]=\"formData.firstName\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Last Name</ion-label>\n          <ion-input type=\"text\" name=\"lastName\" [(ngModel)]=\"formData.lastName\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"formData.address\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">User Name</ion-label>\n          <ion-input type=\"text\" name=\"userName\" [(ngModel)]=\"formData.userName\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">password</ion-label>\n          <ion-input type=\"passsword\" name=\"password\" [(ngModel)]=\"formData.password\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Email Id</ion-label>\n          <ion-input type=\"text\" name=\"emailId\" [(ngModel)]=\"formData.emailId\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Mobile No.</ion-label>\n          <ion-input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"formData.phoneNo\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Gender</ion-label>\n          <ion-select [(ngModel)]=\"formData.gender\" name=\"gender\" required>\n            <ion-select-option [value]=\"male\">Male</ion-select-option>\n            <ion-select-option [value]=\"feMale\">FeMale</ion-select-option>\n          </ion-select>        \n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Type</ion-label>\n          <ion-select [(ngModel)]=\"formData.type\" name=\"type\" required>\n            <ion-select-option [value]=\"employee\">Employee</ion-select-option>\n            <ion-select-option [value]=\"user\">User</ion-select-option>\n          </ion-select>        \n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ 29643:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW1wbG95ZWUucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-employee_add-employee_module_ts.js.map