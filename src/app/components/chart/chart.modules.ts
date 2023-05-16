import { NgModule } from "@angular/core";
import { ChartComponent } from "./chart.component";
import { CommonModule } from "@angular/common";
import { PlotlyComponent } from "angular-plotly.js";
import { PlotlyDataModule } from "src/app/plotly-data/plotly-data.module";

@NgModule({
  imports: [CommonModule, PlotlyDataModule],
  declarations: [ChartComponent],
  exports: [ChartComponent],
})
export class ChartModule {}
