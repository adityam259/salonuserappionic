"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_order-history_order-history_module_ts"],{

/***/ 70257:
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-history/order-history-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageRoutingModule": () => (/* binding */ OrderHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history.page */ 69500);




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPage
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ 56795:
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageModule": () => (/* binding */ OrderHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history-routing.module */ 70257);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page */ 69500);







let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPageRoutingModule
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryPage]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ 69500:
/*!***********************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPage": () => (/* binding */ OrderHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./order-history.page.html */ 77980);
/* harmony import */ var _order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page.scss */ 98116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ 90196);









let OrderHistoryPage = class OrderHistoryPage {
    constructor(requestServiceService, alertController, router, loadingController, storageService) {
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.currentOrders = 'ongoing';
        this.listOfHeadersPending = []; // Replace with your actual data array
        this.listOfHeadersCompleted = []; // Replace with your actual data array
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getSessionStorage();
        });
    }
    showOngoingOrders() {
        this.currentOrders = "ongoing";
    }
    showPastOrders() {
        this.currentOrders = "past";
    }
    getOrderHistoryPending(mobile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(mobile);
            const formData = new FormData();
            formData.append('mobileNumber', mobile);
            const loading = yield this.presentLoading(); // show loader
            try {
                const data = yield this.requestServiceService.postHttpCall("getOrderHistoryPending", formData).toPromise();
                if (data.status === 'SUCCESS') {
                    this.listOfHeadersPending = data.data;
                }
                else {
                    this.message = data.message;
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                if (loading) {
                    loading.dismiss(); // hide loader
                }
            }
        });
    }
    getOrderHistoryCompleted(mobile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(mobile);
            const formData = new FormData();
            formData.append('mobileNumber', mobile);
            const loading = yield this.presentLoading(); // show loader
            try {
                const data = yield this.requestServiceService.postHttpCall("getOrderHistoryCompleted", formData).toPromise();
                if (data.status === 'SUCCESS') {
                    this.listOfHeadersCompleted = data.data;
                }
                else {
                    this.message = data.message;
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                if (loading) {
                    loading.dismiss(); // hide loader
                }
            }
        });
    }
    getSessionStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storageService.get('mobileNo').then(result => {
                if (result != null) {
                    let separatedString = result.split('|');
                    this.mobileNo = separatedString[0];
                    this.getOrderHistoryCompleted(this.mobileNo);
                    this.getOrderHistoryPending(this.mobileNo);
                }
            }).catch(e => {
                console.log('error: ', e);
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                spinner: 'dots',
                translucent: true,
                backdropDismiss: false
            });
            yield loading.present();
            return loading;
        });
    }
    rowClicked(itemId) {
        const navigationExtras = {
            queryParams: {
                id: itemId
            }
        };
        this.router.navigate(['order-history'], navigationExtras);
    }
    doRefresh(event) {
        // Perform data fetching or processing here
        this.getSessionStorage();
        setTimeout(() => {
            // Any calls to load data go here
            event.target.complete();
        }, 2000);
    }
    ;
};
OrderHistoryPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
OrderHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-order-history',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderHistoryPage);



/***/ }),

/***/ 77980:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/order-history/order-history.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"main-content\" style=\"width: 100%;\">\n    <div class=\"switch-buttons\" style=\"width: 100%;\">\n      <button ion-button (click)=\"showOngoingOrders()\" style=\"width: 50%;height: 40px; font-weight: bold;\">Ongoing Orders</button>\n      <button ion-button (click)=\"showPastOrders()\" style=\"width: 50%;height: 40px;font-weight: bold;\">Past Orders</button>\n    </div>\n\n    <ion-row *ngIf=\"currentOrders === 'ongoing'\">\n      <div class=\"main-content\" *ngIf=\"listOfHeadersPending!=null\">\n        <div *ngFor=\"let item of listOfHeadersPending\" class=\"bookings\">\n          <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n            <ion-col size=\"4\">\n              <img src=\"{{item.frontEndBase64 }}\"/>\n            </ion-col>\n            <ion-col size=\"8\">\n              <table class=\"order-details-table\">\n                <tr>\n                  <td><b>Title:</b></td>\n                  <td>&nbsp;{{ item.title }}</td>\n                </tr>\n                <tr>\n                  <td><b>Order Id:</b></td>\n                  <td>&nbsp;{{ item.orderTrackingId }}</td>\n                </tr>\n                <tr>\n                  <td><b>Amount:</b></td>\n                  <td>&nbsp;<b>&#8377;</b>{{ item.totalAmount }}</td>\n                </tr>\n                <tr>\n                  <td><b>Quantity:</b></td>\n                  <td>&nbsp; {{ item.quantity }}</td>\n                </tr>\n                <tr *ngIf=\"item.status === 'pending'\">\n                  <td><b>Status:</b></td>\n                  <td>&nbsp;<b style=\"color: blue;\">Pending</b></td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" class=\"order-again-cell\">\n                  <!--  <button ion-button color=\"primary\" (click)=\"orderAgain(item)\">Order Again</button>\n                    -->\n                  </td>\n                </tr>\n              </table>\n            </ion-col>\n          </ion-row>   \n        </div>\n      </div>\n      <div class=\"main-content\" *ngIf=\"listOfHeadersPending === null || listOfHeadersPending.length === 0\">\n        <h5 style=\"position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\">No Orders Avaialble</h5>\n      </div>\n    </ion-row>\n\n    <ion-row *ngIf=\"currentOrders === 'past'\">\n      <div class=\"main-content\" *ngIf=\"listOfHeadersCompleted!=null\">\n        <div *ngFor=\"let item of listOfHeadersCompleted\" class=\"bookings\">\n          <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n            <ion-col size=\"4\">\n              <img src=\"{{item.frontEndBase64 }}\"/>\n            </ion-col>\n            <ion-col size=\"8\">\n              <table class=\"order-details-table\">\n                <tr>\n                  <td><b>Title:</b></td>\n                  <td>&nbsp;{{ item.title }}</td>\n                </tr>\n                <tr>\n                  <td><b>Order Id:</b></td>\n                  <td>&nbsp;{{ item.orderTrackingId }}</td>\n                </tr>\n                <tr>\n                  <td><b>Amount:</b></td>\n                  <td>&nbsp;<b>&#8377;</b>{{ item.totalAmount }}</td>\n                </tr>\n                <tr>\n                  <td><b>Quantity:</b></td>\n                  <td>&nbsp; {{ item.quantity }}</td>\n                </tr>\n                <tr *ngIf=\"item.status === 'completed'\">\n                  <td><b>Status:</b></td>\n                  <td>&nbsp;<b style=\"color: blue;\">Completed</b></td>\n                </tr>\n              </table>\n            </ion-col>\n          </ion-row>   \n        </div>\n      </div>\n      <div class=\"main-content\" *ngIf=\"listOfHeadersCompleted === null || listOfHeadersCompleted.length === 0\">\n        <h5 style=\"position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\">No Orders Avaialble</h5>\n      </div>\n    </ion-row>\n\n    <div class=\"main-content\" *ngIf=\"listOfHeadersPending === null || listOfHeadersPending.length === 0\">\n      {{ message }}\n    </div>\n\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ 98116:
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-spinner {\n  --ion-color-primary: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRiIsImZpbGUiOiJvcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVyIHtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiBibGFjaztcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_order-history_order-history_module_ts.js.map