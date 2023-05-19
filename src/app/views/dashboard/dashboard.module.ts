import { CombinedViewModule } from "./combined-view/combined-view/combined-view";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
} from "@coreui/angular";
import { IconModule } from "@coreui/icons-angular";
import { ChartjsModule } from "@coreui/angular-chartjs";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

import { WidgetsModule } from "../widgets/widgets.module";

import { PlotlyDataModule } from "../../plotly-data/plotly-data.module";
import { ChartComponent } from "src/app/components/chart/chart.component";
import { TableComponent } from "src/app/components/table/table.component";
import { CombinedViewComponent } from "./combined-view/combined-view/combined-view.component";

@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    PlotlyDataModule,
    CombinedViewModule,
  ],

  declarations: [DashboardComponent],
  exports: [],
})
export class DashboardModule {}
