"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_select-slot_select-slot_module_ts"],{

/***/ 69328:
/*!*****************************************************************!*\
  !*** ./src/app/pages/select-slot/select-slot-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectSlotPageRoutingModule": () => (/* binding */ SelectSlotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _select_slot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-slot.page */ 92056);

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
        component: _select_slot_page__WEBPACK_IMPORTED_MODULE_0__.SelectSlotPage
    }
];
let SelectSlotPageRoutingModule = class SelectSlotPageRoutingModule {
};
SelectSlotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectSlotPageRoutingModule);



/***/ }),

/***/ 87977:
/*!*********************************************************!*\
  !*** ./src/app/pages/select-slot/select-slot.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectSlotPageModule": () => (/* binding */ SelectSlotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _select_slot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-slot-routing.module */ 69328);
/* harmony import */ var _select_slot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-slot.page */ 92056);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let SelectSlotPageModule = class SelectSlotPageModule {
};
SelectSlotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_slot_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectSlotPageRoutingModule
        ],
        declarations: [_select_slot_page__WEBPACK_IMPORTED_MODULE_1__.SelectSlotPage]
    })
], SelectSlotPageModule);



/***/ }),

/***/ 92056:
/*!*******************************************************!*\
  !*** ./src/app/pages/select-slot/select-slot.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectSlotPage": () => (/* binding */ SelectSlotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_slot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-slot.page.html */ 78631);
/* harmony import */ var _select_slot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-slot.page.scss */ 77369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/




let SelectSlotPage = class SelectSlotPage {
    constructor(router, NavCtrl) {
        this.router = router;
        this.NavCtrl = NavCtrl;
        this.currentWeek = 0;
        this.days = [];
        setTimeout(() => {
            this.dateConfi();
        }, 1000);
    }
    ;
    dateConfi() {
        setTimeout(() => {
            this.dateslide.lockSwipes(true);
        }, 150);
        this.selectedDate = moment__WEBPACK_IMPORTED_MODULE_2__().format().split('T')[0];
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format().split('T')[0];
        this.days = [];
        this.initDate = moment__WEBPACK_IMPORTED_MODULE_2__().format();
        const startOfWeek = moment__WEBPACK_IMPORTED_MODULE_2__().startOf('week');
        const endOfWeek = moment__WEBPACK_IMPORTED_MODULE_2__().endOf('week');
        let day = startOfWeek;
        while (day <= endOfWeek) {
            const data = {
                date: day.toDate().getDate(),
                day: day.format('dd'),
                val: day.format(),
                selectDay: day.format('dddd DD MMMM')
            };
            this.days.push(data);
            day = day.clone().add(1, 'd');
        }
    }
    previousWeek() {
        if (this.currentWeek !== 0) {
            this.dateslide.update();
            this.days = [];
            this.currentWeek = this.currentWeek - 1;
            const startOfWeek = moment__WEBPACK_IMPORTED_MODULE_2__().add(this.currentWeek, 'weeks').startOf('week');
            const endOfWeek = moment__WEBPACK_IMPORTED_MODULE_2__().add(this.currentWeek, 'weeks').endOf('week');
            let day = startOfWeek;
            while (day <= endOfWeek) {
                const data = {
                    date: day.toDate().getDate(),
                    day: day.format('ddd'),
                    val: day.format(),
                    selectDay: day.format('dddd DD MMMM')
                };
                this.days.push(data);
                day = day.clone().add(1, 'd');
            }
            console.log(this.days);
        }
    }
    selectDate(date) {
        console.log(date);
        if (this.currentDate <= date.val.split('T')[0]) {
            this.selectedDate = date.val.split('T')[0];
            console.log(this.selectedDate);
        }
    }
    nextWeek() {
        this.dateslide.update();
        this.days = [];
        this.currentWeek++;
        console.log(this.currentWeek);
        const startOfWeek = moment__WEBPACK_IMPORTED_MODULE_2__().add(this.currentWeek, 'weeks').startOf('week');
        const endOfWeek = moment__WEBPACK_IMPORTED_MODULE_2__().add(this.currentWeek, 'weeks').endOf('week');
        let day = startOfWeek;
        while (day <= endOfWeek) {
            const data = {
                date: day.toDate().getDate(),
                day: day.format('ddd'),
                val: day.format(),
                selectDay: day.format('dddd DD MMMM')
            };
            this.days.push(data);
            day = day.clone().add(1, 'd');
        }
        console.log(this.days);
    }
    ngOnInit() {
    }
    goToBack() {
        this.NavCtrl.back();
    }
    goToPick() {
        this.router.navigate(['pick-stylist']);
    }
};
SelectSlotPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
SelectSlotPage.propDecorators = {
    dateslide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['slideDate',] }]
};
SelectSlotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-select-slot',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_slot_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_slot_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectSlotPage);



/***/ }),

/***/ 78631:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/select-slot/select-slot.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select your Slot</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"calendar-clear-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main-content\">\n\n\n\n    <div class=\"calender\">\n      <div class=\"month\">\n        <ion-row>\n          <ion-col size=\"1\" (click)=\"previousWeek()\">\n            <ion-icon name=\"chevron-back-outline\">\n            </ion-icon>\n          </ion-col>\n\n          <ion-label>December, 2021</ion-label>\n\n          <ion-col size=\"1\">\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"select-date\">\n        <ion-slides #slideDate>\n          <ion-slide>\n            <ion-row class=\"row_cal\">\n              <ion-col size=\"0.75\" (click)=\"previousWeek()\">\n                <ion-icon name=\"chevron-back-outline\" *ngIf=\"currentWeek != 0\">\n                </ion-icon>\n              </ion-col>\n              <ion-col *ngFor=\"let day of days\" [class.disabled]=\"initDate.split('T')[0] > day.val.split('T')\"\n                size=\"1.5\" (click)=\"selectDate(day)\">\n                <ion-label class=\"lbl_day\" [class.selectedDay]=\"day.val.split('T')[0] == selectedDate\">{{ day.day }}\n                  <ion-label class=\"lbl_date\" [class.selectedDate]=\"day.val.split('T')[0] == selectedDate\">{{ day.date\n                    }}\n                  </ion-label>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"0.75\" (click)=\"nextWeek()\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n\n    <div class=\"slot-name\">\n      <ion-label>Morning Slot</ion-label>\n    </div>\n    <div class=\"slot\">\n      <ion-chip *ngFor=\"let item of [1,2,3,4,5,6,7,8]\">\n        <ion-label>09.00 AM</ion-label>\n      </ion-chip>\n    </div>\n\n    <div class=\"slot-name\">\n      <ion-label>Afternoo Slot</ion-label>\n    </div>\n    <div class=\"slot\">\n      <ion-chip *ngFor=\"let item of [1,2,3,4,5,6,7,8]\">\n        <ion-label>09.00 AM</ion-label>\n      </ion-chip>\n    </div>\n\n    <div class=\"slot-name\">\n      <ion-label>Evening Slot</ion-label>\n    </div>\n    <div class=\"slot\">\n      <ion-chip *ngFor=\"let item of [1,2,3,4,5,6,7,8]\">\n        <ion-label>09.00 AM</ion-label>\n      </ion-chip>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer\">\n    <ion-button class=\"btn\" (click)=\"goToPick()\" expand=\"block\">\n      Check Available Stylist\n    </ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 77369:
/*!*********************************************************!*\
  !*** ./src/app/pages/select-slot/select-slot.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\nion-content .main-content .calender .month {\n  padding-top: 20px;\n}\nion-content .main-content .calender .month ion-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .main-content .calender .month ion-row ion-label {\n  font-size: 18px;\n  font-weight: 600;\n  padding: 0px 20px;\n}\nion-content .main-content .calender .select-date {\n  text-align: center;\n  border-radius: 10px;\n  padding: 0px 20px 10px 10px;\n}\nion-content .main-content .calender .select-date .row_cal {\n  margin-top: 15px;\n  width: 100%;\n  padding-bottom: 10px;\n}\nion-content .main-content .calender .select-date ion-icon {\n  margin-top: 30px;\n}\nion-content .main-content .calender .select-date .disabled {\n  color: #ababab !important;\n}\nion-content .main-content .calender .select-date .lbl_day {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 13px;\n  padding-top: 10px;\n}\nion-content .main-content .calender .select-date .lbl_date {\n  display: block;\n  position: relative;\n  z-index: 1;\n  font-size: 14px;\n  padding: 30px 5px 10px 5px;\n}\nion-content .main-content .calender .select-date .selectedDay {\n  background: var(--ion-color-primary);\n  color: white;\n  border-radius: 10px;\n  font-weight: bold;\n}\nion-content .main-content .slot-name {\n  padding: 10px 15px;\n  font-weight: 600;\n  font-size: 18px;\n}\nion-content .main-content .slot {\n  padding: 5px 14px;\n}\nion-content .main-content .slot ion-chip {\n  background-color: white;\n  border: 2px solid lightgray;\n  border-radius: 8px;\n  padding: 5px 8px;\n  font-weight: 500;\n  font-size: 13px;\n}\nion-footer {\n  padding: 15px 20px;\n}\nion-footer .footer .btn {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1zbG90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQTtBQWFNO0VBQ0UsaUJBQUE7QUFIUjtBQUlRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGVjtBQUdVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUtNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBSFI7QUFLUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBSFY7QUFLUTtFQUNFLGdCQUFBO0FBSFY7QUFNUTtFQUNFLHlCQUFBO0FBSlY7QUFNUTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpWO0FBTVE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBSlY7QUFPUTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFMVjtBQVNJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQTjtBQVVJO0VBQ0UsaUJBQUE7QUFSTjtBQVNNO0VBRUUsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFSUjtBQWNBO0VBQ0Usa0JBQUE7QUFYRjtBQWFJO0VBQ0UsV0FBQTtBQVhOIiwiZmlsZSI6InNlbGVjdC1zbG90LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuY2FsZW5kZXIgLm1vbnRoIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5jYWxlbmRlciAubW9udGggaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuY2FsZW5kZXIgLm1vbnRoIGlvbi1yb3cgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmNhbGVuZGVyIC5zZWxlY3QtZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDIwcHggMTBweCAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuY2FsZW5kZXIgLnNlbGVjdC1kYXRlIC5yb3dfY2FsIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuY2FsZW5kZXIgLnNlbGVjdC1kYXRlIGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmNhbGVuZGVyIC5zZWxlY3QtZGF0ZSAuZGlzYWJsZWQge1xuICBjb2xvcjogI2FiYWJhYiAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGVudCAuY2FsZW5kZXIgLnNlbGVjdC1kYXRlIC5sYmxfZGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5jYWxlbmRlciAuc2VsZWN0LWRhdGUgLmxibF9kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzMHB4IDVweCAxMHB4IDVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLmNhbGVuZGVyIC5zZWxlY3QtZGF0ZSAuc2VsZWN0ZWREYXkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAubWFpbi1jb250ZW50IC5zbG90LW5hbWUge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnNsb3Qge1xuICBwYWRkaW5nOiA1cHggMTRweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRlbnQgLnNsb3QgaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cbmlvbi1mb290ZXIgLmZvb3RlciAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_select-slot_select-slot_module_ts.js.map