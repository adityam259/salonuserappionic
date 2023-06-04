"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pick-stylist_pick-stylist_module_ts"],{

/***/ 76749:
/*!*******************************************************************!*\
  !*** ./src/app/pages/pick-stylist/pick-stylist-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickStylistPageRoutingModule": () => (/* binding */ PickStylistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pick_stylist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pick-stylist.page */ 36451);

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
        component: _pick_stylist_page__WEBPACK_IMPORTED_MODULE_0__.PickStylistPage
    }
];
let PickStylistPageRoutingModule = class PickStylistPageRoutingModule {
};
PickStylistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PickStylistPageRoutingModule);



/***/ }),

/***/ 28115:
/*!***********************************************************!*\
  !*** ./src/app/pages/pick-stylist/pick-stylist.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickStylistPageModule": () => (/* binding */ PickStylistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _pick_stylist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pick-stylist-routing.module */ 76749);
/* harmony import */ var _pick_stylist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pick-stylist.page */ 36451);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let PickStylistPageModule = class PickStylistPageModule {
};
PickStylistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pick_stylist_routing_module__WEBPACK_IMPORTED_MODULE_0__.PickStylistPageRoutingModule
        ],
        declarations: [_pick_stylist_page__WEBPACK_IMPORTED_MODULE_1__.PickStylistPage]
    })
], PickStylistPageModule);



/***/ }),

/***/ 36451:
/*!*********************************************************!*\
  !*** ./src/app/pages/pick-stylist/pick-stylist.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickStylistPage": () => (/* binding */ PickStylistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pick_stylist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pick-stylist.page.html */ 93350);
/* harmony import */ var _pick_stylist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pick-stylist.page.scss */ 48537);
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



let PickStylistPage = class PickStylistPage {
    constructor(router, NavCtrl) {
        this.router = router;
        this.NavCtrl = NavCtrl;
    }
    ngOnInit() {
    }
    goToStylist() {
        this.router.navigate(['stylist-info']);
    }
    goToBack() {
        this.NavCtrl.back();
    }
};
PickStylistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
PickStylistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pick-stylist',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pick_stylist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pick_stylist_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PickStylistPage);



/***/ }),

/***/ 93350:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/pick-stylist/pick-stylist.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pick your Slot</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"calendar-clear-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"main-content\">\n    <div class=\"heading\">\n      list of stylist availabel at your selected slot\n    </div>\n\n    <ion-radio-group value=\"biff\" mode=\"md\">\n      <ion-item class=\"ion-no-padding\" *ngFor=\"let item of [1,2,3]\">\n        <ion-radio class=\"ion-no-margin\" slot=\"start\" value=\"1\"></ion-radio>\n        <ion-thumbnail>\n          <img src=\"assets/beard2.jpg\" />\n        </ion-thumbnail>\n        <div>\n          <h5>Jon Snow</h5>\n          <p>Experience - 8 year</p>\n        </div>\n        <div slot=\"end\" class=\"reting\">\n          <div>\n            <p class=\"star\"> <span>\n                <ion-icon name=\"star\"></ion-icon>\n              </span> 4.5</p>\n          </div>\n          <ion-label>12 reviews</ion-label>\n        </div>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer\">\n    <ion-button class=\"btn\" (click)=\"goToStylist()\" expand=\"block\">\n      Proceed to Checkout\n    </ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 48537:
/*!***********************************************************!*\
  !*** ./src/app/pages/pick-stylist/pick-stylist.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .main-content {\n  padding-left: 20px;\n}\nion-content .main-content .heading {\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-medium);\n  text-align: center;\n  padding: 20px 40px;\n}\nion-content .main-content ion-item {\n  display: flex;\n  align-items: center;\n  padding: 5px 0px 0px 0px;\n}\nion-content .main-content ion-item img {\n  width: 40px;\n  height: 40px;\n  border-radius: 15px;\n  margin: 5px 5px 5px 15px;\n}\nion-content .main-content ion-item h5 {\n  margin: 0px;\n  font-weight: bold;\n  padding-left: 10px;\n}\nion-content .main-content ion-item p {\n  margin: 3px;\n  padding-left: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n}\nion-content .main-content ion-item .reting {\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\nion-content .main-content ion-item .reting .star {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-content .main-content ion-item .reting .star span {\n  color: #fbc423;\n}\nion-content .main-content ion-item .reting ion-label {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\nion-footer {\n  padding: 15px 20px;\n}\nion-footer .footer .btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2stc3R5bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7O0NBQUE7QUFTRTtFQUNFLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUVOO0FBRE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFHUjtBQURNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQURNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFHUjtBQURNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBR1I7QUFGUTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUFJVjtBQUhVO0VBQ0UsY0FBQTtBQUtaO0FBRlE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFJVjtBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUNJO0VBQ0UsV0FBQTtBQUNOIiwiZmlsZSI6InBpY2stc3R5bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IGlvbi1pdGVtIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDVweCA1cHggMTVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgaW9uLWl0ZW0gaDUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgaW9uLWl0ZW0gcCB7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCBpb24taXRlbSAucmV0aW5nIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgaW9uLWl0ZW0gLnJldGluZyAuc3RhciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCBpb24taXRlbSAucmV0aW5nIC5zdGFyIHNwYW4ge1xuICBjb2xvcjogI2ZiYzQyMztcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgaW9uLWl0ZW0gLnJldGluZyBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cbmlvbi1mb290ZXIgLmZvb3RlciAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pick-stylist_pick-stylist_module_ts.js.map