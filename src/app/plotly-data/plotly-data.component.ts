import { Component, HostListener } from "@angular/core";
import { PlotlyService } from "../api/plotly.service";
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
} from "@angular/forms";
import { cilArrowRight } from "@coreui/icons";
import { redraw } from "plotly.js-dist-min";
import { WebSocketSubject } from "rxjs/webSocket";

interface Control {
  [key: string]: [boolean];
}
interface Object {
  [key: string]: [""];
}

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
  selector: "plotly-do",
  templateUrl: "./plotly-data.component.html",
})
//implements AfterViewInit
export class PlotlyDataComponent {
  //Local storage stores the data
  itemList: any[] = [];

  btnCheckGroup!: FormGroup;

  //Show graphs
  graphView: boolean = false;

  searchQuery: string = "";
  searchResults: string[] = [];
  //Filtered Items
  filteredItems!: any[];
  performSearch() {
    return this.filteredItems.filter(
      (item) => item.layout && item.layout.graphTitle === this.searchQuery
    );
  }

  // Different charts depending on the data the component recieves.
  chartTypes: string[] = [
    "Scatter plot",
    "Line chart",
    "Bar chart",
    "Bubble chart",
    "Heatmap",
    "Pie chart",
    "Donut Pie chart",
    "Box plot",
    "Violin plot",
    "Histogram",
    "3D chart",
  ];

  //Icons
  iconsList: any = { cilArrowRight };

  constructor(public fb: FormBuilder, private plotlyService: PlotlyService) {
    // super();
  }

  header: string[] = [];
  controlNames: string[] = [];

  excelData: any[] = [];
  private socket$?: WebSocketSubject<any>;

  ngOnInit() {
    //If local storage has a graph object then get it and set the variables to true
    let userGraph = window.localStorage.getItem("graphs");
    if (userGraph) {
      this.graphView = true;
      this.itemList = [...this.itemList, ...JSON.parse(userGraph)];
      this.filteredItems = this.itemList;
    }

    this.plotlyService.getHeader().subscribe(
      (response) => {
        console.log(response);

        this.header = [...this.header, ...response];

        const control: Control = {};
        for (const names of response) {
          control[names] = [false];
          this.controlNames.push(names);
        }

        // update form group with dynamic controls
        this.btnCheckGroup = this.fb.group(control);
      },
      (error) => {
        throw new Error("Header response failed. ");
      }
    );

    // this.socket$ = new WebSocketSubject("ws://localhost:8080/data");
    // this.socket$.subscribe(
    //   (message) => console.log("Received message:", message),
    //   (error) => console.error("Socket error:", error),
    //   () => console.warn("WebSocket connection closed")
    // );

    const eventSource = new EventSource("http://localhost:8080/data");

    eventSource.addEventListener("message", (event: MessageEvent) => {
      let data: any[] = JSON.parse(event.data);
      // Transform the data.
      const hyphenArray = data.map((item) => {
        return item === "" ? "-" : item;
      });

      // this.excelData = [...this.excelData, ...hyphenArray];
      this.excelData = [...hyphenArray];
      console.log(this.excelData, "Data");
    });
  }

  headerObject: any = {};

  // Options bar values
  // TODO Revise function
  setValue(controlName: string) {
    const prevValue = this.btnCheckGroup.get(controlName)?.value;
    const groupValue = this.btnCheckGroup.getRawValue();
    const newGroupValue = { ...groupValue, [`${controlName}`]: !prevValue };
    this.btnCheckGroup.setValue(newGroupValue);
    console.log(newGroupValue);
    this.headerObject = Object.values(newGroupValue);
  }

  // Sticky scroll options bar
  stickyPosition = "0px";
  private debounceTimeout: number = 0;
  // @HostListener("window:scroll", [])
  onWindowScroll() {
    // If debounceTimeout is not null, clear the previous timeout
    if (this.debounceTimeout) {
      window.clearTimeout(this.debounceTimeout);
    }

    // Set a new timeout to update the sticky position after 10 milliseconds
    this.debounceTimeout = window.setTimeout(() => {
      // Calculate the current position of the window
      const windowScroll =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // Set the position of the sticky div to be the current window position
      this.stickyPosition = `${windowScroll}px`;
    }, 3);
  }

  // Adds graph to view
  addGraph(event: any) {
    let graphType = event.target.textContent;
    var item: any = [];

    // this.itemList = [...this.itemList, this.buildGraph(graphType)];
    this.itemList.unshift(this.buildGraph(graphType));
    window.localStorage.setItem("graphs", JSON.stringify(this.itemList));
  }

  buildGraph(graphType: string): any {
    const trimmedString = graphType.replace(/\s+/g, "");
    if (trimmedString == "Piechart") {
      return {
        data: [
          {
            values: [19, 26, 55],
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie",
            automargin: true,
          },
        ],
        //  layout.newshape.label
        layout: {
          autosize: true,
          graphTitle: "Pie chart",
          margin: { t: 0, b: 0, l: 0, r: 0 },
          showlegend: true,
          legend: {
            x: 0,
            y: -0.2,
            yanchor: "bottom",
          },
        },
      };
    } else if (trimmedString == "DonutPiechart") {
      return {
        data: [
          {
            values: this.generateRandomValues(Math.random() * 5),
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie",
            automargin: true,
            name: "Something",
            textposition: "inside",
            hole: 0.4,
          },
        ],
        layout: {
          autosize: true,
          graphTitle: "Donut Pie Chart",
          margin: { t: 0, b: 0, l: 0, r: 0 },
          showlegend: true,
          legend: {
            x: 0,
            y: -0.2,
            yanchor: "bottom",
          },
        },
        config: {
          editable: true,
        },
      };
    } else if (trimmedString == "Linechart") {
      return {
        data: [
          {
            x: this.getRandomValues(3).x,
            y: this.getRandomValues(3).y,
            type: "scatter",
            mode: "lines",
            automargin: true,
            marker: { color: "red" },
          },
        ],
        layout: {
          autosize: true,
          margin: { t: 0, b: 0, l: 0, r: 0 },
          yanchor: "bottom",
          graphTitle: "Line Chart",
          legend: {
            x: 0,
            y: -0.2,
            yanchor: "bottom",
          },
        },
        editable: true,
      };
    } else if (trimmedString == "Barchart") {
      return {
        data: [
          {
            x: this.getRandomValues(3).x,
            y: this.getRandomValues(3).y,
            type: "bar",
            automargin: true,
            marker: { color: "blue" },
          },
        ],
        layout: {
          autosize: true,
          margin: { t: 0, b: 0, l: 0, r: 0 },
          yanchor: "bottom",
          graphTitle: "Bar Chart",
        },
        editable: true,
      };
    }
  }

  getRandomValues(numValues: number): { x: number[]; y: number[] } {
    const xValues: number[] = [];
    const yValues: number[] = [];

    for (let i = 0; i < numValues; i++) {
      xValues.push(i);
      yValues.push(Math.random() * 10);
    }

    return { x: xValues, y: yValues };
  }

  //Generate random values
  generateRandomValues(numValues: number): number[] {
    let values = [];
    let total = 0;
    for (let i = 0; i < numValues; i++) {
      let value = Math.floor(Math.random() * (100 - total)) + 1;
      total += value;
      values.push(value);
    }
    return values;
  }
  showGraphView() {
    let userGraph = window.localStorage.getItem("graphs");

    this.graphView = true;
  }

  //Filter out the chart views based on recieved API data
  changeView(event: any) {}
}
