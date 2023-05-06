import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SupplyChainManagementComponent } from "./supply-chain-management/supply-chain-management.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { SensorsActuatorsMangementComponent } from "./sensors-actuators-mangement/sensors-actuators-mangement.component";
import { MachinesManagementComponent } from "./machines-management/machines-management.component";
import { ToolsJigsManagementComponent } from "./tools-jigs-management/tools-jigs-management.component";
import { AssetManagementComponent } from "./asset-management/asset-management.component";
import { OemScheduledPreventiveMaintenanceComponent } from "./oem-scheduled-preventive-maintenance/oem-scheduled-preventive-maintenance.component";
import { PredictedMaintenanceComponent } from "./predicted-maintenance/predicted-maintenance.component";
import { SupervisedLearningComponent } from "./supervised-learning/supervised-learning.component";
import { UnSupervisedLearningComponent } from "./un-supervised-learning/un-supervised-learning.component";
import { ReportingAccessComponent } from "./reporting-access/reporting-access.component";
import { BackupComponent } from "./data-path/backup/backup.component";
import { RestoreComponent } from "./restore/restore.component";
import { SpecialFeaturesComponent } from "./special-features/special-features.component";
const routes: Routes = [
  {
    path: "",
    data: {
      title: "Settings",
    },
    children: [
      {
        path: "user-management",
        component: UserManagementComponent,
        data: {
          title: "Engineering",
        },
        pathMatch: "full",
      },
      {
        path: "sensors-actuators-management",
        component: SensorsActuatorsMangementComponent,
        data: {
          title: "Sensors Actuators Management",
        },
        pathMatch: "prefix",
      },
      {
        path: "machines-management",
        component: MachinesManagementComponent,
        data: {
          title: "Machine Management",
        },
        pathMatch: "full",
      },
      {
        path: "tools-jigs-management",
        component: ToolsJigsManagementComponent,
        data: {
          title: "Tools Jigs Management",
        },
        pathMatch: "full",
      },
      {
        path: "asset-management",
        component: AssetManagementComponent,
        data: {
          title: "Asset Management",
        },
        pathMatch: "full",
      },
      {
        path: "supply-chain-management",
        component: SupplyChainManagementComponent,
        data: {
          title: "Supply Chain Management",
        },
        pathMatch: "full",
      },
      {
        path: "oem-scheduled-preventative-maintenace",
        component: OemScheduledPreventiveMaintenanceComponent,
        data: {
          title: "OEM Scheduled Preventative Maintenance",
        },
        pathMatch: "full",
      },
      {
        path: "predicted-maintenance",
        component: PredictedMaintenanceComponent,
        data: {
          title: "Predicted Maintenance",
        },
        pathMatch: "full",
      },
      {
        path: "supervised-learning",
        component: SupervisedLearningComponent,
        data: {
          title: "Supervised Learning",
        },
        pathMatch: "full",
      },
      {
        path: "unsupervised-learning",
        component: UnSupervisedLearningComponent,
        data: {
          title: "Unsupervised Learning",
        },
        pathMatch: "full",
      },
      {
        path: "reporting-access",
        component: ReportingAccessComponent,
        data: {
          title: "Reporting Access",
        },
        pathMatch: "full",
      },
      {
        path: "Data Path Backup ",
        component: BackupComponent,
        data: {
          title: "Reporting Access",
        },
        pathMatch: "full",
      },
      {
        path: "Restore ",
        component: RestoreComponent,
        data: {
          title: "Restore",
        },
        pathMatch: "full",
      },
      {
        path: "Special Features ",
        component: SpecialFeaturesComponent,
        data: {
          title: "Speacial Features",
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
export class PreferencesRoutingModule {}
