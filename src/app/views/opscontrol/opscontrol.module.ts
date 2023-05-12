import { OpsControlRoutingModule } from './opscontrol-routing.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerDataBaseComponent } from "./customer-data-base/customer-data-base.component";
import { AssetTrackingComponent } from "./asset-tracking/asset-tracking.component";
import { KeyLockManagementComponent } from "./key-lock-management/key-lock-management.component";
import { MaintenanceSchedulingComponent } from "./maintenance-scheduling/maintenance-scheduling.component";
import { PreventiveMaintenanceComponent } from "./preventive-maintenance/preventive-maintenance.component";
import { EquipmentTrackingComponent } from "./equipment-tracking/equipment-tracking.component";
import { WarrantyTrackingComponent } from "./warranty-tracking/warranty-tracking.component";
import { MaintenanceHistoryComponent } from "./maintenance-history/maintenance-history.component";
import { RoutingComponent } from "./routing/routing.component";
import { JobManagementComponent } from "./job-management/job-management.component";
import { SchedulingComponent } from "./scheduling/scheduling.component";
import { ServiceHistoryTrackingComponent } from "./service-history-tracking/service-history-tracking.component";
import { TechnicianManagementComponent } from "./technician-management/technician-management.component";
import { RepairTrackingComponent } from "./repair-tracking/repair-tracking.component";
import { JobCostingComponent } from "./job-costing/job-costing.component";
import { CostTrackingComponent } from "./cost-tracking/cost-tracking.component";
import { WorkOrderManagementComponent } from "./work-order-management/work-order-management.component";
import { InventoryManagementComponent } from "./inventory-management/inventory-management.component";
import { VehicleInformationComponent } from "./vehicle-information/vehicle-information.component";
import { DispatchManagementComponent } from "./dispatch-management/dispatch-management.component";
import { PurchasingComponent } from "./purchasing/purchasing.component";
import { InventoryControlComponent } from "./inventory-control/inventory-control.component";
import { PartsInventoryManagementComponent } from "./parts-inventory-management/parts-inventory-management.component";

@NgModule({
  imports: [CommonModule, OpsControlRoutingModule],
  //Import selectors that are available to this component
  declarations: [
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
  ],
})
export class OpsModule {}
