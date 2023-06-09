import { CombinedViewComponent } from "./combined-view.component";
import { TableComponentModule } from "../../../../components/table/table.module";
import { NgModule } from "@angular/core";
import { ChartModule } from "../../../../components/chart/chart.modules";
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavModule,
  TabsModule,
  TableModule,
} from "@coreui/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { WarningAlertModule } from "src/app/components/warning-alert/warning-alert.module";
import { RTTableComponentModule } from "./../../../../components/rt-table/rt-table.module";
import { RouterModule } from "@angular/router";
import { FilterableTableModule } from "src/app/components/filterale-table/ft.module";
import { PlotlyDataComponent } from "src/app/plotly-data/plotly-data.component";
import { PlotlyDataModule } from "src/app/plotly-data/plotly-data.module";
import { PlotlyModule } from "angular-plotly.js";
//FIX Theres a reason we label them with component name.Not to confused with third party library names. Fix after demo

import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  imports: [
    CommonModule,
    FormModule,
    //Custom components
    // TableComponentModule,
    ChartModule,
    WarningAlertModule,
    RTTableComponentModule,
    //Custom components
    ReactiveFormsModule,
    ButtonGroupModule,
    CardModule,
    GridModule,
    NavModule,
    TabsModule,
    DropdownModule,
    RouterModule,
    FilterableTableModule,
    PlotlyModule,
    FormModule,
    MatBadgeModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  declarations: [CombinedViewComponent],
  exports: [CombinedViewComponent],
})
export class CombinedViewModule {}
