"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-beautician_add-beautician_module_ts"],{

/***/ 17736:
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-beautician/add-beautician-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBeauticianPageRoutingModule": () => (/* binding */ AddBeauticianPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_beautician_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-beautician.page */ 35916);




const routes = [
    {
        path: '',
        component: _add_beautician_page__WEBPACK_IMPORTED_MODULE_0__.AddBeauticianPage
    }
];
let AddBeauticianPageRoutingModule = class AddBeauticianPageRoutingModule {
};
AddBeauticianPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddBeauticianPageRoutingModule);



/***/ }),

/***/ 98409:
/*!***************************************************************!*\
  !*** ./src/app/pages/add-beautician/add-beautician.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBeauticianPageModule": () => (/* binding */ AddBeauticianPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _add_beautician_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-beautician-routing.module */ 17736);
/* harmony import */ var _add_beautician_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-beautician.page */ 35916);







let AddBeauticianPageModule = class AddBeauticianPageModule {
};
AddBeauticianPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_beautician_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddBeauticianPageRoutingModule
        ],
        declarations: [_add_beautician_page__WEBPACK_IMPORTED_MODULE_1__.AddBeauticianPage]
    })
], AddBeauticianPageModule);



/***/ }),

/***/ 35916:
/*!*************************************************************!*\
  !*** ./src/app/pages/add-beautician/add-beautician.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBeauticianPage": () => (/* binding */ AddBeauticianPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_beautician_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-beautician.page.html */ 69758);
/* harmony import */ var _add_beautician_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-beautician.page.scss */ 15472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);







let AddBeauticianPage = class AddBeauticianPage {
    constructor(requestServiceService, storageService, loadingController) {
        this.requestServiceService = requestServiceService;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.formData = {
            phoneNo: ''
        };
    }
    ngOnInit() {
        this.getMobileNoFromSession();
    }
    apiCallToGetOrderList(mobile) {
        this.formData.phoneNo = mobile;
        this.presentLoading(); // show loader
        this.requestServiceService.postHttpCall("orderDetails", this.formData).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.orders = data.data;
            }
            else {
                console.log(data);
                this.message = data.message;
            }
            this.loadingController.dismiss(); // hide loader
        });
    }
    getMobileNoFromSession() {
        this.storageService.get('mobileNo').then(result => {
            if (result != null) {
                console.log('Storage mobileNo & Pin: ' + result);
                let separatedString = result.split('|');
                this.mobileNo = separatedString[0];
                this.apiCallToGetOrderList(this.mobileNo);
            }
        }).catch(e => {
            console.log('error: ', e);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading orders...',
                spinner: 'crescent'
            });
            yield loading.present();
        });
    }
};
AddBeauticianPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
AddBeauticianPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-beautician',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_beautician_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_beautician_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddBeauticianPage);



/***/ }),

/***/ 69758:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-beautician/add-beautician.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Order List \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main-content\">\n\n    <div *ngFor=\"let item of orders\" class=\"bookings\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n        <!--<ion-col size=\"4\">\n          <div class=\"user_image\" [ngStyle]=\"{'background-image':'url(assets/profile2.jpg)'}\">\n          </div>\n        </ion-col>-->\n        <ion-col size=\"8\">\n          <ion-label class=\"salon-name\">{{ item.title }}</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"location\"></ion-icon> {{ item.userAddress }}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"padding: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"6\">\n          <ion-label class=\"salon-name\">{{ item.fullName }}</ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> {{ item.userName }}\n          </ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> {{ item.userMobile }}\n          </ion-label>\n          <ion-label class=\"salon-address\">\n            <ion-icon slot=\"end\" name=\"person\"></ion-icon> {{ item.userEmail }}\n          </ion-label>\n\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"date-time\"><label>Tracking Id </label> : {{ item.orderTrackingId }}</ion-label>\n          <ion-label class=\"date-time\"><label>Amount </label> : {{ item.totalAmount }}</ion-label>\n        </ion-col>\n      </ion-row>\n<!--\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-label class=\"salon-name\">Remind me 1h in advance</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-toggle></ion-toggle>\n        </ion-col>\n      </ion-row>\n    -->\n    </div>\n  \n\n    \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 15472:
/*!***************************************************************!*\
  !*** ./src/app/pages/add-beautician/add-beautician.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n.head {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 20px 0px 10px 0px;\n  align-items: center;\n}\n.indicator-container {\n  padding-left: 0.5rem;\n  padding-bottom: 0.4rem;\n}\n.event-indicator {\n  background: var(--ion-color-primary);\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: white !important;\n}\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-primary) !important;\n  color: white;\n  border-radius: 10px !important;\n}\n:host ::ng-deep .monthview-selected .event-indicator {\n  background: var(--ion-color-light);\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n:host ::ng-deep .monthview-selected .with-event {\n  color: white !important;\n}\n:host ::ng-deep tr,\n:host ::ng-deep td,\n:host ::ng-deep th {\n  border: unset !important;\n}\n:host ::ng-deep .table-bordered {\n  border: unset !important;\n}\n.with-event {\n  color: black;\n  font-weight: bold;\n  border-radius: 15px;\n}\n.bookings {\n  margin-top: 20px;\n  box-shadow: 0px 0px 10px 0px grey;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.bookings .user_image {\n  height: 70px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.bookings .salon-name {\n  font-family: \"product\";\n  display: block;\n  font-size: 14px;\n}\n.bookings .salon-address {\n  display: block;\n  font-size: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  color: gray;\n}\n.bookings .date-time {\n  font-size: 14px;\n  font-family: \"product\";\n  display: block;\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1iZWF1dGljaWFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUFHRjtBQUFBO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQUNFO0VBQ0Usa0NBQUE7QUFFSjtBQUNFO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUFJO0VBQ0Usa0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsdUJBQUE7QUFFTjtBQUVFOzs7RUFHRSx3QkFBQTtBQUFKO0FBRUU7RUFDRSx3QkFBQTtBQUFKO0FBSUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUFKO0FBR0U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREo7QUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFGSiIsImZpbGUiOiJhZGQtYmVhdXRpY2lhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi9cbi5oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDIwcHggMHB4IDEwcHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuXG4uZXZlbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb250aHZpZXctc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vbnRodmlldy1zZWxlY3RlZCAuZXZlbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9udGh2aWV3LXNlbGVjdGVkIC53aXRoLWV2ZW50IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgdHIsXG46aG9zdCA6Om5nLWRlZXAgdGQsXG46aG9zdCA6Om5nLWRlZXAgdGgge1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4ud2l0aC1ldmVudCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5ib29raW5ncyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJvb2tpbmdzIC51c2VyX2ltYWdlIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmJvb2tpbmdzIC5zYWxvbi1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwicHJvZHVjdFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJvb2tpbmdzIC5zYWxvbi1hZGRyZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IGdyYXk7XG59XG4uYm9va2luZ3MgLmRhdGUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwicHJvZHVjdFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-beautician_add-beautician_module_ts.js.map