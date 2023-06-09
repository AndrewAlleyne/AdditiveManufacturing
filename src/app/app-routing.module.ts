import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DefaultLayoutComponent } from "./containers";
import { ShowCredentialComponent } from "./show-credential/show-credential.component";
import { Page404Component } from "./views/pages/page404/page404.component";
import { Page500Component } from "./views/pages/page500/page500.component";
import { LoginComponent } from "./views/pages/login/login.component";
import { RegisterComponent } from "./views/pages/register/register.component";
import { AuthGuard } from "./auth/auth.guard";
import { RootAuthGuard } from "./auth/root/root-auth.guard";
import { AuthService } from "./auth/auth.service";
import { SettingsComponent } from "./views/preferences/settings.component";
import { AssetInfoComponent } from "./views/asset-info/asset-info.component";
import { LoginGuardGuard } from "./guards/login-guard.guard";
import { AdditiveManufacturingComponent } from "./views/additive-manufacturing/additive-manufacturing.component";
import { SpecimenComponent } from "./views/specimen/specimen.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "asset",
        component: AssetInfoComponent,
        data: {
          title: "Asset Information",
        },
      },
      {
        path: "specimen",
        component: SpecimenComponent,
        data: {
          title: "Specimen",
        },
      },
      {
        path: "dashboard",
        data: {},
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "ops",
        loadChildren: () =>
          import("./views/opscontrol/opscontrol.module").then(
            (m) => m.OpsModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./views/preferences/s.module").then(
            (m) => m.PreferencesModule
          ),
        // component: SettingsComponent,
      },
      {
        path: "additive-manufacturing",
        loadChildren: () =>
          import("./views/additive-manufacturing/additive.module").then(
            (m) => m.AdditiveManufacturingModule
          ),
      },

      {
        path: "base",
        loadChildren: () =>
          import("./views/base/base.module").then((m) => m.BaseModule),
      },
      {
        path: "buttons",
        loadChildren: () =>
          import("./views/buttons/buttons.module").then((m) => m.ButtonsModule),
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./views/forms/forms.module").then((m) => m.CoreUIFormsModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./views/charts/charts.module").then((m) => m.ChartsModule),
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/icons/icons.module").then((m) => m.IconsModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then((m) => m.WidgetsModule),
      },
      {
        path: "pages",
        loadChildren: () =>
          import("./views/pages/pages.module").then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: "404",
    component: Page404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: Page500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
    // canActivate: [LoginGuardGuard],
  },
  {
    path: "show-credentials",
    component: ShowCredentialComponent,
    data: { title: "Credentials" },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      initialNavigation: "enabledBlocking",
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService],
})
export class AppRoutingModule {}
