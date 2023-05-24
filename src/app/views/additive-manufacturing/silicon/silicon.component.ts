import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlotData } from "plotly.js";
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

  ngOnInit(): void {
    this.modelForm.valueChanges.subscribe((event) => {
      console.log(event);
    });

    this.realtimeAssetAPI.getAssetById().subscribe(
      (response) => {
        this.realTimeAssetResponse = response.content;
      },
      (error) => {
        throw new Error("Data stream off. ");
        this.isVisible = false;
      }
    );

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

  //User makes request. Table populates.
  onSubmit() {
    //Get the table for the data
    this.realtimeAssetAPI.getAssetById().subscribe(
      (value) => {
        console.log(value);
        this.isVisible = true;
      },
      (error) => {
        throw new Error("RealTime data failed");
      }
    );

    // Set up the interval to fetch data every 10 seconds
    setInterval(() => {
      this.realtimeAssetAPI.getAssetById().subscribe((value) => {
        this.realTimeDataSimulation = [
          ...this.realTimeDataSimulation,
          ...[value],
        ]; // Update the data array with the new response
        console.log(this.realTimeDataSimulation);
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
}
