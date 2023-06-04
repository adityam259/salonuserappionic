"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_history_module_ts"],{

/***/ 54615:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 2663);

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
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 15635:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 54615);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 2663);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
    })
], HistoryPageModule);



/***/ }),

/***/ 2663:
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./history.page.html */ 30744);
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.scss */ 54091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/

let HistoryPage = class HistoryPage {
    constructor() {
        this.current = 1;
    }
    ngOnInit() {
    }
};
HistoryPage.ctorParameters = () => [];
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-history',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryPage);



/***/ }),

/***/ 30744:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/history/history.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n  <ion-segment [(ngModel)]=\"current\" mode=\"md\">\n    <ion-segment-button [value]=\"1\">\n      <ion-label>Ongoing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"2\">\n      <ion-label>Old</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"current == 1\">\n    <div *ngFor=\"let item of [1,2,3,4,5,6]\" class=\"bookings\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"4\">\n          <div class=\"user_image\" [ngStyle]=\"{'background-image':'url(assets/profile2.jpg)'}\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"salon-name\">Mint Salon Drive-in UniSex Famous</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"location\"></ion-icon> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,\n            Bangalore-560016\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"padding: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"6\">\n          <ion-label class=\"salon-name\">Men's Haircuts</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> Lisa T. Plum\n          </ion-label>\n\n          <ion-label class=\"salon-name\">Men's Haircuts</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> Lisa T. Plum\n          </ion-label>\n\n          <ion-label class=\"salon-name\">Men's Haircuts</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> Lisa T. Plum\n          </ion-label>\n\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"date-time\">December 26, 2021</ion-label>\n          <ion-label class=\"date-time\">01:30 - 02:30 PM</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-label class=\"salon-name\">Remind me 1h in advance</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-toggle></ion-toggle>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div *ngIf=\"current == 2\">\n    <div *ngFor=\"let item of [1,2,3,4,5,6,7,8]\" class=\"bookings\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"4\">\n          <div class=\"user_image\" [ngStyle]=\"{'background-image':'url(assets/profile2.jpg)'}\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"salon-name\">Mint Salon Drive-in UniSex Famous</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"location\"></ion-icon> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,\n            Bangalore-560016\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"padding: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"6\">\n          <ion-label class=\"salon-name\">Men's Haircuts</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> Lisa T. Plum\n          </ion-label>\n\n          <ion-label class=\"salon-name\">Men's Haircuts</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> Lisa T. Plum\n          </ion-label>\n\n          <ion-label class=\"salon-name\">Men's Haircuts</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> Lisa T. Plum\n          </ion-label>\n\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"date-time\">December 26, 2021</ion-label>\n          <ion-label class=\"date-time\">01:30 - 02:30 PM</ion-label>\n        </ion-col>\n      </ion-row>\n\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 54091:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n.head {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 20px 0px 10px 0px;\n  align-items: center;\n}\n.indicator-container {\n  padding-left: 0.5rem;\n  padding-bottom: 0.4rem;\n}\n.event-indicator {\n  background: var(--ion-color-primary);\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: white !important;\n}\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-primary) !important;\n  color: white;\n  border-radius: 10px !important;\n}\n:host ::ng-deep .monthview-selected .event-indicator {\n  background: var(--ion-color-light);\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n:host ::ng-deep .monthview-selected .with-event {\n  color: white !important;\n}\n:host ::ng-deep tr,\n:host ::ng-deep td,\n:host ::ng-deep th {\n  border: unset !important;\n}\n:host ::ng-deep .table-bordered {\n  border: unset !important;\n}\n.with-event {\n  color: black;\n  font-weight: bold;\n  border-radius: 15px;\n}\n.bookings {\n  margin-top: 20px;\n  box-shadow: 0px 0px 10px 0px grey;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.bookings .user_image {\n  height: 70px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.bookings .salon-name {\n  font-family: \"product\";\n  display: block;\n  font-size: 14px;\n}\n.bookings .salon-address {\n  display: block;\n  font-size: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  color: gray;\n}\n.bookings .date-time {\n  font-size: 14px;\n  font-family: \"product\";\n  display: block;\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7OztDQUFBO0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQUdGO0FBQUE7RUFDRSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdGO0FBQ0U7RUFDRSxrQ0FBQTtBQUVKO0FBQ0U7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDRSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQUk7RUFDRSx1QkFBQTtBQUVOO0FBRUU7OztFQUdFLHdCQUFBO0FBQUo7QUFFRTtFQUNFLHdCQUFBO0FBQUo7QUFJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQUo7QUFHRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFESjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUZKIiwiZmlsZSI6Imhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAyMHB4IDBweCAxMHB4IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluZGljYXRvci1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbn1cblxuLmV2ZW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb250aHZpZXctcHJpbWFyeS13aXRoLWV2ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9udGh2aWV3LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb250aHZpZXctc2VsZWN0ZWQgLmV2ZW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vbnRodmlldy1zZWxlY3RlZCAud2l0aC1ldmVudCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIHRyLFxuOmhvc3QgOjpuZy1kZWVwIHRkLFxuOmhvc3QgOjpuZy1kZWVwIHRoIHtcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLndpdGgtZXZlbnQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYm9va2luZ3Mge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ib29raW5ncyAudXNlcl9pbWFnZSB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5ib29raW5ncyAuc2Fsb24tbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcInByb2R1Y3RcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib29raW5ncyAuc2Fsb24tYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiBncmF5O1xufVxuLmJvb2tpbmdzIC5kYXRlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInByb2R1Y3RcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_history_module_ts.js.map