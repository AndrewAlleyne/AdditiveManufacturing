import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpecimenComponent } from "./specimen.component";

import {
  ButtonGroupModule,
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
    ButtonGroupModule,
  ],
  declarations: [SpecimenComponent],
  exports: [],
})
export class SpecimenModule {}
