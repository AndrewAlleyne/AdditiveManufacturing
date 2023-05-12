import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PreferencesRoutingModule } from "./s-r.module";

// Children of settings
import { SupplyChainManagementComponent } from "./supply-chain-management/supply-chain-management.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { AssetManagementComponent } from "./asset-management/asset-management.component";
import { BackupComponent } from "./data-path/backup/backup.component";
import { MachinesManagementComponent } from "./machines-management/machines-management.component";
import { OemScheduledPreventiveMaintenanceComponent } from "./oem-scheduled-preventive-maintenance/oem-scheduled-preventive-maintenance.component";
import { PredictedMaintenanceComponent } from "./predicted-maintenance/predicted-maintenance.component";
import { ReportingAccessComponent } from "./reporting-access/reporting-access.component";
import { RestoreComponent } from "./restore/restore.component";
import { SensorsActuatorsMangementComponent } from "./sensors-actuators-mangement/sensors-actuators-mangement.component";
import { SpecialFeaturesComponent } from "./special-features/special-features.component";
import { SupervisedLearningComponent } from "./supervised-learning/supervised-learning.component";
import { UnSupervisedLearningComponent } from "./un-supervised-learning/un-supervised-learning.component";
import { ToolsJigsManagementComponent } from "./tools-jigs-management/tools-jigs-management.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  BadgeModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ModalModule,
  NavModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
  AvatarModule,
  ListGroupModule,
  TooltipModule,
} from "@coreui/angular";
import { IconModule } from "@coreui/icons-angular";
import { CompositeMenuComponent } from "./composite-menu/composite-menu.component";
import { SettingsComponent } from "./settings.component";
import { TestComponent } from "../test/test.component";
import { ButtonsModule } from "../buttons/buttons.module";
import { PdfViewerComponent } from "../../views/shared-components/pdf-viewer/pdf-viewer.component";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { ChartjsModule } from "@coreui/angular-chartjs";

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    TabsModule,
    TooltipModule,
    RouterModule,
    CardModule,
    FormModule,
    CardModule,
    ChartjsModule,
    GridModule,
    ReactiveFormsModule,
    TableModule,
    UtilitiesModule,
    BadgeModule,
    ButtonsModule,
    ButtonModule,
    IconModule,
    DropdownModule,
    AvatarModule,
    TableModule,
    ModalModule,
    ListGroupModule,
    PreferencesRoutingModule,
    NgxExtendedPdfViewerModule,
  ],
  declarations: [
    SettingsComponent,
    TestComponent,
    SupplyChainManagementComponent,
    UserManagementComponent,
    AssetManagementComponent,
    BackupComponent,
    OemScheduledPreventiveMaintenanceComponent,
    PredictedMaintenanceComponent,
    ReportingAccessComponent,
    RestoreComponent,
    SensorsActuatorsMangementComponent,
    SpecialFeaturesComponent,
    SupervisedLearningComponent,
    UnSupervisedLearningComponent,
    ToolsJigsManagementComponent,
    MachinesManagementComponent,
    CompositeMenuComponent,
    PdfViewerComponent,
  ],
  exports: [SettingsComponent],
})
export class PreferencesModule {}
