(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);

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
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 27926)).then(m => m.TabsPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 27926)).then(m => m.TabsPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome/welcome.module */ 87785)).then(m => m.WelcomePageModule)
    },
    {
        path: 'login-phone',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-phone_login-phone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-phone/login-phone.module */ 12220)).then(m => m.LoginPhonePageModule)
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_verification_verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/verification/verification.module */ 44725)).then(m => m.VerificationPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 35129)).then(m => m.HomePageModule)
    },
    {
        path: 'mens',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mens_mens_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mens/mens.module */ 26798)).then(m => m.MensPageModule)
    },
    {
        path: 'select-slot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_select-slot_select-slot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/select-slot/select-slot.module */ 87977)).then(m => m.SelectSlotPageModule)
    },
    {
        path: 'pick-stylist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pick-stylist_pick-stylist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pick-stylist/pick-stylist.module */ 28115)).then(m => m.PickStylistPageModule)
    },
    {
        path: 'stylist-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_stylist-info_stylist-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/stylist-info/stylist-info.module */ 21889)).then(m => m.StylistInfoPageModule)
    },
    {
        path: 'checklist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_checklist_checklist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checklist/checklist.module */ 99851)).then(m => m.ChecklistPageModule)
    },
    {
        path: 'service-location',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_service-location_service-location_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/service-location/service-location.module */ 63489)).then(m => m.ServiceLocationPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 57344)).then(m => m.PaymentPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome/welcome.module */ 87785)).then(m => m.WelcomePageModule)
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/history/history.module */ 15635)).then(m => m.HistoryPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 59029)).then(m => m.ProfilePageModule)
    },
    {
        path: 'add-beautician',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-beautician_add-beautician_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-beautician/add-beautician.module */ 98409)).then(m => m.AddBeauticianPageModule)
    },
    {
        path: 'add-header',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-header_add-header_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-header/add-header.module */ 84683)).then(m => m.AddHeaderPageModule)
    },
    {
        path: 'header-images-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_header-images-list_header-images-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/header-images-list/header-images-list.module */ 51133)).then(m => m.HeaderImagesListPageModule)
    },
    {
        path: 'header-images-edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_header-images-edit_header-images-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/header-images-edit/header-images-edit.module */ 95942)).then(m => m.HeaderImagesEditPageModule)
    },
    {
        path: 'add-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-category_add-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-category/add-category.module */ 13711)).then(m => m.AddCategoryPageModule)
    },
    {
        path: 'list-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_list-category_list-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/list-category/list-category.module */ 51191)).then(m => m.ListCategoryPageModule)
    },
    {
        path: 'list-category-edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_list-category-edit_list-category-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/list-category-edit/list-category-edit.module */ 18148)).then(m => m.ListCategoryEditPageModule)
    },
    {
        path: 'add-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-product_add-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-product/add-product.module */ 4505)).then(m => m.AddProductPageModule)
    },
    {
        path: 'list-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_list-product_list-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/list-product/list-product.module */ 14352)).then(m => m.ListProductPageModule)
    },
    {
        path: 'edit-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_edit-product_edit-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/edit-product/edit-product.module */ 63504)).then(m => m.EditProductPageModule)
    },
    {
        path: 'add-employee',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-employee_add-employee_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-employee/add-employee.module */ 67282)).then(m => m.AddEmployeePageModule)
    },
    {
        path: 'list-employee',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_list-employee_list-employee_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/list-employee/list-employee.module */ 20725)).then(m => m.ListEmployeePageModule)
    },
    {
        path: 'edit-employee',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_edit-employee_edit-employee_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/edit-employee/edit-employee.module */ 12868)).then(m => m.EditEmployeePageModule)
    },
    {
        path: 'order-status',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_order-status_order-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/order-status/order-status.module */ 46018)).then(m => m.OrderStatusPageModule)
    },
    {
        path: 'order-edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_order-edit_order-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/order-edit/order-edit.module */ 77146)).then(m => m.OrderEditPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 69751)).then(m => m.RegisterPageModule)
    },
    {
        path: 'view-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_view-product_view-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/view-product/view-product.module */ 95991)).then(m => m.ViewProductPageModule)
    },
    {
        path: 'cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cart/cart.module */ 7399)).then(m => m.CartPageModule)
    },
    {
        path: 'checkout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_checkout_checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/checkout.module */ 885)).then(m => m.CheckoutPageModule)
    },
    {
        path: 'order-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_order-history_order-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/order-history/order-history.module */ 56795)).then(m => m.OrderHistoryPageModule)
    },
    {
        path: 'profile-edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile-edit_profile-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile-edit/profile-edit.module */ 72110)).then(m => m.ProfileEditPageModule)
    },
    {
        path: 'home2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home2_home2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home2/home2.module */ 80002)).then(m => m.Home2PageModule)
    },
    {
        path: 'share-earn',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_share-earn_share-earn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/share-earn/share-earn.module */ 89394)).then(m => m.ShareEarnPageModule)
    },
    {
        path: 'coupon-code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_coupon-code_coupon-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/coupon-code/coupon-code.module */ 96892)).then(m => m.CouponCodePageModule)
    },
    {
        path: 'add-location-address',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-location-address_add-location-address_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-location-address/add-location-address.module */ 71623)).then(m => m.AddLocationAddressPageModule)
    },
    {
        path: 'category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_category_category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/category/category.module */ 31998)).then(m => m.CategoryPageModule)
    },
    {
        path: 'product-listing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product-listing_product-listing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product-listing/product-listing.module */ 21377)).then(m => m.ProductListingPageModule)
    },
    {
        path: 'gift-vouchers',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_gift-vouchers_gift-vouchers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/gift-vouchers/gift-vouchers.module */ 77797)).then(m => m.GiftVouchersPageModule)
    },
    {
        path: 'membership',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_membership_membership_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/membership/membership.module */ 72304)).then(m => m.MembershipPageModule)
    },
    {
        path: 'membership-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_membership-details_membership-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/membership-details/membership-details.module */ 35117)).then(m => m.MembershipDetailsPageModule)
    },
    {
        path: 'product-brand-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product-brand-details_product-brand-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product-brand-details/product-brand-details.module */ 87519)).then(m => m.ProductBrandDetailsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././app/storage.service */ 90196);
/* harmony import */ var _src_app_services_request_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/services/request-service.service */ 58988);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/






let AppComponent = class AppComponent {
    constructor(navCtrl, router, storageService, requestServiceService, alertController) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.storageService = storageService;
        this.requestServiceService = requestServiceService;
        this.alertController = alertController;
        this.formData = {
            phoneNo: ''
        };
        this.Pages = [
            {
                title: 'Home',
                url: 'home',
                icon: 'home'
            },
            {
                title: 'My Profile',
                url: '/profile-edit',
                icon: 'person'
            },
            {
                title: 'Offers & Deals',
                url: '/coupon-code',
                icon: 'pricetags'
            },
            {
                title: 'Gift Vouchers',
                url: '/gift-vouchers',
                icon: 'gift'
            },
            {
                title: 'My Orders',
                url: '/order-history',
                icon: 'calendar'
            },
            {
                title: 'Share & Earn',
                url: '/share-earn',
                icon: 'share'
            },
            {
                title: 'Membership',
                url: '/membership',
                icon: 'cash'
            },
            {
                title: 'Logout',
                url: 'login-phone',
                icon: 'log-out'
            }
        ];
    }
    ngOnInit() {
        this.getSessionStorage();
    }
    logout() {
        this.storageService.clear();
        localStorage.clear();
        this.navCtrl.navigateRoot(['/welcome']);
    }
    getSessionStorage() {
        this.storageService.get('mobileNo').then(result => {
            if (result != null) {
                console.log('Storage mobileNo & Pin: ' + result);
                let separatedString = result.split('|');
                let phoneNo = separatedString[0];
                this.formData.phoneNo = phoneNo;
                this.requestServiceService.postHttpCall("getDataByMobileNo", this.formData).subscribe((data) => {
                    console.log(data);
                    this.fullName = data.data.firstName + " " + data.data.lastName;
                    this.emailId = data.data.emailId;
                    this.mobileNo = data.data.phoneNo;
                    this.img = data.data.image;
                });
            }
        }).catch(e => {
            console.log('error: ', e);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _app_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _src_app_services_request_service_service__WEBPACK_IMPORTED_MODULE_3__.RequestServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3242);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 31184);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 5010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _app_city_select_component_city_select_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/city-select-component/city-select-component.component */ 90580);
/* harmony import */ var _pages_add_location_address_add_location_address_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/add-location-address/add-location-address-routing.module */ 36467);
/* harmony import */ var _pages_add_location_address_add_location_address_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/add-location-address/add-location-address.page */ 77098);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_city_select_component_city_select_component_component__WEBPACK_IMPORTED_MODULE_5__.CitySelectComponentComponent, _pages_add_location_address_add_location_address_page__WEBPACK_IMPORTED_MODULE_7__.AddLocationAddressPage],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__.IonicStorageModule.forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _pages_add_location_address_add_location_address_routing_module__WEBPACK_IMPORTED_MODULE_6__.AddLocationAddressPageRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 90580:
/*!**************************************************************************!*\
  !*** ./src/app/city-select-component/city-select-component.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitySelectComponentComponent": () => (/* binding */ CitySelectComponentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_city_select_component_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./city-select-component.component.html */ 32794);
/* harmony import */ var _city_select_component_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-select-component.component.scss */ 83195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ 90196);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);







let CitySelectComponentComponent = class CitySelectComponentComponent {
    constructor(modalController, storageService, router) {
        this.modalController = modalController;
        this.storageService = storageService;
        this.router = router;
        this.storageService.get("defaultAddress").then(result => {
            if (result != null) {
                this.defaultAddress = result;
            }
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
    selectCity(city) {
        this.modalController.dismiss(city);
    }
    addAddress() {
        //this.router.navigate(['add-location-address']);
        this.modalController.dismiss('addLocation');
    }
};
CitySelectComponentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CitySelectComponentComponent.propDecorators = {
    cities: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CitySelectComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-city-select-component',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_city_select_component_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_city_select_component_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CitySelectComponentComponent);



/***/ }),

/***/ 36467:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/add-location-address/add-location-address-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLocationAddressPageRoutingModule": () => (/* binding */ AddLocationAddressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_location_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-location-address.page */ 77098);




const routes = [
    {
        path: '',
        component: _add_location_address_page__WEBPACK_IMPORTED_MODULE_0__.AddLocationAddressPage
    }
];
let AddLocationAddressPageRoutingModule = class AddLocationAddressPageRoutingModule {
};
AddLocationAddressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddLocationAddressPageRoutingModule);



/***/ }),

/***/ 77098:
/*!*************************************************************************!*\
  !*** ./src/app/pages/add-location-address/add-location-address.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLocationAddressPage": () => (/* binding */ AddLocationAddressPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_location_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-location-address.page.html */ 39691);
/* harmony import */ var _add_location_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-location-address.page.scss */ 36290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 31184);
/* harmony import */ var _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request-service.service */ 58988);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ 90196);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);









let AddLocationAddressPage = class AddLocationAddressPage {
    constructor(requestServiceService, geolocation, storageService, alertController, navCtrl) {
        this.requestServiceService = requestServiceService;
        this.geolocation = geolocation;
        this.storageService = storageService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.formDataMobile = {
            phoneNo: '',
            userName: '',
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            address: '',
            gender: '',
            userId: ''
        };
        this.formData = {
            lat: '',
            lon: ''
        };
    }
    ngOnInit() {
        this.getSessionStorage();
    }
    getSessionStorage() {
        this.storageService.get('mobileNo').then(result => {
            if (result != null) {
                console.log('Storage mobileNo & Pin: ' + result);
                let separatedString = result.split('|');
                this.mobileNo = separatedString[0];
                this.formDataMobile.phoneNo = this.mobileNo;
                this.getMobileData();
            }
        }).catch(e => {
            console.log('error: ', e);
        });
    }
    getMobileData() {
        this.requestServiceService.postHttpCall("validateLoginUser", this.formDataMobile).subscribe((data) => {
            if (data.status === 'SUCCESS') {
                console.log(data);
                this.formDataMobile.firstName = data.data.firstName;
                this.formDataMobile.lastName = data.data.lastName;
                this.formDataMobile.address = data.data.address;
                this.formDataMobile.emailId = data.data.emailId;
                this.formDataMobile.gender = data.data.gender;
                this.formDataMobile.phoneNo = data.data.phoneNo;
                this.formDataMobile.userName = data.data.userName;
                this.formDataMobile.userId = data.data.id;
            }
            else {
                console.log(data);
                this.message = data.message;
            }
        });
    }
    getCurrentLocation() {
        if ("geolocation" in navigator) {
            // get current position
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                //alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
                const formData = new FormData();
                formData.append('lat', latitude.toString());
                formData.append('lon', longitude.toString());
                this.requestServiceService.postHttpCall("getLocation", formData).
                    subscribe((data) => {
                    //console.log(data);
                    //alert(data);
                    // Do something with the data here
                    this.streetAddress = data.data.suburb;
                    this.city = data.data.city;
                    this.state = data.data.state;
                    this.zipCode = data.data.postcode;
                    //this.addressFromCoords = data.data;
                });
            }, (error) => {
                console.error(error.message);
            }, { enableHighAccuracy: true });
        }
        else {
            console.error("Geolocation is not supported by this browser.");
        }
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('flatApartment', this.flatApartment);
        formData.append('streetAddress', this.streetAddress);
        formData.append('city', this.city);
        formData.append('state', this.state);
        formData.append('zipCode', this.zipCode);
        formData.append('userId', this.formDataMobile.userId);
        this.requestServiceService.postHttpCall("AddLocationAddress", formData).
            subscribe((data) => {
            console.log(data);
            if (data.status === 'SUCCESS') {
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('tabs/tab1');
            }
            else {
                console.log(data);
                this.presentAlert(data.status, data.message);
                this.goToOtherPage('add-location-address');
            }
        });
    }
    presentAlert(status, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
AddLocationAddressPage.ctorParameters = () => [
    { type: _services_request_service_service__WEBPACK_IMPORTED_MODULE_3__.RequestServiceService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
AddLocationAddressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-location-address',
        template: _D_projects_salon_user_user_app_salon_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_location_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_location_address_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddLocationAddressPage);



/***/ }),

/***/ 58988:
/*!*****************************************************!*\
  !*** ./src/app/services/request-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestServiceService": () => (/* binding */ RequestServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 18260);




let RequestServiceService = class RequestServiceService {
    constructor(http) {
        this.http = http;
    }
    postHttpCall(url, body) {
        console.log("Calling URL = " + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + url);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + url, body);
    }
    getHttpCall(url) {
        console.log("Calling URL = " + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + url);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + url);
    }
};
RequestServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RequestServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RequestServiceService);



/***/ }),

/***/ 90196:
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        console.log('Your storage provider is working here !');
        this.createDatabase();
    }
    createDatabase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
    // set a key/value
    set(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.set(key, value);
                console.log('set string in storage: ' + result);
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    // to get a key/value pair
    get(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(key);
                console.log('storageGET: ' + key + ': ' + result);
                if (result != null) {
                    return result;
                }
                return null;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    // set a key/value object
    setObject(key, object) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.set(key, JSON.stringify(object));
                console.log('set Object in storage: ' + result);
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    // get a key/value object
    getObject(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(key);
                if (result != null) {
                    return JSON.parse(result);
                }
                return null;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    // remove a single key value:
    remove(key) {
        this.storage.remove(key);
    }
    //  delete all data from your application:
    clear() {
        this.storage.clear();
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://103.163.204.206:8080/pilotTest/'
    //baseUrl: 'http://localhost:8080/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);
/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <div class=\"user-details\">\n            <img src=\"../assets/user.png\" width=\"40px\" height=\"40px\" class=\"user-image\" />\n            <h6 style=\"margin-top: 30px;\">{{fullName}}<br>{{mobileNo}}</h6>\n          </div>\n          <br>\n          <br>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let pages of Pages; let i = index\" >\n            <ion-item (click)=\"activeIndex = i\" routerDirection=\"root\" [routerLink]=\"[pages.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"activeIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"pages.icon + '-outline'\" [md]=\"pages.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ pages.title }}</ion-label>\n            </ion-item>\n            <hr>\n\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n  <!--<ion-router-outlet></ion-router-outlet>-->\n</ion-app>\n");

/***/ }),

/***/ 32794:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/city-select-component/city-select-component.component.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>\n      Select a Address\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addAddress()\">ADD</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-list>\n      <ion-item *ngFor=\"let city of cities\" style=\"width: 100%;\">\n        <ion-card style=\"width: 100%;\">\n          <ion-card-content>\n            {{ city.name }}\n          </ion-card-content>\n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" (click)=\"selectCity(city)\"\n              [checked]=\"defaultAddress === city.name\"></ion-checkbox>\n            <ion-label>Set As Default</ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-item>\n\n\n    </ion-list>\n\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 39691:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-location-address/add-location-address.page.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Location / Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"onSubmit()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Flat No / Plot No House / Aparment Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"flatApartment\" name=\"flatApartment\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Street Address</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"streetAddress\" name=\"streetAddress\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">City</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"city\" name=\"city\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">State</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"state\" name=\"state\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Zip Code</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"zipCode\" name=\"zipCode\"></ion-input>\n      </ion-item>\n      \n      <div class=\"d-grid gap-2\">\n        <button type=\"submit\" class=\"btn btn-primary btn-lg\">Submit</button>\n      </div>\n    </ion-list>\n  </form>\n\n  \n</ion-content>\n<ion-footer>\n  <div class=\"d-grid gap-2\">\n    <button type=\"submit\" class=\"btn btn-primary btn-lg\" (click)=\"getCurrentLocation()\">Get Current Location</button>\n  </div>\n</ion-footer>");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ".user-details {\n  display: -webkit-box;\n  align-items: center;\n}\n\n.user-details .user-image {\n  margin-right: 10px;\n  margin-top: 30px;\n  margin-left: 30px;\n}\n\n.mobileNo-container {\n  margin-right: 10px;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDRSxpQkFBQTtBQUNKOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWRldGFpbHMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXItZGV0YWlscyAudXNlci1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLm1vYmlsZU5vLWNvbnRhaW5lciB7XG4gIC8vd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */";

/***/ }),

/***/ 83195:
/*!****************************************************************************!*\
  !*** ./src/app/city-select-component/city-select-component.component.scss ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXR5LXNlbGVjdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 36290:
/*!***************************************************************************!*\
  !*** ./src/app/pages/add-location-address/add-location-address.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbG9jYXRpb24tYWRkcmVzcy5wYWdlLnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map