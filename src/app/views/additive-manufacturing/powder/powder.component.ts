import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RealtimeAssetService } from "src/app/api/realtime-asset.service";
import { PlotData } from "plotly.js";
import { interval, Observable } from "rxjs";
import * as Plotly from "plotly.js";
import { Layout } from "plotly.js";

@Component({
  selector: "app-powder",
  templateUrl: "./powder.component.html",
  styleUrls: ["./powder.component.scss"],
})
export class PowderComponent implements OnInit {
  isVisible: boolean = false;
  modelForm!: FormGroup;

  constructor(
    private realtimeAssetAPI: RealtimeAssetService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  plotly_x: any[] = [];
  plotly_y: any[] = [];
  data: any[] = [];

  graphData: Partial<PlotData>[] = [];
  graphLayout: Partial<any> = {};
  timeSeriesLayout: Partial<any> = {};
  realTimeAssetResponse: any[] = [];
  collectX: any[] = [];
  collectY: any[] = [];

  tableXYZ: any[] = [];

  obj = {
    ts: [] as number[],
    x: [] as number[],
    y: [] as number[],
    z: [] as number[],
    z_variance: [] as number[],
  };

  ngOnInit(): void {
    {
      this.modelForm = this.fb.group({
        assetId: [""],
        jobId: [""],
        layerId: [""],
      });

      this.modelForm.valueChanges.subscribe((event) => {
        console.log(event);
      });

      console.log(this.collectX);
    }

    // Create the data array for each subplot or dataset

    //Needs an initial value like 0 for range
    this.graphLayout = {
      margin: { t: 0, r: 0, b: 0, l: 0 },
      showLegend: true,
      xaxis: {
        type: "text",
        title: "X",
      },
      yaxis: {
        type: "text",
        title: "Y",
      },
    };

    this.timeSeriesLayout = {
      margin: { t: 0, r: 0, b: 0, l: 0 },
      showLegend: true,
      xaxis: {
        title: "Time",
        type: "time",
      },
      yaxis: {
        type: "text",
        range: [86.8700008333, 138.870004167],

        title: "Z",
      },
    };
  }

  z_variance: any[] = [];
  plotly_z: any[] = [];
  timestamp: any[] = [];

  deviationZ: any[] = [];
  deviation_z: any = {
    z: [],
    z_deviation: [],
  };

  params = {
    name: [] as string[],
    value: [] as number[],
    status: [] as string[],
  };

  onSubmit() {
    let assetId: number = this.modelForm.get("assetId")?.value;

    let s = new Set();

    if (assetId == 70) {
      console.log("You selected ", assetId);

      let idx = 5;
      this.realtimeAssetAPI.getAssetById().subscribe(
        (response) => {
          this.realTimeAssetResponse = response.content;
          this.isVisible = true;

          this.realTimeAssetResponse.forEach((item) => {
            this.timestamp = [...item.snapshot.ts, ...this.timestamp];

            console.log(this.timestamp);
            setInterval(() => {
              item.snapshot.param.forEach((d: any) => {
                if (d.name != "X" && d.name != "Y" && idx >= 0) {
                  this.params.name.push(d.name);
                  this.params.value.push(d.value);
                  this.params.status.push(d.status);
                  idx--;
                }

                if (d.name === "X") {
                  this.plotly_x = [...this.plotly_x, ...[d.value]];
                }
                if (d.name === "Y") {
                  this.plotly_y = [...this.plotly_y, ...[d.value]];
                }
                if (d.name == "Z") {
                  this.plotly_z = [...this.plotly_z, ...[d.value]];
                  this.deviation_z.z.push(d.value);
                }
                if (d.name == "z_variances") {
                  this.deviation_z.x.push(d.value);
                }

                this.data = [
                  {
                    x: this.plotly_x,
                    y: this.plotly_y,
                    type: "scatter",
                    mode: "lines",
                  },
                ];

                this.z_variance = [
                  {
                    x: this.plotly_x,
                    y: this.timestamp,
                    type: "scatter",
                    mode: "lines",
                  },
                ];

                this.collectY.push(d.value);
              });
            }, 5000);
          });

          this.realTimeAssetResponse.forEach((item) => {
            this.obj.ts.push(item.snapshot.ts);
            item.snapshot.param.forEach((d: any) => {
              if (d.name === "X") {
                this.obj.x.push(d.value);
              }
              if (d.name === "Y") {
                this.obj.y.push(d.value);
              }
              if (d.name == "Z") {
                this.obj.z.push(d.value);
              }
              if (d.name == "z_variance") {
                this.obj.z_variance.push(d.value);
              }
            });
          });
        },
        (error) => {
          this.isVisible = false;
          throw new Error("Data stream off. ");
        }
      );
    } else {
      throw Error("Please use a correct value");
    }

    console.log(this.tableXYZ);
  }

  generateTableData() {
    console.log("Generating plot data.");
  }

  seeSpecimen() {
    //Route  to new page
    this.router.navigate(["/specimen"]);
  }
}
