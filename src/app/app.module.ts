import { AssetInfoRoutingModule } from "./views/asset-info/asset-info.routing";
import { NgModule } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from "ngx-perfect-scrollbar";

// Import routing module
import { AppRoutingModule } from "./app-routing.module";

// Import app component
import { AppComponent } from "./app.component";

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from "./containers";

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from "@coreui/angular";
import { IconModule, IconSetService } from "@coreui/icons-angular";
import { CustomerDataBaseComponent } from "./views/customer-data-base/customer-data-base.component";
import { AssetTrackingComponent } from "./views/asset-tracking/asset-tracking.component";
import { KeyLockManagementComponent } from "./views/key-lock-management/key-lock-management.component";
import { MaintenanceSchedulingComponent } from "./views/maintenance-scheduling/maintenance-scheduling.component";
import { PreventiveMaintenanceComponent } from "./views/preventive-maintenance/preventive-maintenance.component";
import { EquipmentTrackingComponent } from "./views/equipment-tracking/equipment-tracking.component";
import { WarrantyTrackingComponent } from "./views/warranty-tracking/warranty-tracking.component";
import { MaintenanceHistoryComponent } from "./views/maintenance-history/maintenance-history.component";
import { RoutingComponent } from "./views/routing/routing.component";
import { JobManagementComponent } from "./views/job-management/job-management.component";
import { SchedulingComponent } from "./views/scheduling/scheduling.component";
import { ServiceHistoryTrackingComponent } from "./views/service-history-tracking/service-history-tracking.component";
import { TechnicianManagementComponent } from "./views/technician-management/technician-management.component";
import { RepairTrackingComponent } from "./views/repair-tracking/repair-tracking.component";
import { JobCostingComponent } from "./views/job-costing/job-costing.component";
import { CostTrackingComponent } from "./views/cost-tracking/cost-tracking.component";
import { WorkOrderManagementComponent } from "./views/work-order-management/work-order-management.component";
import { InventoryManagementComponent } from "./views/inventory-management/inventory-management.component";
import { VehicleInformationComponent } from "./views/vehicle-information/vehicle-information.component";
import { DispatchManagementComponent } from "./views/dispatch-management/dispatch-management.component";
import { PurchasingComponent } from "./views/purchasing/purchasing.component";
import { InventoryControlComponent } from "./views/inventory-control/inventory-control.component";
import { PartsInventoryManagementComponent } from "./views/parts-inventory-management/parts-inventory-management.component";
import { HttpClientModule } from "@angular/common/http";
import { AssetInfoComponent } from "./views/asset-info/asset-info.component";
import { RtTableComponent } from "./components/rt-table/rt-table.component";

//Removes horizontal scrollbars
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    CustomerDataBaseComponent,
    AssetTrackingComponent,
    KeyLockManagementComponent,
    MaintenanceSchedulingComponent,
    PreventiveMaintenanceComponent,
    EquipmentTrackingComponent,
    WarrantyTrackingComponent,
    MaintenanceHistoryComponent,
    RoutingComponent,
    JobManagementComponent,
    SchedulingComponent,
    ServiceHistoryTrackingComponent,
    TechnicianManagementComponent,
    RepairTrackingComponent,
    JobCostingComponent,
    CostTrackingComponent,
    WorkOrderManagementComponent,
    InventoryManagementComponent,
    VehicleInformationComponent,
    DispatchManagementComponent,
    PurchasingComponent,
    InventoryControlComponent,
    PartsInventoryManagementComponent,
    AssetInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    AssetInfoRoutingModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
