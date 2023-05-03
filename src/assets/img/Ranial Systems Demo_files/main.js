"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var _show_credential_show_credential_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-credential/show-credential.component */ 28897);
/* harmony import */ var _views_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/pages/page404/page404.component */ 20778);
/* harmony import */ var _views_pages_page500_page500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/page500/page500.component */ 5000);
/* harmony import */ var _views_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/pages/login/login.component */ 10765);
/* harmony import */ var _views_pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/pages/register/register.component */ 2694);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.service */ 50384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: _containers__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent,
  data: {
    title: 'Home'
  },
  // canActivate: [RootAuthGuard],
  // TODO:  Implement Roles for each route
  // canActivateChild: [AuthGuard],
  children: [{
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("default-node_modules_coreui_angular-chartjs_fesm2020_coreui-angular-chartjs_mjs"), __webpack_require__.e("default-src_app_views_widgets_widgets_module_ts"), __webpack_require__.e("src_app_views_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard.module */ 54727)).then(m => m.DashboardModule)
  }, {
    path: 'ops',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_opscontrol_opscontrol_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/opscontrol/opscontrol.module */ 91254)).then(m => m.OpsModule)
  }, {
    path: 'theme',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_theme_theme_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/theme/theme.module */ 56318)).then(m => m.ThemeModule)
  }, {
    path: 'base',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("src_app_views_base_base_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/base.module */ 5433)).then(m => m.BaseModule)
  }, {
    path: 'buttons',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("src_app_views_buttons_buttons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/buttons/buttons.module */ 62583)).then(m => m.ButtonsModule)
  }, {
    path: 'forms',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("src_app_views_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/forms/forms.module */ 43929)).then(m => m.CoreUIFormsModule)
  }, {
    path: 'charts',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("default-node_modules_coreui_angular-chartjs_fesm2020_coreui-angular-chartjs_mjs"), __webpack_require__.e("src_app_views_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/charts/charts.module */ 12669)).then(m => m.ChartsModule)
  }, {
    path: 'icons',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("src_app_views_icons_icons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/icons/icons.module */ 73150)).then(m => m.IconsModule)
  }, {
    path: 'notifications',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("src_app_views_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/notifications/notifications.module */ 9181)).then(m => m.NotificationsModule)
  }, {
    path: 'widgets',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_docs-components_module_ts"), __webpack_require__.e("default-node_modules_coreui_angular-chartjs_fesm2020_coreui-angular-chartjs_mjs"), __webpack_require__.e("default-src_app_views_widgets_widgets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/widgets/widgets.module */ 88790)).then(m => m.WidgetsModule)
  }, {
    path: 'pages',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/pages/pages.module */ 21244)).then(m => m.PagesModule)
  }]
}, {
  path: '404',
  component: _views_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component,
  data: {
    title: 'Page 404'
  }
}, {
  path: '500',
  component: _views_pages_page500_page500_component__WEBPACK_IMPORTED_MODULE_3__.Page500Component,
  data: {
    title: 'Page 500'
  }
}, {
  path: 'login',
  component: _views_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
  data: {
    title: 'Login Page'
  }
}, {
  path: 'show-credentials',
  component: _show_credential_show_credential_component__WEBPACK_IMPORTED_MODULE_1__.ShowCredentialComponent,
  data: {
    title: 'Credentials'
  }
}, {
  path: 'register',
  component: _views_pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent,
  data: {
    title: 'Register Page'
  }
}, {
  path: '**',
  redirectTo: 'dashboard'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
    // relativeLinkResolution: 'legacy'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _icons_icon_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/icon-subset */ 11783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ 26232);






class AppComponent {
  constructor(router, titleService, iconSetService) {
    this.router = router;
    this.titleService = titleService;
    this.iconSetService = iconSetService;
    this.title = 'Ranial Systems Demo';
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = {
      ..._icons_icon_subset__WEBPACK_IMPORTED_MODULE_0__.iconSubset
    };
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
        return;
      }
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__.IconSetService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons-angular */ 26232);
/* harmony import */ var _views_opscontrol_opscontrol_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/opscontrol/opscontrol.component */ 38577);
/* harmony import */ var _show_credential_show_credential_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-credential/show-credential.component */ 28897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);





// Import routing module

// Import app component

// Import containers






//Removes horizontal scrollbars
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true
};
const APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_2__.DefaultFooterComponent, _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaderComponent, _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent];
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy
  }, {
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__.IconSetService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AvatarModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.FooterModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.DropdownModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.GridModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.HeaderModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.SidebarModule, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__.IconModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.NavModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.FormModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.UtilitiesModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ButtonGroupModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.SidebarModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.TabsModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ListGroupModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ProgressModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.BadgeModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ListGroupModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultFooterComponent, _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaderComponent, _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent, _views_opscontrol_opscontrol_component__WEBPACK_IMPORTED_MODULE_3__.OpscontrolComponent, _show_credential_show_credential_component__WEBPACK_IMPORTED_MODULE_4__.ShowCredentialComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AvatarModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.FooterModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.DropdownModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.GridModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.HeaderModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.SidebarModule, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__.IconModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.NavModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.FormModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.UtilitiesModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ButtonGroupModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.SidebarModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.TabsModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ListGroupModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ProgressModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.BadgeModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.ListGroupModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
  });
})();

/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 50384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivateChild(route, state) {
    console.log('Auth Guard called');
    //Check if the user is logged in via the service
    let isLoggedin = this.authService.isAuthenticated();
    if (isLoggedin) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 50384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

//Demo purposed
class AuthService {
  constructor() {
    //Demo user
    this.user = {
      id: 1,
      username: 'admin',
      password: 'admin',
      role: 'admin'
    };
    this.isLoggedIn = false;
  }
  //Authenticate user
  auth(ingest_user) {
    console.log('Credentials', ingest_user);
    if (this.checkCred(this.user, ingest_user)) {
      this.isLoggedIn = true;
      console.log('Log In status', this.isLoggedIn);
    } else {
      this.isLoggedIn = false;
      console.log('Log In status', this.isLoggedIn);
    }
  }
  //Verifies against assets/users.json for the user. Retuens false if user does not exist
  isAuthenticated() {
    return this.isLoggedIn;
  }
  checkCred(auth_server, user_data) {
    return this.user.username === user_data.username && this.user.password == user_data.password;
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)();
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 18739:
/*!***************************************************!*\
  !*** ./src/app/containers/default-layout/_nav.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItems": () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [{
  name: 'Dashboard',
  url: '/dashboard',
  iconComponent: {
    name: 'cil-speedometer'
  },
  badge: {
    color: 'info',
    text: ''
  }
}, {
  name: 'Operations & Control',
  url: '/ops',
  iconComponent: {
    name: 'cilPuzzle'
  },
  badge: {
    color: 'info',
    text: ''
  },
  children: [{
    name: 'Engineering',
    url: '/ops/engineering'
  }, {
    name: 'Supply Chain Mgmnt',
    url: '/ops/supply-chain-management'
  }, {
    name: 'Sales & Marketing',
    url: '/ops/sales-marketing'
  }, {
    name: 'Admin',
    url: '/ops/admin'
  }, {
    name: 'Finance',
    url: '/ops/finance'
  }, {
    name: 'Accounts',
    url: '/ops/accounts'
  }]
}, {
  name: 'Settings',
  url: '/settings/user-management',
  iconComponent: {
    name: 'cilSettings'
  },
  children: [{
    name: 'Dashboard',
    url: '/settings/dashbaord'
  }, {
    name: 'Sensors/Actuator Management',
    url: '/settings/sensor-actuator-management'
  }, {
    name: 'Machines Managment',
    url: '/settings/machine-management'
  }, {
    name: 'Tools & Jigs Management',
    url: '/settings/tools-jigs-management'
  }, {
    name: 'Asset Management',
    url: '/settings/asset-management'
  }, {
    name: 'Supply Chain Management',
    url: '/settings/supply-chain-management'
  }, {
    name: 'OEM Scheduled Preventative Maintenace',
    url: '/settings/oem-scheduled-preventative-maintenace'
  }, {
    name: 'Supervised Learning',
    url: '/settings/supervised-learning'
  }, {
    name: 'Un-Supervised Learning',
    url: '/settings/unsupervised-learning'
  }, {
    name: 'Reporting Access',
    url: '/settings/report-access'
  }, {
    name: 'Data Path / Backup',
    url: '/settings/data-path-backup'
  }, {
    name: 'Restore',
    url: '/settings/restore'
  }, {
    name: 'Special Features',
    url: '/settings/special-features'
  }]
}, {
  name: 'Report',
  url: '/report',
  iconComponent: {
    name: 'cilNotes'
  },
  badge: {
    color: 'info',
    text: ''
  }
}, {
  name: 'Analysis',
  url: '/analysis',
  iconComponent: {
    name: 'cilMagnifyingGlass'
  },
  children: [{
    name: 'Failure ',
    url: '/analysis/failure-analysis'
  }, {
    name: 'Preventative vs Predicted ',
    url: '/analysis/preventative-vs-predicted-analysis'
  }, {
    name: 'Financial ',
    url: '/analysis/financial-analysis'
  }, {
    name: 'Automatic Diagnosis',
    url: '/analysis/automatic-diagnosis-analysis'
  }, {
    name: 'Root Cause',
    url: '/analysis/root-cause-analysis'
  }]
}
//   Failure Analysis
// Preventive vs Predicted Analysis
// Financial Analysis
// Automatic Diagnosis Analysis
// Root Cause Analysis ( RCA )
// {
//   title: true,
//   name: 'Theme',
// },
// {
//   name: 'Colors',
//   url: '/theme/colors',
//   iconComponent: { name: 'cil-drop' },
// },
// {
//   name: 'Typography',
//   url: '/theme/typography',
//   linkProps: { fragment: 'someAnchor' },
//   iconComponent: { name: 'cil-pencil' },
// },
// {
//   name: 'Components',
//   title: true,
// },
// {
//   name: 'Base',
//   url: '/base',
//   iconComponent: { name: 'cil-puzzle' },
//   children: [
//     {
//       name: 'Accordion',
//       url: '/base/accordion',
//     },
//     {
//       name: 'Breadcrumbs',
//       url: '/base/breadcrumbs',
//     },
//     {
//       name: 'Cards',
//       url: '/base/cards',
//     },
//     {
//       name: 'Carousel',
//       url: '/base/carousel',
//     },
//     {
//       name: 'Collapse',
//       url: '/base/collapse',
//     },
//     {
//       name: 'List Group',
//       url: '/base/list-group',
//     },
//     {
//       name: 'Navs & Tabs',
//       url: '/base/navs',
//     },
//     {
//       name: 'Pagination',
//       url: '/base/pagination',
//     },
//     {
//       name: 'Placeholder',
//       url: '/base/placeholder',
//     },
//     {
//       name: 'Popovers',
//       url: '/base/popovers',
//     },
//     {
//       name: 'Progress',
//       url: '/base/progress',
//     },
//     {
//       name: 'Spinners',
//       url: '/base/spinners',
//     },
//     {
//       name: 'Tables',
//       url: '/base/tables',
//     },
//     {
//       name: 'Tabs',
//       url: '/base/tabs',
//     },
//     {
//       name: 'Tooltips',
//       url: '/base/tooltips',
//     },
//   ],
// },
// {
//   name: 'Buttons',
//   url: '/buttons',
//   iconComponent: { name: 'cil-cursor' },
//   children: [
//     {
//       name: 'Buttons',
//       url: '/buttons/buttons',
//     },
//     {
//       name: 'Button groups',
//       url: '/buttons/button-groups',
//     },
//     {
//       name: 'Dropdowns',
//       url: '/buttons/dropdowns',
//     },
//   ],
// },
// {
//   name: 'Forms',
//   url: '/forms',
//   iconComponent: { name: 'cil-notes' },
//   children: [
//     {
//       name: 'Form Control',
//       url: '/forms/form-control',
//     },
//     {
//       name: 'Select',
//       url: '/forms/select',
//     },
//     {
//       name: 'Checks & Radios',
//       url: '/forms/checks-radios',
//     },
//     {
//       name: 'Range',
//       url: '/forms/range',
//     },
//     {
//       name: 'Input Group',
//       url: '/forms/input-group',
//     },
//     {
//       name: 'Floating Labels',
//       url: '/forms/floating-labels',
//     },
//     {
//       name: 'Layout',
//       url: '/forms/layout',
//     },
//     {
//       name: 'Validation',
//       url: '/forms/validation',
//     },
//   ],
// },
// {
//   name: 'Charts',
//   url: '/charts',
//   iconComponent: { name: 'cil-chart-pie' },
// },
// {
//   name: 'Icons',
//   iconComponent: { name: 'cil-star' },
//   url: '/icons',
//   children: [
//     {
//       name: 'CoreUI Free',
//       url: '/icons/coreui-icons',
//       badge: {
//         color: 'success',
//         text: 'FREE',
//       },
//     },
//     {
//       name: 'CoreUI Flags',
//       url: '/icons/flags',
//     },
//     {
//       name: 'CoreUI Brands',
//       url: '/icons/brands',
//     },
//   ],
// },
// {
//   name: 'Notifications',
//   url: '/notifications',
//   iconComponent: { name: 'cil-bell' },
//   children: [
//     {
//       name: 'Alerts',
//       url: '/notifications/alerts',
//     },
//     {
//       name: 'Badges',
//       url: '/notifications/badges',
//     },
//     {
//       name: 'Modal',
//       url: '/notifications/modal',
//     },
//     {
//       name: 'Toast',
//       url: '/notifications/toasts',
//     },
//   ],
// },
// {
//   name: 'Widgets',
//   url: '/widgets',
//   iconComponent: { name: 'cil-calculator' },
//   badge: {
//     color: 'info',
//     text: 'NEW',
//   },
// },
// {
//   title: true,
//   name: 'Extras',
// },
// {
//   name: 'Pages',
//   url: '/login',
//   iconComponent: { name: 'cil-star' },
//   children: [
//     {
//       name: 'Login',
//       url: '/login',
//     },
//     {
//       name: 'Register',
//       url: '/register',
//     },
//     {
//       name: 'Error 404',
//       url: '/404',
//     },
//     {
//       name: 'Error 500',
//       url: '/500',
//     },
//   ],
// },
];

/***/ }),

/***/ 78823:
/*!**************************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-footer/default-footer.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFooterComponent": () => (/* binding */ DefaultFooterComponent)
/* harmony export */ });
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class DefaultFooterComponent extends _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.FooterComponent {
  constructor() {
    super();
  }
}
DefaultFooterComponent.ɵfac = function DefaultFooterComponent_Factory(t) {
  return new (t || DefaultFooterComponent)();
};
DefaultFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DefaultFooterComponent,
  selectors: [["app-default-footer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 0,
  consts: [["href", "https://ranial.com/", "target", "_blank"]],
  template: function DefaultFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ranial Systems");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A9 2023 All Rights Reserved");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88418:
/*!**************************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-header/default-header.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultHeaderComponent": () => (/* binding */ DefaultHeaderComponent)
/* harmony export */ });
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ 26232);






function DefaultHeaderComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DefaultHeaderComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DefaultHeaderComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DefaultHeaderComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "c-dropdown", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 13)(4, "li")(5, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Items: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Message 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "c-badge", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("caret", false);
  }
}
function DefaultHeaderComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "c-dropdown", 10)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 13)(4, "li")(5, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Updates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Message 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "c-badge", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Message 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "c-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Message 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "c-badge", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Message 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "c-badge", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("caret", false);
  }
}
function DefaultHeaderComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "c-dropdown", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "c-avatar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 31)(4, "li")(5, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Updates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "c-badge", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 42 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "c-badge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 42 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "c-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 42 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "c-badge", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 42 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Payments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "c-badge", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 42 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "c-badge", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 42 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li")(58, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Lock Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("caret", false);
  }
}
class DefaultHeaderComponent extends _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent {
  constructor(classToggler) {
    super();
    this.classToggler = classToggler;
    this.sidebarId = 'sidebar';
    this.newMessages = new Array(4);
    this.newTasks = new Array(5);
    this.newNotifications = new Array(5);
  }
}
DefaultHeaderComponent.ɵfac = function DefaultHeaderComponent_Factory(t) {
  return new (t || DefaultHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ClassToggleService));
};
DefaultHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DefaultHeaderComponent,
  selectors: [["app-default-header"]],
  inputs: {
    sidebarId: "sidebarId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 6,
  consts: [[3, "fluid"], ["title", "sidebar", "toggle", "visible", "cHeaderToggler", "", 1, "ps-1", 3, "cSidebarToggle"], ["cIcon", "", "name", "cilMenu", "size", "lg"], [1, "d-none", "d-lg-flex", "me-auto"], [1, "d-none", "d-lg-flex"], [4, "ngTemplateOutlet"], [1, "ms-2"], ["listDropdown", ""], ["bellDropdown", ""], ["userDropdown", ""], ["variant", "nav-item"], ["title", "listDropdown", "cButton", "", "cDropdownToggle", "", "color", "red", 3, "caret"], ["cIcon", "", "name", "cilList", "size", "lg"], ["cDropdownMenu", "", 1, "pt-0", "pr-8", "w-auto"], ["cDropdownHeader", "", 1, "bg-light", "fw-semibold", "py-2"], ["routerLink", "./", "cDropdownItem", ""], ["cIcon", "", "name", "cilFile", 1, "me-2"], ["color", "warning"], ["title", "bellDropdown", "cButton", "", "color", "", "cDropdownToggle", "", 1, "py-0", 3, "caret"], ["cIcon", "", "name", "cilBell", "size", "lg"], ["cIcon", "", "name", "cilBell", 1, "me-2"], ["color", "info"], ["cIcon", "", "name", "cilEnvelopeOpen", 1, "me-2"], ["color", "success"], ["cIcon", "", "name", "cilTask", 1, "me-2"], ["color", "danger"], ["cIcon", "", "name", "cilCommentSquare", 1, "me-2"], ["color", "warning", 1, "ms-auto"], ["alignment", "end", "variant", "nav-item"], ["cButton", "", "color", "", "cDropdownToggle", "", 1, "py-0", 3, "caret"], ["cTextColor", "primary", "shape", "rounded-1", "size", "md", "src", "./assets/img/avatars/8.jpg", "status", "success"], ["cDropdownMenu", "", 1, "pt-0", "pr-5", "w-auto"], ["color", "info", 1, "ms-2", "float-end"], ["color", "success", 1, "ms-2", "float-end"], ["color", "danger", 1, "ms-2", "float-end"], ["cIcon", "", "name", "cilUser", 1, "me-2"], ["cIcon", "", "name", "cilSettings", 1, "me-2"], ["cIcon", "", "name", "cilCreditCard", 1, "me-2"], ["color", "secondary", 1, "ms-2", "float-end"], ["color", "primary", 1, "ms-2", "float-end"], ["cDropdownDivider", ""], ["cIcon", "", "name", "cilLockLocked", 1, "me-2"]],
  template: function DefaultHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-container", 0)(2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "c-header-nav", 3)(5, "c-header-nav", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "c-header-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DefaultHeaderComponent_ng_container_7_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "c-header-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DefaultHeaderComponent_ng_container_9_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "c-header-nav", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DefaultHeaderComponent_ng_container_11_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "c-header-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "c-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "c-breadcrumb-router", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DefaultHeaderComponent_ng_template_15_Template, 13, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DefaultHeaderComponent_ng_template_17_Template, 31, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DefaultHeaderComponent_ng_template_19_Template, 62, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fluid", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cSidebarToggle", ctx.sidebarId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fluid", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbRouterComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownDividerDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownHeaderDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownItemDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownToggleDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderDividerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderNavComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderTogglerDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.SidebarToggleDirective, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__.IconDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.TextColorDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.BadgeComponent],
  encapsulation: 2
});

/***/ }),

/***/ 50830:
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nav */ 18739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-footer/default-footer.component */ 78823);
/* harmony import */ var _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-header/default-header.component */ 88418);








function DefaultLayoutComponent_c_sidebar_toggler_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "c-sidebar-toggler", 10);
  }
}
const _c0 = function () {
  return {
    src: "assets/img/brand/c-logo.png",
    width: 100,
    height: 46,
    alt: "Company Logo"
  };
};
const _c1 = function () {
  return {
    src: "assets/favicon.ico",
    width: 46,
    height: 46,
    alt: "Company Logo"
  };
};
class DefaultLayoutComponent {
  constructor() {
    this.navItems = _nav__WEBPACK_IMPORTED_MODULE_0__.navItems;
    this.perfectScrollbarConfig = {
      suppressScrollX: true
    };
  }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) {
  return new (t || DefaultLayoutComponent)();
};
DefaultLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DefaultLayoutComponent,
  selectors: [["app-dashboard"]],
  decls: 12,
  vars: 7,
  consts: [["id", "sidebar", "visible", "", 1, "d-print-none", "sidebar", "sidebar-fixed"], ["sidebar", "cSidebar"], ["routerLink", "./", 3, "brandFull", "brandNarrow"], [3, "config"], ["dropdownMode", "close", 3, "navItems"], ["toggle", "unfoldable", "cSidebarToggle", "sidebar", 4, "ngIf"], [1, "wrapper", "d-flex", "flex-column", "min-vh-100", "bg-light", "dark:bg-transparent"], ["position", "sticky", "sidebarId", "sidebar", 1, "mb-5", "d-print-none", "header", "header-sticky"], [1, "body", "flex-grow-1", "px-4"], ["breakpoint", "lg", 1, "h-auto"], ["toggle", "unfoldable", "cSidebarToggle", "sidebar"]],
  template: function DefaultLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "c-sidebar", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "c-sidebar-brand", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "perfect-scrollbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "c-sidebar-nav", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DefaultLayoutComponent_c_sidebar_toggler_5_Template, 1, 0, "c-sidebar-toggler", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-default-header", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "c-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-default-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("brandFull", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0))("brandNarrow", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.perfectScrollbarConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("navItems", ctx.navItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.narrow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.SidebarToggleDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.SidebarTogglerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.SidebarBrandComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.SidebarNavComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarComponent, _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_1__.DefaultFooterComponent, _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaderComponent],
  encapsulation: 2
});

/***/ }),

/***/ 14639:
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFooterComponent": () => (/* reexport safe */ _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_0__.DefaultFooterComponent),
/* harmony export */   "DefaultHeaderComponent": () => (/* reexport safe */ _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_1__.DefaultHeaderComponent),
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout_component__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-footer/default-footer.component */ 78823);
/* harmony import */ var _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-header/default-header.component */ 88418);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-layout.component */ 50830);




/***/ }),

/***/ 52578:
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFooterComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultFooterComponent),
/* harmony export */   "DefaultHeaderComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultHeaderComponent),
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ 14639);


/***/ }),

/***/ 11783:
/*!**************************************!*\
  !*** ./src/app/icons/icon-subset.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconSubset": () => (/* binding */ IconSubset),
/* harmony export */   "iconSubset": () => (/* binding */ iconSubset)
/* harmony export */ });
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/icons */ 37178);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/icons */ 91828);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons */ 14652);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons */ 81770);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ 64423);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons */ 24016);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons */ 91462);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons */ 90654);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ 30751);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/icons */ 58981);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/icons */ 52882);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/icons */ 56478);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @coreui/icons */ 16353);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/icons */ 27870);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @coreui/icons */ 1647);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @coreui/icons */ 16950);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @coreui/icons */ 40245);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @coreui/icons */ 94249);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @coreui/icons */ 74705);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @coreui/icons */ 43454);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @coreui/icons */ 13504);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @coreui/icons */ 21365);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @coreui/icons */ 15492);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @coreui/icons */ 60655);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @coreui/icons */ 30254);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @coreui/icons */ 16415);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @coreui/icons */ 28656);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @coreui/icons */ 69278);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @coreui/icons */ 69246);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @coreui/icons */ 93284);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @coreui/icons */ 14876);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @coreui/icons */ 99092);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @coreui/icons */ 57280);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @coreui/icons */ 27727);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @coreui/icons */ 15280);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @coreui/icons */ 51565);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @coreui/icons */ 99519);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @coreui/icons */ 30886);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @coreui/icons */ 90638);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @coreui/icons */ 3756);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @coreui/icons */ 24995);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @coreui/icons */ 2893);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @coreui/icons */ 5671);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @coreui/icons */ 12892);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @coreui/icons */ 85213);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @coreui/icons */ 14102);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @coreui/icons */ 48531);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @coreui/icons */ 10365);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @coreui/icons */ 94008);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @coreui/icons */ 25586);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @coreui/icons */ 3012);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @coreui/icons */ 6655);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @coreui/icons */ 77940);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @coreui/icons */ 81893);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @coreui/icons */ 52806);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @coreui/icons */ 13781);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @coreui/icons */ 59371);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @coreui/icons */ 90382);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @coreui/icons */ 91308);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @coreui/icons */ 92185);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @coreui/icons */ 30520);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @coreui/icons */ 62177);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @coreui/icons */ 18880);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @coreui/icons */ 23978);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @coreui/icons */ 34303);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @coreui/icons */ 86688);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @coreui/icons */ 34821);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @coreui/icons */ 88611);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @coreui/icons */ 30919);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @coreui/icons */ 20217);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @coreui/icons */ 83347);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @coreui/icons */ 5930);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @coreui/icons */ 3953);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @coreui/icons */ 80210);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @coreui/icons */ 92934);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @coreui/icons */ 52529);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @coreui/icons */ 18400);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @coreui/icons */ 32907);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @coreui/icons */ 68795);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @coreui/icons */ 37703);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @coreui/icons */ 32942);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @coreui/icons */ 64789);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @coreui/icons */ 54382);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @coreui/icons */ 30842);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @coreui/icons */ 24978);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @coreui/icons */ 31063);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @coreui/icons */ 255);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @coreui/icons */ 97519);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @coreui/icons */ 97121);

const iconSubset = {
  cibCcAmex: _coreui_icons__WEBPACK_IMPORTED_MODULE_0__.cibCcAmex,
  cibCcApplePay: _coreui_icons__WEBPACK_IMPORTED_MODULE_1__.cibCcApplePay,
  cibCcMastercard: _coreui_icons__WEBPACK_IMPORTED_MODULE_2__.cibCcMastercard,
  cibCcPaypal: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__.cibCcPaypal,
  cibCcStripe: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__.cibCcStripe,
  cibCcVisa: _coreui_icons__WEBPACK_IMPORTED_MODULE_5__.cibCcVisa,
  cibFacebook: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cibFacebook,
  cibGoogle: _coreui_icons__WEBPACK_IMPORTED_MODULE_7__.cibGoogle,
  cibLinkedin: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cibLinkedin,
  cibSkype: _coreui_icons__WEBPACK_IMPORTED_MODULE_9__.cibSkype,
  cibTwitter: _coreui_icons__WEBPACK_IMPORTED_MODULE_10__.cibTwitter,
  cifBr: _coreui_icons__WEBPACK_IMPORTED_MODULE_11__.cifBr,
  cifEs: _coreui_icons__WEBPACK_IMPORTED_MODULE_12__.cifEs,
  cifFr: _coreui_icons__WEBPACK_IMPORTED_MODULE_13__.cifFr,
  cifIn: _coreui_icons__WEBPACK_IMPORTED_MODULE_14__.cifIn,
  cifPl: _coreui_icons__WEBPACK_IMPORTED_MODULE_15__.cifPl,
  cifUs: _coreui_icons__WEBPACK_IMPORTED_MODULE_16__.cifUs,
  cilAlignCenter: _coreui_icons__WEBPACK_IMPORTED_MODULE_17__.cilAlignCenter,
  cilAlignLeft: _coreui_icons__WEBPACK_IMPORTED_MODULE_18__.cilAlignLeft,
  cilAlignRight: _coreui_icons__WEBPACK_IMPORTED_MODULE_19__.cilAlignRight,
  cilApplicationsSettings: _coreui_icons__WEBPACK_IMPORTED_MODULE_20__.cilApplicationsSettings,
  cilArrowBottom: _coreui_icons__WEBPACK_IMPORTED_MODULE_21__.cilArrowBottom,
  cilArrowRight: _coreui_icons__WEBPACK_IMPORTED_MODULE_22__.cilArrowRight,
  cilArrowTop: _coreui_icons__WEBPACK_IMPORTED_MODULE_23__.cilArrowTop,
  cilBasket: _coreui_icons__WEBPACK_IMPORTED_MODULE_24__.cilBasket,
  cilBell: _coreui_icons__WEBPACK_IMPORTED_MODULE_25__.cilBell,
  cilBold: _coreui_icons__WEBPACK_IMPORTED_MODULE_26__.cilBold,
  cilBookmark: _coreui_icons__WEBPACK_IMPORTED_MODULE_27__.cilBookmark,
  cilCalculator: _coreui_icons__WEBPACK_IMPORTED_MODULE_28__.cilCalculator,
  cilCalendar: _coreui_icons__WEBPACK_IMPORTED_MODULE_29__.cilCalendar,
  cilChart: _coreui_icons__WEBPACK_IMPORTED_MODULE_30__.cilChart,
  cilChartPie: _coreui_icons__WEBPACK_IMPORTED_MODULE_31__.cilChartPie,
  cilCheck: _coreui_icons__WEBPACK_IMPORTED_MODULE_32__.cilCheck,
  cilChevronLeft: _coreui_icons__WEBPACK_IMPORTED_MODULE_33__.cilChevronLeft,
  cilChevronRight: _coreui_icons__WEBPACK_IMPORTED_MODULE_34__.cilChevronRight,
  cilCloudDownload: _coreui_icons__WEBPACK_IMPORTED_MODULE_35__.cilCloudDownload,
  cilCode: _coreui_icons__WEBPACK_IMPORTED_MODULE_36__.cilCode,
  cilCommentSquare: _coreui_icons__WEBPACK_IMPORTED_MODULE_37__.cilCommentSquare,
  cilCreditCard: _coreui_icons__WEBPACK_IMPORTED_MODULE_38__.cilCreditCard,
  cilCursor: _coreui_icons__WEBPACK_IMPORTED_MODULE_39__.cilCursor,
  cilDollar: _coreui_icons__WEBPACK_IMPORTED_MODULE_40__.cilDollar,
  cilDrop: _coreui_icons__WEBPACK_IMPORTED_MODULE_41__.cilDrop,
  cilEnvelopeClosed: _coreui_icons__WEBPACK_IMPORTED_MODULE_42__.cilEnvelopeClosed,
  cilEnvelopeOpen: _coreui_icons__WEBPACK_IMPORTED_MODULE_43__.cilEnvelopeOpen,
  cilFile: _coreui_icons__WEBPACK_IMPORTED_MODULE_44__.cilFile,
  cilHome: _coreui_icons__WEBPACK_IMPORTED_MODULE_45__.cilHome,
  cilInbox: _coreui_icons__WEBPACK_IMPORTED_MODULE_46__.cilInbox,
  cilIndentDecrease: _coreui_icons__WEBPACK_IMPORTED_MODULE_47__.cilIndentDecrease,
  cilIndentIncrease: _coreui_icons__WEBPACK_IMPORTED_MODULE_48__.cilIndentIncrease,
  cilItalic: _coreui_icons__WEBPACK_IMPORTED_MODULE_49__.cilItalic,
  cilJustifyCenter: _coreui_icons__WEBPACK_IMPORTED_MODULE_50__.cilJustifyCenter,
  cilLayers: _coreui_icons__WEBPACK_IMPORTED_MODULE_51__.cilLayers,
  cilList: _coreui_icons__WEBPACK_IMPORTED_MODULE_52__.cilList,
  cilListNumbered: _coreui_icons__WEBPACK_IMPORTED_MODULE_53__.cilListNumbered,
  cilLocationPin: _coreui_icons__WEBPACK_IMPORTED_MODULE_54__.cilLocationPin,
  cilLockLocked: _coreui_icons__WEBPACK_IMPORTED_MODULE_55__.cilLockLocked,
  cilMagnifyingGlass: _coreui_icons__WEBPACK_IMPORTED_MODULE_56__.cilMagnifyingGlass,
  cilMap: _coreui_icons__WEBPACK_IMPORTED_MODULE_57__.cilMap,
  cilMediaPlay: _coreui_icons__WEBPACK_IMPORTED_MODULE_58__.cilMediaPlay,
  cilMenu: _coreui_icons__WEBPACK_IMPORTED_MODULE_59__.cilMenu,
  cilMoon: _coreui_icons__WEBPACK_IMPORTED_MODULE_60__.cilMoon,
  cilNotes: _coreui_icons__WEBPACK_IMPORTED_MODULE_61__.cilNotes,
  cilOptions: _coreui_icons__WEBPACK_IMPORTED_MODULE_62__.cilOptions,
  cilPaperclip: _coreui_icons__WEBPACK_IMPORTED_MODULE_63__.cilPaperclip,
  cilPaperPlane: _coreui_icons__WEBPACK_IMPORTED_MODULE_64__.cilPaperPlane,
  cilPen: _coreui_icons__WEBPACK_IMPORTED_MODULE_65__.cilPen,
  cilPencil: _coreui_icons__WEBPACK_IMPORTED_MODULE_66__.cilPencil,
  cilPeople: _coreui_icons__WEBPACK_IMPORTED_MODULE_67__.cilPeople,
  cilPrint: _coreui_icons__WEBPACK_IMPORTED_MODULE_68__.cilPrint,
  cilPuzzle: _coreui_icons__WEBPACK_IMPORTED_MODULE_69__.cilPuzzle,
  cilReportSlash: _coreui_icons__WEBPACK_IMPORTED_MODULE_70__.cilReportSlash,
  cilSave: _coreui_icons__WEBPACK_IMPORTED_MODULE_71__.cilSave,
  cilSettings: _coreui_icons__WEBPACK_IMPORTED_MODULE_72__.cilSettings,
  cilShare: _coreui_icons__WEBPACK_IMPORTED_MODULE_73__.cilShare,
  cilShareAll: _coreui_icons__WEBPACK_IMPORTED_MODULE_74__.cilShareAll,
  cilShareBoxed: _coreui_icons__WEBPACK_IMPORTED_MODULE_75__.cilShareBoxed,
  cilSpeech: _coreui_icons__WEBPACK_IMPORTED_MODULE_76__.cilSpeech,
  cilSpeedometer: _coreui_icons__WEBPACK_IMPORTED_MODULE_77__.cilSpeedometer,
  cilSpreadsheet: _coreui_icons__WEBPACK_IMPORTED_MODULE_78__.cilSpreadsheet,
  cilStar: _coreui_icons__WEBPACK_IMPORTED_MODULE_79__.cilStar,
  cilSun: _coreui_icons__WEBPACK_IMPORTED_MODULE_80__.cilSun,
  cilTags: _coreui_icons__WEBPACK_IMPORTED_MODULE_81__.cilTags,
  cilTask: _coreui_icons__WEBPACK_IMPORTED_MODULE_82__.cilTask,
  cilTrash: _coreui_icons__WEBPACK_IMPORTED_MODULE_83__.cilTrash,
  cilUnderline: _coreui_icons__WEBPACK_IMPORTED_MODULE_84__.cilUnderline,
  cilUser: _coreui_icons__WEBPACK_IMPORTED_MODULE_85__.cilUser,
  cilUserFemale: _coreui_icons__WEBPACK_IMPORTED_MODULE_86__.cilUserFemale,
  cilUserFollow: _coreui_icons__WEBPACK_IMPORTED_MODULE_87__.cilUserFollow,
  cilUserUnfollow: _coreui_icons__WEBPACK_IMPORTED_MODULE_88__.cilUserUnfollow
};
var IconSubset;
(function (IconSubset) {
  IconSubset["cibCcAmex"] = "cibCcAmex";
  IconSubset["cibCcApplePay"] = "cibCcApplePay";
  IconSubset["cibCcMastercard"] = "cibCcMastercard";
  IconSubset["cibCcPaypal"] = "cibCcPaypal";
  IconSubset["cibCcStripe"] = "cibCcStripe";
  IconSubset["cibCcVisa"] = "cibCcVisa";
  IconSubset["cibFacebook"] = "cibFacebook";
  IconSubset["cibGoogle"] = "cibGoogle";
  IconSubset["cibLinkedin"] = "cibLinkedin";
  IconSubset["cibSkype"] = "cibSkype";
  IconSubset["cibTwitter"] = "cibTwitter";
  IconSubset["cifBr"] = "cifBr";
  IconSubset["cifEs"] = "cifEs";
  IconSubset["cifFr"] = "cifFr";
  IconSubset["cifIn"] = "cifIn";
  IconSubset["cifPl"] = "cifPl";
  IconSubset["cifUs"] = "cifUs";
  IconSubset["cilAlignCenter"] = "cilAlignCenter";
  IconSubset["cilAlignLeft"] = "cilAlignLeft";
  IconSubset["cilAlignRight"] = "cilAlignRight";
  IconSubset["cilApplicationsSettings"] = "cilApplicationsSettings";
  IconSubset["cilArrowBottom"] = "cilArrowBottom";
  IconSubset["cilArrowRight"] = "cilArrowRight";
  IconSubset["cilArrowTop"] = "cilArrowTop";
  IconSubset["cilBasket"] = "cilBasket";
  IconSubset["cilBell"] = "cilBell";
  IconSubset["cilBold"] = "cilBold";
  IconSubset["cilBookmark"] = "cilBookmark";
  IconSubset["cilCalculator"] = "cilCalculator";
  IconSubset["cilCalendar"] = "cilCalendar";
  IconSubset["cilChart"] = "cilChart";
  IconSubset["cilChartPie"] = "cilChartPie";
  IconSubset["cilCheck"] = "cilCheck";
  IconSubset["cilChevronLeft"] = "cilChevronLeft";
  IconSubset["cilChevronRight"] = "cilChevronRight";
  IconSubset["cilCloudDownload"] = "cilCloudDownload";
  IconSubset["cilCode"] = "cilCode";
  IconSubset["cilCommentSquare"] = "cilCommentSquare";
  IconSubset["cilCreditCard"] = "cilCreditCard";
  IconSubset["cilCursor"] = "cilCursor";
  IconSubset["cilDollar"] = "cilDollar";
  IconSubset["cilDrop"] = "cilDrop";
  IconSubset["cilEnvelopeClosed"] = "cilEnvelopeClosed";
  IconSubset["cilEnvelopeOpen"] = "cilEnvelopeOpen";
  IconSubset["cilFile"] = "cilFile";
  IconSubset["cilHome"] = "cilHome";
  IconSubset["cilInbox"] = "cilInbox";
  IconSubset["cilIndentDecrease"] = "cilIndentDecrease";
  IconSubset["cilIndentIncrease"] = "cilIndentIncrease";
  IconSubset["cilItalic"] = "cilItalic";
  IconSubset["cilJustifyCenter"] = "cilJustifyCenter";
  IconSubset["cilLayers"] = "cilLayers";
  IconSubset["cilList"] = "cilList";
  IconSubset["cilListNumbered"] = "cilListNumbered";
  IconSubset["cilLocationPin"] = "cilLocationPin";
  IconSubset["cilLockLocked"] = "cilLockLocked";
  IconSubset["cilMagnifyingGlass"] = "cilMagnifyingGlass";
  IconSubset["cilMap"] = "cilMap";
  IconSubset["cilMediaPlay"] = "cilMediaPlay";
  IconSubset["cilMenu"] = "cilMenu";
  IconSubset["cilMoon"] = "cilMoon";
  IconSubset["cilNotes"] = "cilNotes";
  IconSubset["cilOptions"] = "cilOptions";
  IconSubset["cilPaperclip"] = "cilPaperclip";
  IconSubset["cilPaperPlane"] = "cilPaperPlane";
  IconSubset["cilPen"] = "cilPen";
  IconSubset["cilPencil"] = "cilPencil";
  IconSubset["cilPeople"] = "cilPeople";
  IconSubset["cilPrint"] = "cilPrint";
  IconSubset["cilPuzzle"] = "cilPuzzle";
  IconSubset["cilReportSlash"] = "cilReportSlash";
  IconSubset["cilSave"] = "cilSave";
  IconSubset["cilSettings"] = "cilSettings";
  IconSubset["cilShare"] = "cilShare";
  IconSubset["cilShareAll"] = "cilShareAll";
  IconSubset["cilShareBoxed"] = "cilShareBoxed";
  IconSubset["cilSpeech"] = "cilSpeech";
  IconSubset["cilSpeedometer"] = "cilSpeedometer";
  IconSubset["cilSpreadsheet"] = "cilSpreadsheet";
  IconSubset["cilStar"] = "cilStar";
  IconSubset["cilSun"] = "cilSun";
  IconSubset["cilTags"] = "cilTags";
  IconSubset["cilTask"] = "cilTask";
  IconSubset["cilTrash"] = "cilTrash";
  IconSubset["cilUnderline"] = "cilUnderline";
  IconSubset["cilUser"] = "cilUser";
  IconSubset["cilUserFemale"] = "cilUserFemale";
  IconSubset["cilUserFollow"] = "cilUserFollow";
  IconSubset["cilUserUnfollow"] = "cilUserUnfollow";
})(IconSubset || (IconSubset = {}));

/***/ }),

/***/ 28897:
/*!**************************************************************!*\
  !*** ./src/app/show-credential/show-credential.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowCredentialComponent": () => (/* binding */ ShowCredentialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ShowCredentialComponent {}
ShowCredentialComponent.ɵfac = function ShowCredentialComponent_Factory(t) {
  return new (t || ShowCredentialComponent)();
};
ShowCredentialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ShowCredentialComponent,
  selectors: [["app-show-credential"]],
  decls: 2,
  vars: 0,
  template: function ShowCredentialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "show-credential works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 38577:
/*!**********************************************************!*\
  !*** ./src/app/views/opscontrol/opscontrol.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpscontrolComponent": () => (/* binding */ OpscontrolComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class OpscontrolComponent {}
OpscontrolComponent.ɵfac = function OpscontrolComponent_Factory(t) {
  return new (t || OpscontrolComponent)();
};
OpscontrolComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OpscontrolComponent,
  selectors: [["app-opscontrol"]],
  decls: 2,
  vars: 0,
  template: function OpscontrolComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "opscontrol works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 10765:
/*!******************************************************!*\
  !*** ./src/app/views/pages/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons-angular */ 26232);







class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    //Create a from group and assocaite the view
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl()
    });
  }
  // Checks credentials to allow or deny user access
  onSubmit() {
    let credentials = this.loginForm.value;
    console.log('Submitted ', credentials);
    this.authService.auth(credentials);
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login Component, user needs to authenticate');
    }
  }
  forgotPassword() {
    console.log('Will show password on screen');
    this.router.navigate(['/show-credentials']);
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 27,
  vars: 1,
  consts: [[1, "bg-light", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "8"], [1, "p-4"], [3, "formGroup", "submit"], [1, "text-medium-emphasis"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["formControlName", "username", "autoComplete", "username", "cFormControl", "", "placeholder", "Username"], [1, "mb-4"], ["cIcon", "", "name", "cilLockLocked"], ["formControlName", "password", "autoComplete", "current-password", "cFormControl", "", "placeholder", "Password", "type", "password"], ["xs", "6"], ["type", "submit", "cButton", "", "color", "primary", 1, "px-4"], ["xs", "6", 1, "text-right"], ["type", "reset", "cButton", "", "color", "link", 1, "px-0", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "c-card-group")(5, "c-card", 3)(6, "c-card-body")(7, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_7_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sign In to your account");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "c-input-group", 6)(13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "c-input-group", 10)(17, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "c-row")(21, "c-col", 13)(22, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "c-col", 15)(25, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener() {
        return ctx.forgotPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Forgot password? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
    }
  },
  dependencies: [_coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardBodyComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.RowComponent, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.InputGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.InputGroupTextDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 20778:
/*!**********************************************************!*\
  !*** ./src/app/views/pages/page404/page404.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-angular */ 26232);



class Page404Component {
  constructor() {}
}
Page404Component.ɵfac = function Page404Component_Factory(t) {
  return new (t || Page404Component)();
};
Page404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Page404Component,
  selectors: [["app-page404"]],
  decls: 17,
  vars: 0,
  consts: [[1, "bg-light", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "6"], [1, "clearfix"], [1, "float-start", "display-3", "me-4"], [1, "pt-3"], [1, "text-medium-emphasis", "float-start"], [1, "input-prepend"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilMagnifyingGlass"], ["cFormControl", "", "placeholder", "What are you looking for?", "type", "text"], ["cButton", "", "color", "info"]],
  template: function Page404Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "div", 3)(5, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oops! You're lost.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The page you are looking for was not found. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "c-input-group", 7)(12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.RowComponent, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__.IconDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.InputGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.InputGroupTextDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5000:
/*!**********************************************************!*\
  !*** ./src/app/views/pages/page500/page500.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page500Component": () => (/* binding */ Page500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-angular */ 26232);



class Page500Component {
  constructor() {}
}
Page500Component.ɵfac = function Page500Component_Factory(t) {
  return new (t || Page500Component)();
};
Page500Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Page500Component,
  selectors: [["app-page500"]],
  decls: 17,
  vars: 0,
  consts: [[1, "bg-light", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "6"], [1, "clearfix"], [1, "float-start", "display-3", "me-4"], [1, "pt-3"], [1, "text-medium-emphasis", "float-start"], [1, "input-prepend"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilMagnifyingGlass"], ["cFormControl", "", "placeholder", "What are you looking for?", "type", "text"], ["cButton", "", "color", "info"]],
  template: function Page500Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "span", 3)(5, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Houston, we have a problem!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The page you are looking for is temporarily unavailable. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "c-input-group", 7)(12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.RowComponent, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__.IconDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.InputGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.InputGroupTextDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2694:
/*!************************************************************!*\
  !*** ./src/app/views/pages/register/register.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ 43415);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-angular */ 26232);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




class RegisterComponent {
  constructor() {}
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)();
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 30,
  vars: 0,
  consts: [[1, "bg-light", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["lg", "7", "md", "9", "xl", "6"], [1, "mx-4"], [1, "p-4"], ["cForm", ""], [1, "text-medium-emphasis"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["autoComplete", "name", "cFormControl", "", "placeholder", "Username"], ["autoComplete", "email", "cFormControl", "", "placeholder", "Email"], ["cIcon", "", "name", "cilLockLocked"], ["autoComplete", "new-password", "cFormControl", "", "placeholder", "Password", "type", "password"], [1, "mb-4"], ["autoComplete", "new-password", "cFormControl", "", "placeholder", "Repeat password", "type", "password"], [1, "d-grid"], ["cButton", "", "color", "success"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "c-card", 3)(5, "c-card-body", 4)(6, "form", 5)(7, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create your account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "c-input-group", 7)(12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "c-input-group", 7)(16, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "@");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "c-input-group", 7)(20, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "c-input-group", 14)(24, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16)(28, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
  },
  dependencies: [_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.CardBodyComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.RowComponent, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__.IconDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.FormDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.InputGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.InputGroupTextDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(41211), __webpack_exec__(96344), __webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map