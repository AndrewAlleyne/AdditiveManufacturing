import {
  SimpleChanges,
  Component,
  Input,
  OnChanges,
  AbstractType,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  cilChartLine,
  cilChartPie,
  cilBarChart,
  cilChart as cilHeatChart,
} from "@coreui/icons";
import { PlotlyDataService } from "src/app/api/plotly.service";

@Component({
  selector: "data-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  variableForms: FormGroup[] = [];

  public visible = false;
  icons: any = {
    cilChartLine,
    cilHeatChart,
    cilChartPie,
    cilBarChart,
  };

  dynamicControls: { [key: string]: any } = { x: "", y: "" };

  @Input() options!: string[];
  @Input() realTimeData!: { [key: string]: any }[];

  public panes = [
    { name: "Chart", content: "One" },
    { name: "Table", content: "Two" },
  ];

  activePane = 0;

  onTabChange($event: number) {
    this.activePane = $event;
    console.log("onTabChange", $event);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activePane = 1;
      setTimeout(() => {
        this.activePane = 2;
        setTimeout(() => {
          this.activePane = 0;
        }, 3000);
      }, 3000);
    }, 3000);
  }

  printActivity = [
    {
      type: "indicator",
      value: 200,
      delta: { reference: 160 },
      gauge: { axis: { visible: false, range: [0, 250] } },
      domain: { row: 0, column: 0 },
    },
    // {
    //   type: "indicator",
    //   value: 120,
    //   gauge: {
    //     shape: "bullet",
    //     axis: {
    //       visible: false,
    //       range: [-200, 200],
    //     },
    //   },
    //   domain: { x: [0.1, 0.5], y: [0.15, 0.35] },
    // },
    // {
    //   type: "indicator",
    //   mode: "number+delta",
    //   value: 300,
    //   domain: { row: 0, column: 1 },
    // },
    // {
    //   type: "indicator",
    //   mode: "delta",
    //   value: 40,
    //   domain: { row: 1, column: 1 },
    // },
  ];

  printActivitylayout = {
    autosize: true,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    grid: {},
    template: {
      data: {
        indicator: [
          {
            title: { text: "Activity" },
            mode: "number+delta+gauge",
            delta: { reference: 90 },
          },
        ],
      },
    },
  };

  printActivityChartIndicator = [
    // {
    //   type: "indicator",
    //   value: 200,
    //   delta: { reference: 160 },
    //   gauge: { axis: { visible: false, range: [0, 250] } },
    //   domain: { row: 0, column: 0 },
    // },
    // {
    //   type: "indicator",
    //   value: 120,
    //   gauge: {
    //     shape: "bullet",
    //     axis: {
    //       visible: false,
    //       range: [-200, 200],
    //     },
    //   },
    //   domain: { x: [0.1, 0.5], y: [0.15, 0.35] },
    // },
    // {
    //   type: "indicator",
    //   mode: "number+delta",
    //   value: 300,
    //   domain: { row: 0, column: 1 },
    // },
    // {
    //   type: "indicator",
    //   mode: "delta",
    //   value: 40,
    //   domain: { row: 1, column: 1 },
    // },
  ];

  printActivitylayoutIndicator = {
    autosize: true,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    grid: {},
    template: {
      data: {
        indicator: [
          {
            title: { text: "Activity" },
            mode: "number+delta+gauge",
            delta: { reference: 90 },
          },
        ],
      },
    },
  };

  trace1Printer = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [20, 14, 23],
    name: "SF Zoo",
    type: "bar",
  };

  trace2Printer = {
    x: ["Printer Model 1", "Printer Model 2", "Printer Model 3"],
    y: [12, 18, 29],
    name: "Printers Hub",
    type: "bar",
  };

  printerData = [this.trace1Printer, this.trace2Printer];
  printerLayout = {
    barmode: "stack",
    autosize: true,
    margin: { t: 0, b: 0, l: 0, r: 0 },
  };

  bubbleChartTrace = {
    x: [1, 2, 3, 4],

    y: [10, 11, 12, 13],

    mode: "markers",

    marker: {
      size: [40, 60, 80, 100],
    },
  };

  bubbleChartRef = {
    data: [this.bubbleChartTrace],
    layout: {
      title: "Marker Size",
      autosize: true,
      showlegend: false,
    },
  };

  // accordionItems: {
  //   name?: string;
  //   index: number;
  //   type: string;
  //   visible: boolean;
  //   graph: any;
  //   isEditing?: boolean;
  //   plotlyPlot: any;
  //   hasPlot: boolean;
  //   selectedDataKeys: any[];
  // }[] = [];

  // public graph = {
  //   data: [
  //     {
  //       x: [1, 2, 3],
  //       y: [2, 6, 3],
  //       type: "scatter",
  //       mode: "lines+points",
  //       marker: { color: "red" },
  //     },
  //     { x: [1, 2, 3], y: [2, 5, 3], type: "bar" },
  //   ],
  //   layout: { width: 320, height: 240, title: "A Fancy Plot" },
  // };
  // constructor(
  //   private optionsFormBuilder: FormBuilder,
  //   private plotlyAPI: PlotlyDataService
  // ) {
  //   console.log("Real time data", this.realTimeData);
  // }

  // ngOnInit() {
  //   this.createVariableForms();

  //   this.plotlyAPI.getStreamData().subscribe((event) => {
  //     const stream = JSON.parse(event.data);

  //     // Iterate through accordionItems to find the newly created graph
  //     this.accordionItems.forEach((item) => {
  //       console.log("Accordian Object", item);

  //       if (item.plotlyPlot) {
  //         let keys = item.selectedDataKeys;

  //         //Check the graphtype
  //         let graph = this.graphTypes.find(
  //           (graphItem) => graphItem.name === item.type
  //         );
  //         let type;

  //         if (item.type === "Heat Map") {
  //           type = "heatmap";
  //         } else if (item.type === "Line") {
  //           type = "line";
  //         } else if (item.type === "Pie Chart") {
  //           type = "pie";
  //         } else if (item.type === "Bar Chart") {
  //           type = "bar";
  //         }

  //         // Update the data of the graph
  //         console.log(item.type);
  //         item.plotlyPlot = {
  //           data: [
  //             {
  //               values: [...item.plotlyPlot.data[0].x, ...[stream[keys[0]]]],
  //               labels: ["Residential", "Non-Residential", "Utility"],
  //               x: [...item.plotlyPlot.data[0].x, ...[stream[keys[0]]]],
  //               y: [...item.plotlyPlot.data[0].y, ...[stream[keys[1]]]],
  //               z:
  //                 keys.length > 2
  //                   ? [...item.plotlyPlot.data[0].z, ...[stream[keys[2]]]]
  //                   : undefined,
  //               type: type,
  //             },
  //           ],
  //           layout: {
  //             autosize: true,
  //             title: item.name,
  //             margin: { t: 0, b: 0, l: 0, r: 0 },
  //             showlegend: true,
  //             legend: {
  //               x: 0,
  //               y: -0.2,
  //               z: 0,
  //               yanchor: "bottom",
  //             },
  //           },
  //         };
  //       }
  //     });
  //   });
  // }

  // createVariableForms() {
  //   this.variableForms = this.graphTypes.map(() => {
  //     return this.optionsFormBuilder.group({
  //       x: "",
  //       y: "",
  //     });
  //   });
  // }

  // addGraphType() {
  //   const newGraphType = {
  //     x: "",
  //     y: "",
  //     z: "",
  //   };
  //   this.graphTypes.push(newGraphType);
  //   this.createVariableForms();
  // }

  // //containst he name of the points to extract from the api ...point: any[]
  // findDataPoints(point_1: string, point_2: string, graphIndex: number) {
  //   const graphPlot = this.accordionItems[graphIndex]?.plotlyPlot;
  //   let keys = this.accordionItems[graphIndex]?.selectedDataKeys;
  //   this.accordionItems[graphIndex].selectedDataKeys = [point_1, point_2];
  //   this.accordionItems[graphIndex].hasPlot = true;

  //   console.log("Current ", this.accordionItems[graphIndex]);
  //   if (graphPlot) {
  //     keys = [point_1, point_2];
  //     console.log("keys", keys);
  //   } else {
  //     console.log("Invalid graph index or graph object is undefined.");
  //   }
  // }

  // submitGraphOptions(index: number) {
  //   console.log("called");
  //   const validForms = this.variableForms.filter((form) => form.valid);
  //   console.log("This is the form being edited ", this.accordionItems[index]);

  //   let currentGraph = this.accordionItems[index];

  //   if (this.accordionItems[index].plotlyPlot) {
  //     // Reset the graph
  //     this.accordionItems[index].plotlyPlot = this.plotlyPlot;
  //     this.accordionItems[index].hasPlot = false; // should mark as isEditing
  //   }

  //   if (validForms.length === this.variableForms.length) {
  //     // All forms are valid, proceed with submission
  //     const formValues = validForms.map((form) => form.value);
  //     this.findDataPoints(formValues[index].x, formValues[index].y, index);
  //   } else {
  //     // Handle validation errors
  //     console.log("Form is invalid");
  //   }
  // }

  // changeTraceOptions(graph: string) {
  //   // Update the form controls based on the selected graph
  //   const graphTemplate = this.graphTypes.find((item) => item.name === graph);
  //   if (graphTemplate) {
  //     const formGroup = this.optionsFormBuilder.group({
  //       x: graphTemplate.x,
  //       y: graphTemplate.y,
  //     });
  //     this.variableForms[this.index] = formGroup;
  //   }
  // }

  // newGraph(event: any, index: number) {
  //   this.visible = !this.visible;
  //   this.index = index;
  //   this.addGraphType();
  //   if (this.accordionItems && this.accordionItems.length > 0) {
  //     const accordion = this.accordionItems[this.index];
  //     this.buttonText = accordion.graph.name;
  //   }
  // }

  // buttonText: string = "Trace Type";

  // defaultGraph = {
  //   x: "",
  //   y: "",
  // };

  // plotlyPlot = {
  //   data: [
  //     {
  //       x: [],
  //       y: [],
  //     },
  //   ],
  //   layout: {},
  // };

  // graphTypes: any[] = [
  //   {
  //     name: "Line",
  //     alias: "line",
  //     x: "",
  //     y: "",
  //   },
  //   {
  //     name: "Pie Chart",
  //     alias: "piechart",
  //     x: "",
  //   },
  //   {
  //     name: "Bar Chart",
  //     alias: "barchart",
  //     x: "",
  //     y: "",
  //   },
  //   {
  //     name: "Heat Map",
  //     alias: "heatmap",
  //     x: "",
  //     y: "",
  //     z: "",
  //   },
  // ];
  // type: any[] = [];

  // index!: number;

  // editableButtonText!: string;
  // isEditing: boolean = false;

  // editButtonText(accordianIndex: number) {
  //   //Find the accordian
  //   let accordianObject = this.accordionItems[accordianIndex];
  //   accordianObject.isEditing = true;
  // }

  // saveButtonText(accordianIndex: number) {
  //   //Find the accordian
  //   let accordianObject = this.accordionItems[accordianIndex];
  //   accordianObject.isEditing = false;
  // }

  // changeButtonText(event: any) {
  //   let graph = event.target.outerText;
  //   this.accordionItems[this.index].type = graph;

  //   this.type.push(
  //     this.graphTypes.find((typeOfGraph) => typeOfGraph.name === graph)
  //   );
  //   this.changeTraceOptions(graph);
  //   this.visible = !this.visible;

  //   const graphTemplate = this.graphTypes.find((item) => item.name === graph);

  //   //Input group should change here.
  //   if (graphTemplate) {
  //     let g = this.accordionItems[this.index];
  //     let newGraphTemplate = { ...graphTemplate };
  //     delete newGraphTemplate.alias;
  //     g.graph = newGraphTemplate;

  //     const formGroup = this.optionsFormBuilder.group({
  //       x: graphTemplate.x || "",
  //       y: graphTemplate.y || "",
  //       z: graphTemplate.z || "",
  //     });
  //     this.variableForms[this.index] = formGroup;
  //   }
  // }

  // toggleLiveDemo(event: any) {
  //   this.visible = !this.visible;
  // }

  // handleLiveDemoChange(event: any) {
  //   this.visible = event;
  // }

  // addGraphView() {
  //   const newIndex: number = this.accordionItems.length;
  //   let label: string = "Trace-" + newIndex;
  //   this.editableButtonText = label;

  //   let newItem = {
  //     name: label,
  //     type: "",
  //     index: newIndex,
  //     visible: false,
  //     graph: { ...this.defaultGraph } as any, // Copy the defaultGraph object
  //     isEditing: false,
  //     formControlsConfig: null,
  //     plotlyPlot: { ...this.plotlyPlot } as any,
  //     hasPlot: false,
  //     selectedDataKeys: [],
  //   };

  //   //place new view
  //   this.accordionItems.push(newItem);
  // }

  // getObjectKeys(graph: any) {
  //   const keys = Object.keys(graph).filter((item) => item !== "name");
  //   return keys;
  // }
}
