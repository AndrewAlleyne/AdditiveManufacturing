import { CommonModule } from "@angular/common";
import { WarningAlertComponent } from "./warning-alert.component";
import { NgModule } from "@angular/core";
import {
  CardModule,
  DropdownModule,
  GridModule,
  ProgressModule,
  SharedModule,
  WidgetModule,
} from "@coreui/angular";
import { ChartjsModule } from "@coreui/angular-chartjs";
import { IconModule } from "@coreui/icons-angular";
import { Router, RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    GridModule, // Widget Module
    DropdownModule,
    ProgressModule,
    SharedModule,
    WidgetModule,
    IconModule,
    ChartjsModule,
    RouterModule,
    CardModule,
  ],
  declarations: [WarningAlertComponent],
  exports: [WarningAlertComponent],
})
export class WarningAlertModule {}
