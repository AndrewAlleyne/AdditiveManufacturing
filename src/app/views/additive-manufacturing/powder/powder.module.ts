import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PowderComponent } from "../powder/powder.component";
import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
} from "@coreui/angular";

import { ReactiveFormsModule } from "@angular/forms";
import { PlotlyModule } from "angular-plotly.js";
import { Router, RouterModule } from "@angular/router";
import { ListGroupsComponent } from "../../base/list-groups/list-groups.component";

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    CardModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    TableModule,
    UtilitiesModule,
    PlotlyModule,
    NavModule,
    RouterModule,
    TabsModule,
    ListGroupModule,
  ],
  declarations: [PowderComponent],
  exports: [],
})
export class PowderModule {}
