import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SiliconComponent } from "./silicon.component";
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
import { RouterModule } from "@angular/router";

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
  declarations: [SiliconComponent],
  exports: [],
})
export class SiliconeModule {}
