import { NgModule } from "@angular/core";
import { ChartComponent } from "./chart.component";
import { CommonModule } from "@angular/common";
import { PlotlyComponent } from "angular-plotly.js";
import { PlotlyDataModule } from "src/app/plotly-data/plotly-data.module";
import {
  AccordionModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalModule,
  SharedModule,
  TooltipModule,
} from "@coreui/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { IconModule } from "@coreui/icons-angular";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    PlotlyDataModule,
    ListGroupModule,
    ModalModule,
    ButtonModule,
    FormModule,
    TooltipModule,
    GridModule,
    ReactiveFormsModule,
    CardModule,
    IconModule,
    RouterModule,
    ButtonGroupModule,
    AccordionModule,
    SharedModule,
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent],
})
export class ChartModule {}
