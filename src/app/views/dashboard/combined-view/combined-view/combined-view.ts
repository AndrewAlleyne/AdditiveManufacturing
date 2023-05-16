import { CombinedViewComponent } from "./combined-view.component";
import { TableComponentModule } from "../../../../components/table/table.module";
import { NgModule } from "@angular/core";
import { ChartModule } from "../../../../components/chart/chart.modules";
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
} from "@coreui/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { WarningAlertModule } from "src/app/components/warning-alert/warning-alert.module";
import { RTTableComponentModule } from "./../../../../components/rt-table/rt-table.module";

//FIX Theres a reason we label them with component name.Not to confused with third party library names. Fix after demo

@NgModule({
  imports: [
    CommonModule,
    FormModule,
    //Custom components
    TableComponentModule,
    ChartModule,
    WarningAlertModule,
    RTTableComponentModule,
    //Custom components
    ButtonModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    CardModule,
    GridModule,
  ],
  declarations: [CombinedViewComponent],
  exports: [CombinedViewComponent],
})
export class CombinedViewModule {}
