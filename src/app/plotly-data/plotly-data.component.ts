import { Component, ElementRef, ViewChild } from '@angular/core';
// import { HeaderComponent } from '@coreui/angular';
import { PlotlyService } from 'angular-plotly.js';

type PieChart = {
  data: {
    values: number[];
    labels: string[];
    type: string;
    automargin: boolean;
  }[];
  layout: any;
};
type DonutPieChart = {
  data: {
    values: number[];
    labels: string[];
    textposition: string;
    name: string;
    type: string;
    hole: number;
    automargin: boolean;
  }[];
  layout: any;
};

type Graphs = {
  [key: string]: PieChart;
}[];

@Component({
  selector: 'plotly-do',
  templateUrl: './plotly-data.component.html',
})
//implements AfterViewInit
export class PlotlyDataComponent {
  @ViewChild('plotlyChart', { static: false }) plotlyChartRef!: ElementRef;

  //Local storage stores the data
  itemList: PieChart[] = [];

  constructor(private plotlyService: PlotlyService) {
    // super();
    console.log(this.itemList);
  }

  addGraph(event: any) {
    console.log('User wanted', event.target.textContent);
    let graphType = event.target.textContent;

    this.itemList.push(this.buildGraph(graphType));
  }

  buildGraph(graphType: string): PieChart | DonutPieChart {
    console.log('Got ,  ', graphType);
    if (graphType == 'Pie Chart') {
      return {
        data: [
          {
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie',
            automargin: true,
          },
        ],
        //  layout.newshape.label
        layout: {
          autosize: true,
          graphTitle: 'Pie Chart',
          margin: { t: 0, b: 0, l: 0, r: 0 },
          showlegend: true,
          legend: {
            x: 0,
            y: -0.2,
            yanchor: 'bottom',
          },
        },
      };
    } else {
      // TODO: Fix label inside bug
      return {
        data: [
          {
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie',
            automargin: true,
            name: 'Something',
            textposition: 'inside',
            hole: 0.4,
          },
        ],
        //  layout.newshape.label
        layout: {
          autosize: true,
          graphTitle: 'Pie Chart',
          margin: { t: 0, b: 0, l: 0, r: 0 },
          showlegend: true,
          legend: {
            x: 0,
            y: -0.2,
            yanchor: 'bottom',
          },
        },
      };
    }
  }
}
