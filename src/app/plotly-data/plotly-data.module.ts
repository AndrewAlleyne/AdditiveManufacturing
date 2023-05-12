import * as PlotlyJS from "plotly.js-dist-min";
import { NgModule } from "@angular/core";
import { PlotlyModule } from "angular-plotly.js";
import { PlotlyDataComponent } from "./plotly-data.component";
import { CommonModule } from "@angular/common";
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavModule,
  TableModule,
  TooltipModule,
} from "@coreui/angular";

import { TableComponentModule } from "../components/table/table.module";
import { RouterModule } from "@angular/router";
import { ChartjsModule } from "@coreui/angular-chartjs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconModule } from "@coreui/icons-angular";

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  imports: [
    CommonModule,

    CardModule,
    GridModule,
    PlotlyModule,
    DropdownModule,
    RouterModule,
    ChartjsModule,
    ButtonGroupModule,
    ButtonModule,
    NavModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    ReactiveFormsModule,
    IconModule,
    TableModule,
    TableComponentModule,
  ],
  declarations: [PlotlyDataComponent],
  exports: [PlotlyDataComponent],
})
export class PlotlyDataModule {}
