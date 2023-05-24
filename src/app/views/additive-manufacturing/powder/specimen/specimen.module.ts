import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpecimenComponent } from "./specimen.component";

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalModule,
  NavModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
} from "@coreui/angular";
import { PlotlyModule } from "angular-plotly.js";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    CommonModule,
    CommonModule,
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
    ModalModule,
  ],
  declarations: [SpecimenComponent],
  exports: [],
})
export class SpecimenModule {}
