/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login-phone',
    loadChildren: () => import('./pages/login-phone/login-phone.module').then(m => m.LoginPhonePageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mens',
    loadChildren: () => import('./pages/mens/mens.module').then(m => m.MensPageModule)
  },
  {
    path: 'select-slot',
    loadChildren: () => import('./pages/select-slot/select-slot.module').then(m => m.SelectSlotPageModule)
  },
  {
    path: 'pick-stylist',
    loadChildren: () => import('./pages/pick-stylist/pick-stylist.module').then(m => m.PickStylistPageModule)
  },
  {
    path: 'stylist-info',
    loadChildren: () => import('./pages/stylist-info/stylist-info.module').then(m => m.StylistInfoPageModule)
  },
  {
    path: 'checklist',
    loadChildren: () => import('./pages/checklist/checklist.module').then(m => m.ChecklistPageModule)
  },
  {
    path: 'service-location',
    loadChildren: () => import('./pages/service-location/service-location.module').then(m => m.ServiceLocationPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'add-beautician',
    loadChildren: () => import('./pages/add-beautician/add-beautician.module').then( m => m.AddBeauticianPageModule)
  },
  {
    path: 'add-header',
    loadChildren: () => import('./pages/add-header/add-header.module').then( m => m.AddHeaderPageModule)
  },
  {
    path: 'header-images-list',
    loadChildren: () => import('./pages/header-images-list/header-images-list.module').then( m => m.HeaderImagesListPageModule)
  },
  {
    path: 'header-images-edit',
    loadChildren: () => import('./pages/header-images-edit/header-images-edit.module').then( m => m.HeaderImagesEditPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./pages/add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'list-category',
    loadChildren: () => import('./pages/list-category/list-category.module').then( m => m.ListCategoryPageModule)
  },
  {
    path: 'list-category-edit',
    loadChildren: () => import('./pages/list-category-edit/list-category-edit.module').then( m => m.ListCategoryEditPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'list-product',
    loadChildren: () => import('./pages/list-product/list-product.module').then( m => m.ListProductPageModule)
  },
  {
    path: 'edit-product',
    loadChildren: () => import('./pages/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./pages/add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  {
    path: 'list-employee',
    loadChildren: () => import('./pages/list-employee/list-employee.module').then( m => m.ListEmployeePageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./pages/edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'order-status',
    loadChildren: () => import('./pages/order-status/order-status.module').then( m => m.OrderStatusPageModule)
  },
  {
    path: 'order-edit',
    loadChildren: () => import('./pages/order-edit/order-edit.module').then( m => m.OrderEditPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'view-product',
    loadChildren: () => import('./pages/view-product/view-product.module').then( m => m.ViewProductPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./pages/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'share-earn',
    loadChildren: () => import('./pages/share-earn/share-earn.module').then( m => m.ShareEarnPageModule)
  },
  {
    path: 'coupon-code',
    loadChildren: () => import('./pages/coupon-code/coupon-code.module').then( m => m.CouponCodePageModule)
  },
  {
    path: 'add-location-address',
    loadChildren: () => import('./pages/add-location-address/add-location-address.module').then( m => m.AddLocationAddressPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'product-listing',
    loadChildren: () => import('./pages/product-listing/product-listing.module').then( m => m.ProductListingPageModule)
  },
  {
    path: 'gift-vouchers',
    loadChildren: () => import('./pages/gift-vouchers/gift-vouchers.module').then( m => m.GiftVouchersPageModule)
  },
  {
    path: 'membership',
    loadChildren: () => import('./pages/membership/membership.module').then( m => m.MembershipPageModule)
  },
  {
    path: 'membership-details',
    loadChildren: () => import('./pages/membership-details/membership-details.module').then( m => m.MembershipDetailsPageModule)
  },
  {
    path: 'product-brand-details',
    loadChildren: () => import('./pages/product-brand-details/product-brand-details.module').then( m => m.ProductBrandDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
