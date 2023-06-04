"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_edit-employee_edit-employee_module_ts"],{

/***/ 4928:
/*!*********************************************************************!*\
  !*** ./src/app/pages/edit-employee/edit-employee-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEmployeePageRoutingModule": () => (/* binding */ EditEmployeePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _edit_employee_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-employee.page */ 93091);




const routes = [
    {
        path: '',
        component: _edit_employee_page__WEBPACK_IMPORTED_MODULE_0__.EditEmployeePage
    }
];
let EditEmployeePageRoutingModule = class EditEmployeePageRoutingModule {
};
EditEmployeePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditEmployeePageRoutingModule);



/***/ }),

/***/ 12868:
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-employee/edit-employee.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEmployeePageModule": () => (/* binding */ EditEmployeePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _edit_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-employee-routing.module */ 4928);
/* harmony import */ var _edit_employee_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-employee.page */ 93091);







let EditEmployeePageModule = class EditEmployeePageModule {
};
EditEmployeePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditEmployeePageRoutingModule
        ],
        declarations: [_edit_employee_page__WEBPACK_IMPORTED_MODULE_1__.EditEmployeePage]
    })
], EditEmployeePageModule);



/***/ }),

/***/ 93091:
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-employee/edit-employee.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEmployeePage": () => (/* binding */ EditEmployeePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_employee_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-employee.page.html */ 97547);
/* harmony import */ var _edit_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-employee.page.scss */ 8696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);









let EditEmployeePage = class EditEmployeePage {
    constructor(route, loadingController, requestServiceService, alertController, navCtrl) {
        this.route = route;
        this.loadingController = loadingController;
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
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
            id: ''
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.itemId = params['id'];
        });
        //alert(this.itemId);
        this.getHeaderImageDetails(this.itemId);
    }
    getHeaderImageDetails(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('id', id);
            this.presentLoading(); // show loader
            this.requestServiceService.postHttpCall("getLoginData", formData).subscribe((data) => {
                if (data.status === 'SUCCESS') {
                    console.log(data);
                    //this.listOfHeaders = data.data;
                    this.formData.firstName = data.data.firstName;
                    this.formData.lastName = data.data.lastName;
                    this.formData.userName = data.data.userName;
                    this.formData.password = data.data.password;
                    this.formData.phoneNo = data.data.phoneNo;
                    this.formData.address = data.data.address;
                    this.formData.emailId = data.data.emailId;
                    this.formData.type = data.data.type;
                    this.formData.gender = data.data.gender;
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
                message: 'Loading Header Data...',
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('userName', this.formData.userName);
        formData.append('password', this.formData.password);
        formData.append('gender', this.formData.gender);
        formData.append('firstName', this.formData.firstName);
        formData.append('lastName', this.formData.lastName);
        formData.append('phoneNo', this.formData.phoneNo);
        formData.append('address', this.formData.address);
        formData.append('emailId', this.formData.emailId);
        formData.append('type', this.formData.type);
        formData.append('id', this.formData.id);
        this.requestServiceService.postHttpCall("updateEmployeeUser", formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('tabs/tab1');
            }
            else {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('list-employee');
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
EditEmployeePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
EditEmployeePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-employee',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_employee_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditEmployeePage);



/***/ }),

/***/ 97547:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/edit-employee/edit-employee.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Employee / User</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title></ion-card-title>\n      <ion-card-subtitle></ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form (ngSubmit)=\"onSubmit()\">\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">First Name</ion-label>\n          <ion-input type=\"text\" name=\"firstName\" [(ngModel)]=\"formData.firstName\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Last Name</ion-label>\n          <ion-input type=\"text\" name=\"lastName\" [(ngModel)]=\"formData.lastName\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"formData.address\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">User Name</ion-label>\n          <ion-input type=\"text\" name=\"userName\" [(ngModel)]=\"formData.userName\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">password</ion-label>\n          <ion-input type=\"passsword\" name=\"password\" [(ngModel)]=\"formData.password\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Email Id</ion-label>\n          <ion-input type=\"text\" name=\"emailId\" [(ngModel)]=\"formData.emailId\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Mobile No.</ion-label>\n          <ion-input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"formData.phoneNo\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Gender</ion-label>\n          <ion-select [(ngModel)]=\"formData.gender\" name=\"gender\" required>\n            <ion-select-option [value]=\"male\">Male</ion-select-option>\n            <ion-select-option [value]=\"feMale\">FeMale</ion-select-option>\n          </ion-select>        \n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Type</ion-label>\n          <ion-select [(ngModel)]=\"formData.type\" name=\"type\" required>\n            <ion-select-option [value]=\"employee\">Employee</ion-select-option>\n            <ion-select-option [value]=\"user\">User</ion-select-option>\n          </ion-select>        \n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ 8696:
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-employee/edit-employee.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVtcGxveWVlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_edit-employee_edit-employee_module_ts.js.map