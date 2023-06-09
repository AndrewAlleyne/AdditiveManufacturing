import {
  AfterViewChecked,
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { PlotlyDataService } from "src/app/api/plotly.service";
import { Color, PlotlyHTMLElement } from "plotly.js";
import { PlotlyService } from "angular-plotly.js";

@Component({
  selector: "combined-view",
  templateUrl: "./combined-view.component.html",
  styleUrls: ["./combined-view.component.scss"],
})
export class CombinedViewComponent {
  plot!: string;

  simpleContent = "S";
  overlap = true;
  disabled = true;

  constructor(
    private api: PlotlyDataService,
    private plotlyService: PlotlyService
  ) {
    this.plot = "myChart";
  }

  header!: any[];
  noConnection: boolean = true;
  colors = [
    "blue",
    "green",
    "red",
    "yellow",
    "orange",
    "purple",
    "pink",
    "teal",
    "cyan",
    "magenta",
    "brown",
    "gray",
  ];
  trace: any;

  arrayOfTraces: any[] = [];
  timeSeries: any[] = [];

  counterData: any = [];
  counterDataLayout!: any;

  layout!: any;

  ngOnInit() {
    this.trace = {
      x: [],
      y: [],
      legendgroup: "Group A",
      type: "bar",
      marker: {
        color: [
          "blue",
          "green",
          "red",
          "yellow",
          "orange",
          "purple",
          "pink",
          "teal",
          "cyan",
          "magenta",
          "brown",
          "gray",
        ],
      },
    };

    this.header = [];
    this.api.getHeader().subscribe((item) => {
      this.header = item;
    });

    let modelCounter = 0;
    this.api.getStreamData().subscribe((item) => {
      let data: any = JSON.parse(item);
      this.noConnection = false;

      // Filter header
      modelCounter++;
      let filteredHeader = this.header.filter((item) => {
        return item != "Time Stamp" && item != "Product ID";
      });

      let timeStamp = data["Time Stamp"];

      //Loop over header and get each item
      filteredHeader.forEach((title: any, index: number) => {
        const existingTrace = this.arrayOfTraces.find(
          (trace) => trace.name === title
        );

        this.counterData = [
          {
            type: "indicator",
            mode: "number+delta",
            value: modelCounter,
            number: { prefix: "" },
            // delta: { position: "top", reference: 320 },
            domain: { x: [0, 1], y: [0, 1] },
          },
        ];

        if (existingTrace) {
          // Update existing trace with new data
          existingTrace.x.push(timeStamp);
          existingTrace.y = [...existingTrace.y, ...[data[title]]];
        } else {
          // Assign a unique color to each trace
          let colorIndex = index % this.colors.length;
          let color: Color = this.colors[colorIndex];

          // Create a new trace object with the assigned color and legend group
          let trace = {
            x: [timeStamp],
            y: [data[title]],
            type: "bar",
            name: title,
            marker: {
              color: color,
            },
          };

          this.arrayOfTraces.push(trace);
        }
      });

      this.trace = {
        x: [],
        y: [],
        legendgroup: "",
        type: "bar",
        marker: {
          color: "",
        },
      };
    });
  }

  updatePlotly(event: any) {
    console.log(event);
    const newData = [
      {
        x: [1, 2, 3, 4, 5],
        y: [30, 20, 10, 20, 30],
        type: "scatter",
        mode: "lines+markers",
      },
    ];
    console.log(this.plot);
  }

  ngAfterViewInit() {
    let selectorOptions = {
      buttons: [
        {
          step: "month",
          stepmode: "backward",
          count: 1,
          label: "1m",
        },
        {
          step: "month",
          stepmode: "backward",
          count: 6,
          label: "6m",
        },
        {
          step: "year",
          stepmode: "todate",
          count: 1,
          label: "YTD",
        },
        {
          step: "year",
          stepmode: "backward",
          count: 1,
          label: "1y",
        },
        {
          step: "all",
        },
      ],
    };

    this.layout = {
      barmode: "stack",
      autosize: true,
      margin: { r: 0, t: 0, b: 0, l: 0 },
      xaxis: {
        type: "date",
        rangeselector: selectorOptions,
        rangeslider: {},
        autorange: true,
      },
      yaxis: {
        title: "Values",
        fixedrange: true,
        autorange: true,
      },
      title: "Time Series Bar Chart",
    };

    this.counterDataLayout = {
      margin: { t: 0, b: 0, l: 0, r: 0 },
    };
  }
}

interface MotorData {
  "Time Stamp": string;
  "Product ID": string;
  "Air temperature [K]": string;
  "Ideal Value - Air Temp": string;
  "Process temperature [K]": string;
  "Ideal Value - Process Temp": string;
  "Rotational speed [rpm]": string;
  "Ideal Value - RPM": string;
  "Torque [Nm]": string;
  "Ideal Value - Torque ": string;
  "Tool wear [min]": string;
  "Ideal Tool Wear ": string;
}
