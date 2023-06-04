"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_checklist_checklist_module_ts"],{

/***/ 20764:
/*!*************************************************************!*\
  !*** ./src/app/pages/checklist/checklist-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistPageRoutingModule": () => (/* binding */ ChecklistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _checklist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist.page */ 57123);

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
        component: _checklist_page__WEBPACK_IMPORTED_MODULE_0__.ChecklistPage
    }
];
let ChecklistPageRoutingModule = class ChecklistPageRoutingModule {
};
ChecklistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChecklistPageRoutingModule);



/***/ }),

/***/ 99851:
/*!*****************************************************!*\
  !*** ./src/app/pages/checklist/checklist.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistPageModule": () => (/* binding */ ChecklistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _checklist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist-routing.module */ 20764);
/* harmony import */ var _checklist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.page */ 57123);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let ChecklistPageModule = class ChecklistPageModule {
};
ChecklistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _checklist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChecklistPageRoutingModule
        ],
        declarations: [_checklist_page__WEBPACK_IMPORTED_MODULE_1__.ChecklistPage]
    })
], ChecklistPageModule);



/***/ }),

/***/ 57123:
/*!***************************************************!*\
  !*** ./src/app/pages/checklist/checklist.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistPage": () => (/* binding */ ChecklistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checklist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./checklist.page.html */ 52239);
/* harmony import */ var _checklist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.page.scss */ 47988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



let ChecklistPage = class ChecklistPage {
    constructor(router, NavCtrl) {
        this.router = router;
        this.NavCtrl = NavCtrl;
    }
    ngOnInit() {
    }
    goToBack() {
        this.NavCtrl.back();
    }
    goToLocation() {
        this.router.navigate(['service-location']);
    }
};
ChecklistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
ChecklistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-checklist',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checklist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checklist_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChecklistPage);



/***/ }),

/***/ 52239:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/checklist/checklist.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Booking Checklist</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"main-content\">\n    <div class=\"stylist\">\n      <ion-item class=\"ion-no-padding\" lines=\"none\">\n        <ion-thumbnail>\n          <img src=\"assets/profile.jpg\" />\n        </ion-thumbnail>\n        <div>\n          <h5>Jon Snow</h5>\n          <p>Experience - 8 year</p>\n        </div>\n        <ion-label slot=\"end\" class=\"change\">change</ion-label>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\" lines=\"none\">\n        <div class=\"date\">\n          <ion-label class=\"month\">Nov</ion-label>\n          <ion-label class=\"day\">17</ion-label>\n        </div>\n        <div>\n          <h5>Jon Snow</h5>\n          <p>Experience - 8 year</p>\n        </div>\n        <ion-label slot=\"end\" class=\"change\">change</ion-label>\n      </ion-item>\n    </div>\n    <div class=\"services\">\n      <ion-item class=\"ion-no-padding\" lines=\"none\">\n        <div>\n          <h5>Regular Hair Cut</h5>\n          <p>$ 20.12</p>\n        </div>\n        <div slot=\"end\" class=\"add-btn\">\n          <ion-label class=\"btn\">-</ion-label>\n          <ion-label class=\"number\">1</ion-label>\n          <ion-label class=\"btn\">+</ion-label>\n        </div>\n      </ion-item>\n    </div>\n    <div class=\"bill-detail\">\n      <div class=\"bill\">\n        <ion-label class=\"title\">Service Cost</ion-label>\n        <ion-label class=\"price\">$ 120.12</ion-label>\n      </div>\n      <div class=\"bill\">\n        <ion-label class=\"title\">Taxt</ion-label>\n        <ion-label class=\"price\">$ 0.12</ion-label>\n      </div>\n      <div class=\"bill\">\n        <ion-label class=\"title\">Total Cost</ion-label>\n        <ion-label class=\"price\">$ 0.12</ion-label>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class=\"footer\">\n    <ion-button class=\"btn\" (click)=\"goToLocation()\" expand=\"block\">\n      Continue\n    </ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 47988:
/*!*****************************************************!*\
  !*** ./src/app/pages/checklist/checklist.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .main-content {\n  padding: 20px;\n}\nion-content .main-content .stylist ion-item {\n  display: flex;\n  align-items: center;\n  padding: 15px 0px 15px 10px;\n  border: 1px solid lightgray;\n  border-radius: 15px;\n  margin-bottom: 15px;\n}\nion-content .main-content .stylist ion-item img {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  margin: 5px 5px 5px 15px;\n}\nion-content .main-content .stylist ion-item h5 {\n  margin: 0px;\n  font-weight: bold;\n  padding-left: 10px;\n}\nion-content .main-content .stylist ion-item p {\n  margin: 3px;\n  padding-left: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n}\nion-content .main-content .stylist ion-item .change {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  text-align: right;\n}\nion-content .main-content .stylist ion-item .date {\n  background-color: var(--ion-color-primary);\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  margin: 5px 5px 5px 15px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\nion-content .main-content .stylist ion-item .date .month {\n  font-size: 12px;\n}\nion-content .main-content .stylist ion-item .date .day {\n  font-size: 16px;\n}\nion-content .main-content .services ion-item {\n  display: flex;\n  align-items: center;\n  padding: 15px 0px 15px 10px;\n  border: 1px solid lightgray;\n  border-radius: 15px;\n  margin-bottom: 15px;\n}\nion-content .main-content .services ion-item h5 {\n  margin: 0px;\n  font-weight: bold;\n  padding-left: 10px;\n}\nion-content .main-content .services ion-item p {\n  margin: 3px;\n  padding-left: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n}\nion-content .main-content .services ion-item .add-btn {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  text-align: right;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px;\n}\nion-content .main-content .services ion-item .add-btn .btn {\n  background-color: var(--ion-color-light);\n  padding: 5px 10px;\n  margin: 5px;\n  border-radius: 10px;\n  width: 30px;\n}\nion-content .main-content .services ion-item .add-btn .number {\n  background-color: black;\n  color: white;\n  padding: 10px;\n  padding: 5px 10px;\n  margin: 5px;\n  border-radius: 10px;\n  width: 30px;\n}\nion-content .main-content .bill-detail {\n  padding-top: 40px;\n}\nion-content .main-content .bill-detail .bill {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n}\nion-content .main-content .bill-detail .bill .title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n}\nion-content .main-content .bill-detail .bill .price {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n}\nion-footer {\n  padding: 15px 20px;\n}\nion-footer .footer .btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGFBQUE7QUFDSjtBQUNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ1Y7QUFDUTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1Y7QUFDUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBQ1Y7QUFDUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFDVjtBQUNRO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNWO0FBQVU7RUFDRSxlQUFBO0FBRVo7QUFBVTtFQUNFLGVBQUE7QUFFWjtBQUlNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUdRO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEVjtBQUdRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFEVjtBQUdRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRFY7QUFFVTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQVo7QUFFVTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBWjtBQUtJO0VBQ0UsaUJBQUE7QUFITjtBQUtNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQUtRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFIVjtBQUtRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFIVjtBQVNBO0VBQ0Usa0JBQUE7QUFORjtBQVNJO0VBQ0UsV0FBQTtBQVBOIiwiZmlsZSI6ImNoZWNrbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc3R5bGlzdCBpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc3R5bGlzdCBpb24taXRlbSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweCA1cHggNXB4IDE1cHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zdHlsaXN0IGlvbi1pdGVtIGg1IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zdHlsaXN0IGlvbi1pdGVtIHAge1xuICBtYXJnaW46IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnN0eWxpc3QgaW9uLWl0ZW0gLmNoYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnN0eWxpc3QgaW9uLWl0ZW0gLmRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnN0eWxpc3QgaW9uLWl0ZW0gLmRhdGUgLm1vbnRoIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc3R5bGlzdCBpb24taXRlbSAuZGF0ZSAuZGF5IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VydmljZXMgaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnNlcnZpY2VzIGlvbi1pdGVtIGg1IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zZXJ2aWNlcyBpb24taXRlbSBwIHtcbiAgbWFyZ2luOiAzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zZXJ2aWNlcyBpb24taXRlbSAuYWRkLWJ0biB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuc2VydmljZXMgaW9uLWl0ZW0gLmFkZC1idG4gLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zZXJ2aWNlcyBpb24taXRlbSAuYWRkLWJ0biAubnVtYmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmJpbGwtZGV0YWlsIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5iaWxsLWRldGFpbCAuYmlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5iaWxsLWRldGFpbCAuYmlsbCAudGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmJpbGwtZGV0YWlsIC5iaWxsIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cbmlvbi1mb290ZXIgLmZvb3RlciAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_checklist_checklist_module_ts.js.map