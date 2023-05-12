import { OperationsGuardGuard } from "./../../auth/guards/opertation-control/operations-guard.guard";
import { Router, Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AssetTrackingComponent } from "./asset-tracking/asset-tracking.component";
import { CustomerDataBaseComponent } from "./customer-data-base/customer-data-base.component";
import { KeyLockManagementComponent } from "./key-lock-management/key-lock-management.component";
import { MaintenanceSchedulingComponent } from "./maintenance-scheduling/maintenance-scheduling.component";
import { PreventiveMaintenanceComponent } from "./preventive-maintenance/preventive-maintenance.component";
import { EquipmentTrackingComponent } from "./equipment-tracking/equipment-tracking.component";
import { DispatchManagementComponent } from "./dispatch-management/dispatch-management.component";
import { CostTrackingComponent } from "./cost-tracking/cost-tracking.component";
import { InventoryManagementComponent } from "./inventory-management/inventory-management.component";
import { JobCostingComponent } from "./job-costing/job-costing.component";
import { JobManagementComponent } from "./job-management/job-management.component";
import { MaintenanceHistoryComponent } from "./maintenance-history/maintenance-history.component";
import { PurchasingComponent } from "./purchasing/purchasing.component";
import { RepairTrackingComponent } from "./repair-tracking/repair-tracking.component";
import { RoutingComponent } from "./routing/routing.component";
import { SchedulingComponent } from "./scheduling/scheduling.component";
import { ServiceHistoryTrackingComponent } from "./service-history-tracking/service-history-tracking.component";
import { TechnicianManagementComponent } from "./technician-management/technician-management.component";
import { VehicleInformationComponent } from "./vehicle-information/vehicle-information.component";
import { WarrantyTrackingComponent } from "./warranty-tracking/warranty-tracking.component";
import { WorkOrderManagementComponent } from "./work-order-management/work-order-management.component";
import { InventoryControlComponent } from "./inventory-control/inventory-control.component";
import { PartsInventoryManagementComponent } from "./parts-inventory-management/parts-inventory-management.component";

// FIX NAME GUARD GUARD
const routes: Routes = [
  {
    path: "",
    data: {
      title: "Operations and Control",
    },
    canActivateChild: [OperationsGuardGuard],
    children: [
      {
        path: "customer-database",
        component: CustomerDataBaseComponent,
        data: {
          title: "Customer Database",
          role: ["Accounts"],
        },
        pathMatch: "full",
      },
      {
        path: "asset-tracking",
        component: AssetTrackingComponent,
        data: {
          title: "Asset Tracking",
          role: ["Admin"],
        },
        pathMatch: "full",
      },
      {
        path: "key-lock-management",
        component: KeyLockManagementComponent,
        data: {
          title: "Key & Lock Management",
          role: ["Admin"],
        },
        pathMatch: "full",
      },
      {
        path: "maintenance-scheduling",
        component: MaintenanceSchedulingComponent,
        data: {
          title: "Maintenance Scheduling",
          role: ["Admin"],
        },
        pathMatch: "full",
      },
      {
        path: "preventive-maintenance",
        component: PreventiveMaintenanceComponent,
        data: {
          title: "Preventive Maintenance",
          role: ["Admin"],
        },
        pathMatch: "full",
      },
      {
        path: "equipment-tracking",
        component: EquipmentTrackingComponent,
        data: {
          title: "Equipment Tracking",
          role: ["Admin"],
        },
        pathMatch: "full",
      },
      {
        path: "warranty-tracking",
        component: WarrantyTrackingComponent,
        data: {
          title: "Warranty Tracking",
          role: ["Admin"],
        },
        pathMatch: "full",
      },
      {
        path: "maintenance-history",
        component: MaintenanceHistoryComponent,
        data: {
          title: "Maintenance History",
          role: ["Admin"],
        },
        pathMatch: "full",
      },
      {
        path: "routing",
        component: RoutingComponent,
        data: {
          title: "Routing",
          role: ["Engineering"],
        },
        pathMatch: "full",
      },
      {
        path: "job-management",
        component: JobManagementComponent,
        data: {
          title: "Job Management",
          role: ["Engineering"],
        },
        pathMatch: "full",
      },
      {
        path: "scheduling",
        component: SchedulingComponent,
        data: {
          title: "Scheduling",
          role: ["Engineering"],
        },
        pathMatch: "full",
      },
      {
        path: "service-history-tracking",
        component: ServiceHistoryTrackingComponent,
        data: {
          title: "Service History Tracking",
          role: ["Engineering"],
        },
        pathMatch: "full",
      },
      {
        path: "technician-management",
        component: TechnicianManagementComponent,
        data: {
          title: "Technician Management",
          role: ["Engineering"],
        },
        pathMatch: "full",
      },
      {
        path: "repair-tracking",
        component: RepairTrackingComponent,
        data: {
          title: "Repair Tracking",
          role: ["Engineering"],
        },
        pathMatch: "full",
      },
      {
        path: "job-costing",
        component: JobCostingComponent,
        data: {
          title: "Job Costing",
          role: ["Finance"],
        },
        pathMatch: "full",
      },
      {
        path: "cost-tracking",
        component: CostTrackingComponent,
        data: {
          title: "Cost Tracking",
          role: ["Finance"],
        },
        pathMatch: "full",
      },
      {
        path: "work-order-management",
        component: WorkOrderManagementComponent,
        data: {
          title: "Work Order Management",
          role: ["SalesAndMarketing"],
        },
        pathMatch: "full",
      },
      {
        path: "inventory-management",
        component: InventoryManagementComponent,
        data: {
          title: "Inventory Management",
          role: ["SupplyChainManagement"],
        },
        pathMatch: "full",
      },
      {
        path: "vehicle-information",
        component: VehicleInformationComponent,
        data: {
          title: "Vehicle Information",
          role: ["SupplyChainManagement"],
        },
        pathMatch: "full",
      },
      {
        path: "dispatch-management",
        component: DispatchManagementComponent,
        data: {
          title: "Dispatch Management",
          role: ["SupplyChainManagement"],
        },
        pathMatch: "full",
      },
      {
        path: "purchasing",
        component: PurchasingComponent,
        data: {
          title: "Purchasing",
          role: ["SupplyChainManagement"],
        },
        pathMatch: "full",
      },
      {
        path: "inventory-control",
        component: InventoryControlComponent,
        data: {
          title: "Inventroy Control",
          role: ["SupplyChainManagement"],
        },
        pathMatch: "full",
      },
      {
        path: "parts-inventory-management",
        component: PartsInventoryManagementComponent,
        data: {
          title: "Inventroy Control",
          role: ["SupplyChainManagement"],
        },
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpsControlRoutingModule {}
