import * as PlotlyJS from 'plotly.js-dist-min';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyDataComponent } from './plotly-data.component';
import { CommonModule } from '@angular/common';
import {
    ButtonGroupModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    NavModule,
    TooltipModule,
} from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ReactiveFormsModule } from '@angular/forms';

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
        NavModule,
        FormModule,
        TooltipModule,
        ReactiveFormsModule,
    ],
    declarations: [PlotlyDataComponent],
    exports: [PlotlyDataComponent],
})
export class PlotlyDataModule {}
