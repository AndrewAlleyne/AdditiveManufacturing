import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import * as PlotlyJS from "plotly.js-dist-min";
import { PlotlyModule, PlotlyService } from "angular-plotly.js";
import { PlotlyDataService } from "src/app/api/plotly.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PlotlyHTMLElement } from "plotly.js-dist-min";
PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: "app-asset-info",
  templateUrl: "./asset-info.component.html",
  styleUrls: ["./asset-info.component.scss"],
})
export class AssetInfoComponent {
  @ViewChild("graphDiv", { static: false })
  graphDiv!: ElementRef;

  searchForm!: FormGroup;
  modelIdentifier!: FormGroup;

  filteredList: string[] = [];
  addedToList: string[] = [];

  plotly_x: number[] = [];
  plotly_y: number[] = [];

  //Plotly data
  data: any[] = [];
  nextData: any[] = [];

  layout: any = {
    autosize: true,
    title: "Donut Pie Chart",
    margin: { t: 0, b: 0, l: 0, r: 0 },
    showlegend: true,
    legend: {
      x: 0,
      y: -0.2,
      yanchor: "bottom",
    },
  };

  graph: any[] = [];
  constructor(
    private searchBarFormBuilder: FormBuilder,
    private modelIdentifierFormBuilder: FormBuilder,
    private http: HttpClient,
    private plotlyService: PlotlyService,
    private plotlyAPI: PlotlyDataService
  ) {}

  isLoading: boolean = false;
  ngOnInit() {
    this.modelIdentifier = this.modelIdentifierFormBuilder.group({
      modelName: this.modelIdentifierFormBuilder.control(""),
      identifierName: this.modelIdentifierFormBuilder.control(""),
    });

    //Off canvas search bar
    this.searchForm = this.searchBarFormBuilder.group({
      searchDataStream: [""],
    });

    this.searchForm.controls["searchDataStream"].valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchTerm: string) => {
        this.filteredList = this.listGroup.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
  }

  // Makes post request to backend. Starts real time streaming
  onOptionSubmit() {
    console.log(this.modelIdentifier.value);

    this.isLoading = true;
    this.postData(this.modelIdentifier.value).subscribe({
      next: (response) => {
        console.log(response, "Data posted.");
        this.streamData();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  //Stream data from the backend
  streamData() {
    // const eventSource = new EventSource("http://localhost:8080/line");

    const nextEventSource = new EventSource("http://localhost:8080/scatter");

    //Check if the data source being passed in matches the name within the API
    nextEventSource.addEventListener("message", (response: MessageEvent) => {
      let data: any = JSON.parse(response.data);

      //  Transform the data.
      this.plotly_x = [...this.plotly_x, ...[data.x]];
      this.plotly_y = [...this.plotly_y, ...[data.y]];

      this.data = [
        {
          x: this.plotly_x,
          y: this.plotly_y,
          type: "scatter",
          mode: "markers",
        },
      ];

      console.log(this.data);
    });
  }
  //Demo list group
  listGroup: string[] = ["M14860", "L47187", "M14865"];

  filterListGroup() {
    this.searchForm.valueChanges.subscribe((value) => {
      console.log("Form value:", value);
    });
  }

  addItem(item: string) {
    console.log(item);
    // Add item to the addedToList array
    this.addedToList.unshift(item);

    // Remove item from the filteredList array
    const elementIdx = this.filteredList.findIndex((thing) => thing === item);
    if (elementIdx !== -1) {
      this.filteredList.splice(elementIdx, 1);
      this.listGroup.splice(elementIdx, 1);
    }
  }

  removeItem(item: string) {
    console.log(item);

    // Remove item from the addedToList array
    this.addedToList = this.addedToList.filter((thing) => thing !== item);

    // Add item back to the filteredList array
    this.filteredList.unshift(item);
    this.listGroup.unshift(item);

    console.log(this.filteredList);
  }

  onFormSubmit() {
    // Bring added to list into the view using plotly.
    console.log("Submitted form data", this.addedToList);
  }

  ngAfterViewInit() {
    // Plotly.newPlot(this.graphDiv, data, layout);
  }

  // Generates Table data from the selected parameters.
  generateTableData() {
    console.log("Generating some data using the form controller.");
  }

  // Generates a CSV based on the table data.
  downloadCSV() {
    console.log("Generate a CSV using the data from the table.");
  }

  postData(value: any): Observable<any> {
    const url = "http://localhost:8080/model";

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    return this.http.post(url, value, { headers });
  }

  updateGraph() {
    const eventSource = new EventSource("http://localhost:8080/scatter");

    //Check if the data source being passed in matches the name within the API
    eventSource.addEventListener("message", (response: MessageEvent) => {
      let data: any = JSON.parse(response.data);

      //  Transform the data.
      this.plotly_x = [...this.plotly_x, ...[data.x]];
      this.plotly_y = [...this.plotly_y, ...[data.y]];

      this.data = [
        {
          x: this.plotly_x,
          y: this.plotly_y,
          type: data.type,
          mode: "markers",
        },
      ];

      console.log(this.data);
    });
    console.log("Upates happeneing in GRAPH");
  }
}
