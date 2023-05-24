import { NgModule } from "@angular/core";
import { ChartComponent } from "./chart.component";
import { CommonModule } from "@angular/common";
import { PlotlyComponent, PlotlyModule } from "angular-plotly.js";
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
  NavModule,
  SharedModule,
  TableModule,
  TabsModule,
  TooltipModule,
} from "@coreui/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconModule } from "@coreui/icons-angular";
import { RouterModule } from "@angular/router";
import { TableComponentModule } from "../table/table.module";

@NgModule({
  imports: [
    CommonModule,
    PlotlyDataModule,
    ListGroupModule,
    ModalModule,
    ButtonModule,
    FormModule,
    FormsModule,
    TooltipModule,
    GridModule,
    ReactiveFormsModule,
    CardModule,
    IconModule,
    RouterModule,
    ButtonGroupModule,
    AccordionModule,
    SharedModule,
    PlotlyModule,
    NavModule,
    TabsModule,
    TableComponentModule,
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent],
})
export class ChartModule {}
