import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RealtimeAssetService } from "src/app/api/realtime-asset.service";
import { PlotData } from "plotly.js";

@Component({
  selector: "app-powder",
  templateUrl: "./powder.component.html",
  styleUrls: ["./powder.component.scss"],
})
export class PowderComponent implements OnInit {
  isVisible: boolean = false;
  modelForm!: FormGroup;

  constructor(
    private realTimeAPI: RealtimeAssetService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  graphData: Partial<PlotData>[] = [];
  graphLayout: Partial<any> = {};

  ngOnInit(): void {
    {
      this.modelForm = this.fb.group({
        assetId: [""],
        jobId: [""],
        layerId: [""],
      });
    }
    // Graphj information to update
    this.graphData = [
      {
        x: [1, 2, 3],
        y: [4, 5, 6],
        mode: "markers",
        marker: {
          size: [10, 20, 30], // Sizes of the bubbles
        },
      },
    ];

    // Sample data
    const x1 = [1, 2, 3, 4, 5];
    const y1 = [2, 4, 1, 3, 5];
    const x2 = [3, 4, 5, 6, 7];
    const y2 = [6, 4, 3, 2, 1];

    // Pull the desired range for the data points. DISPLAY ENTIRE DATA
    const xmin = Math.min(...x1, ...x2);
    const ymin = Math.min(...y1, ...y2);
    const xmax = Math.max(...x1, ...x2);
    const ymax = Math.max(...y1, ...y2);

    // Create the data array for each subplot or dataset
    this.graphData = [
      {
        x: x1,
        y: y1,
        mode: "markers",
        type: "scatter",
      },
      {
        x: x2,
        y: y2,
        mode: "lines",
        type: "scatter",
      },
    ];

    //Needs an initial value like 0 for range
    this.graphLayout = {
      margin: { t: 0, r: 0, b: 0, l: 0 },
      xaxis: { range: [0, 6] },
      yaxis: { range: [0, 7] },
      xaxis2: { range: [2, 7] },
      yaxis2: { range: [1, 6] },
    };
  }

  onSubmit() {
    console.log("Form submited");
  }

  generateTableData() {
    console.log("Generating plot data.");
  }

  seeSpecimen() {
    //Route  to new page
    this.router.navigate(["/specimen"]);
  }
}
