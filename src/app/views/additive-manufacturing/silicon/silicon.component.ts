import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlotData } from "plotly.js";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";
import { RealtimeAssetService } from "../../../api/realtime-asset.service";
// import * as Papa from "papaparse";
// import { saveAs } from "file-saver";
@Component({
  selector: "app-silicon",
  templateUrl: "./silicon.component.html",
  styleUrls: ["./silicon.component.scss"],
})
export class SiliconComponent implements OnInit, AfterViewInit {
  modelForm!: FormGroup;
  isVisible = false;
  realTimeAssetResponse!: any[];

  graphData: any[] = [];
  tensionGraphData: any[] = [];
  elongationGraphData: any[] = [];

  graphLayout: any = {};
  tensionLayout: any = {};
  elongationLayout: any = {};

  historicalForm!: FormGroup;
  tableData: any[] = [];
  filteredEventStream: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private realtimeAssetAPI: RealtimeAssetService,
    private historicalFormBuilder: FormBuilder
  ) {
    this.modelForm = formBuilder.group({
      assetID: ["", Validators.required],
      identifierName: ["", Validators.required],
    });
  }

  /*
  "name": "BED_TEMP",
                "node": "1",
                "status": "OK",
                "value": "70",
                "value_type": "INTEGER"
            },
            {
                "name": "ROUGHNESS_PRED",
                "node": "1",
                "status": "OK",
                "value": "168.45828999999964",
                "value_type": "INTEGER"
            },
            {
                "name": "TENSION_STRENGTH",
                "node": "1",
                "status": "OK",
                "value": "10",
                "value_type": "INTEGER"
            },
            {
                "name": "JOB",
                "node": "1",
                "status": "OK",
                "value": "2",
                "value_type": "INTEGER"
            },
            {
                "name": "NOZZLE_TEMP",
                "node": "1",
                "status": "OK",
                "value": "230",
                "value_type": "INTEGER"
            },
            {
                "name": "MATERIAL",
                "node": "1",
                "status": "OK",
                "value": "0",
                "value_type": "INTEGER"
            },
            {
                "name": "INFILL_PATTERN",
                "node": "1",
                "status": "OK",
                "value": "0",
                "value_type": "INTEGER"
            },
            {
                "name": "ELONGATION",
                "node": "1",
                "status": "OK",
                "value": "0.9",
                "value_type": "INTEGER"
            },
            {
                "name": "MODEL",
                "node": "1",
                "status": "OK",
                "value": "1",
                "value_type": "INTEGER"
            },
            {
                "name": "ELONGATION_PRED",
                "node": "1",
                "status": "OK",
                "value": "9.429739999999935",
                "value_type": "INTEGER"
            },
            {
                "name": "PRINT_SPEED",
                "node": "1",
                "status": "OK",
                "value": "120",
                "value_type": "INTEGER"
            },
            {
                "name": "INFILL_DENSITY",
                "node": "1",
                "status": "OK",
                "value": "50",
                "value_type": "INTEGER"
            },
            {
                "name": "ROUGHNESS",
                "node": "1",
                "status": "OK",
                "value": "265",
                "value_type": "INTEGER"
            },
            {
                "name": "WALL_THICKNESS",
                "node": "1",
                "status": "OK",
                "value": "1",
                "value_type": "INTEGER"
            },
            {
                "name": "TENSION_STRENGTH_PREDD",
                "node": "1",
                "status": "OK",
                "value": "4.549901700000088",
                "value_type": "INTEGER"
            },
            {
                "name": "FAN_SPEED",
                "node": "1",
                "status": "OK",
                "value": "50",
                "value_type": "INTEGER"
            },
            {
                "name": "LAYER_HEIGHT",
                "node": "1",
                "status": "OK",
                "value": "0.1",
                "value_type": "INTEGER"

  */

  ngAfterViewInit() {
    this.graphLayout = {
      showlegend: true,
      title: "Roughness Time Series",
      xaxis: {
        type: "number",
        title: "Value",
      },
      yaxis: {
        title: "Time",
      },
      legend: {
        x: 4,
        xanchor: "right",
        y: 1,
      },
    };

    this.tensionLayout = {
      showlegend: true,
      title: "Tension Time Series",
      xaxis: {
        type: "number",
        title: "Value",
      },
      yaxis: {
        title: "Time",
      },
      legend: {
        x: 4,
        xanchor: "right",
        y: 1,
      },
    };
    this.elongationLayout = {
      showlegend: true,
      title: "Elongation Time Series",
      xaxis: {
        type: "number",
        title: "Value",
      },
      yaxis: {
        title: "Time",
      },
      legend: {
        x: 4,
        xanchor: "right",
        y: 1,
      },
    };
  }

  header: any[] = [];
  data: any = {
    name: [],
    value: [],
  };

  ngOnInit(): void {
    this.modelForm.valueChanges.subscribe((event) => {
      console.log(event);
    });

    this.realtimeAssetAPI.getStreamData(71).subscribe((resp)=>{

      console.log(resp.snapshot.param)
    });

    //Table filtering by date
    this.historicalForm = this.historicalFormBuilder.group({
      fromDate: [""],
      endDate: [""],
      optionsData: [""],
    });
    this.historicalForm.valueChanges.subscribe((value) => {
      console.log("Form value changed:", value);

      const startDate = value.fromDate;
      const endDate = value.endDate;

      // Filter events based on the start and end dates
      const filteredEvents = this.tableData.filter((event) => {
        let parsedData = JSON.parse(event.data);
        let eventDate = new Date(parsedData.Date).toISOString();
        let startDateObj = new Date(startDate).toISOString();
        let endDateObj = new Date(endDate).toISOString();

        console.log(this.tableData);

        // Extract the date part from the event timestamp

        return eventDate >= startDateObj && eventDate <= endDate;
      });

      this.filteredEventStream = [
        ...this.filteredEventStream,
        ...filteredEvents,
      ];
      console.log(filteredEvents);
    });
  }

  realTimeDataSimulation: any[] = [];

  tableObject = {
    bedTemp: [] as string[],
  };

  val: any[] = [];
  chartVal: any[] = [];
  bedTempData: any[] = [];

  bedTemp!: number;
  roguhness!: number;
  tensionStrength!: number;
  job!: number;

  obj = {
    name: [],
    value: [],
  };

  realAsset71: any[] = [];
  //User makes request. Table populates.

  onSubmit() {
    let assetId: number = this.modelForm.get("assetId")?.value; //Get the table for the data
    let identifierName = this.modelForm.get("identifierName")?.value;

    console.log(assetId, assetId);
    //Get the table for the data
    this.realtimeAssetAPI.getStreamData(71).subscribe(
      (value) => {
        console.log("Values", value);
        this.isVisible = true;
        console.log(value.snapshot.par);
        value.snapshot.params.this.data.name.push(value.name);
        this.data.name.push(value.value);

        value.snapshot.param.forEach((item: any) => {
          if (item.name == "BED_TEMP") {
            this.bedTemp = item.value;
          }
          if (item.name == "ROUGHNESS_PRED") {
            console.log(item.value);
            this.roguhness = item.value;
          }

          if (item.name == "TENSION_STRENGTH") {
            this.tensionStrength = item.name;
          }
        });
      },
      (error) => {
        throw new Error("RealTime data failed");
      }
    );

    // Set up the interval to fetch data every 10 seconds
    setInterval(() => {
      this.realtimeAssetAPI.getStreamData(71).subscribe((value) => {
        this.val = value.snapshot.params.map((item: any) => {
          return item.name;
        });

        this.chartVal = value.snapshot.params.map((item: any) => {
          return item.value;
        });
      });
    }, 10000); // 10 seconds interval

    // Fetch or create your time series data
    const timeSeriesData = [
      { x: new Date("2023-05-20T00:00:00"), y: 10 },
      { x: new Date("2023-05-21T00:00:00"), y: 20 },
      { x: new Date("2023-05-22T00:00:00"), y: 15 },
      // Add more data points...
    ];

    // Sort the data by date to ensure it's plotted correctly
    const sortedData = timeSeriesData.sort((a: any, b: any) => a.x - b.x);

    // Create the smooth curve using interpolation
    const curve = "spline";

    //PULL DATA FROM DB
    // Create the trace for the time series
    const timeSeriesTrace: Partial<PlotData> = {
      x: sortedData.map((dataPoint) => dataPoint.x),
      y: sortedData.map((dataPoint) => dataPoint.y),
      type: "scatter",
      mode: "lines",
      line: {
        shape: curve,
      },
    };

    // Set the trace to the graph data
    this.graphData = [timeSeriesTrace];
    this.tensionGraphData = [timeSeriesData];
    this.elongationGraphData = [timeSeriesData];
  }

  generateDates() {}
  processAssetId(data: any[]) {
    let set = new Set();

    data.map((item) => {
      set.add(item.assetId);
    });

    return Array.from(set);
  }

  //Downloads CSV
  downloadCSV() {
    // const tableData = [
    //   { name: "John", age: 30, city: "New York" },
    //   { name: "Jane", age: 25, city: "London" },
    // ];
    // const csv = Papa.unparse(tableData);
    // const csvBlob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    // // Date and Time range
    // saveAs(csvBlob, "table_data.csv");
  }

  historicalIsVisible: boolean = false;
  generateTableData() {
    if (this.historicalIsVisible) {
      this.historicalIsVisible = false;
    }
    console.log("Generating table data.s");
    this.historicalIsVisible = true;
  }

  //PLOITLDY INSERT
  bedTempGraph = [
    {
      type: "indicator",
      mode: "number+delta",
      value: 70,
      delta: { reference: 65, position: "top" },
      domain: { x: [0, 1], y: [0, 1] },
    },
  ];

  realTimeLayout = {
    paper_bgcolor: "lightgray",
    width: 600,
    height: 200,
    margin: { t: 0, b: 0, l: 0, r: 0 },
  };

  //PLOITLDY INSERT
  tensionGraph: any = [
    {
      type: "indicator",
      mode: "number+delta",
      value: 10,
      delta: { reference: 8, position: "top" },
      domain: { x: [0, 1], y: [0, 1] },
    },
  ];

  tension_Layout = {
    paper_bgcolor: "lightgray",
    width: 600,
    height: 200,
    margin: { t: 0, b: 0, l: 0, r: 0 },
  };
}
