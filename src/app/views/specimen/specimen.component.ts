import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Layout, PlotData } from "plotly.js";

@Component({
  selector: "app-specimen",
  templateUrl: "./specimen.component.html",
  styleUrls: ["./specimen.component.scss"],
})
export class SpecimenComponent implements OnInit {
  graphData: Partial<PlotData>[] = [];
  graphLayout: Partial<Plotly.Layout> = {};

  modelForm!: FormGroup;
  isVisible: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.modelForm = this.fb.group({
      assetId: [""],
      layerId: [""],
      jobId: [""],
    });

    this.modelForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  // MODAL
  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  anotherVisible: boolean = false;
  toggleCloseLiveDemo() {
    this.anotherVisible = !this.anotherVisible;
  }

  handleCloseLiveDemoChange(event: any) {
    this.anotherVisible = event;
  }
  //MODAL
  onSubmit() {}

  submitSpecimen() {
    this.visible = false;
  }

  removeSpecimen() {
    console.log("remove speciments");
    this.anotherVisible = false;
  }

  relayout(event: any) {
    console.log(event);
  }

  ngAfterViewInit(): void {
    this.initializeGraph();
  }

  initializeGraph() {
    // Sample data
    const x = [1, 2, 3, 4, 5];
    const y = [2, 4, 1, 3, 5];
    const z = [10, 15, 7, 12, 9];

    // Create the trace for the bubble chart
    const bubbleTrace: Partial<PlotData> = {
      x: x,
      y: y,
      mode: "markers",
      automargin: true,
      marker: {
        size: z,
        sizemode: "diameter",
        sizeref: 0.1,
        color: z,
        colorscale: "Viridis",
      },
    };

    // Set the trace to the graph data
    this.graphData = [bubbleTrace];

    // Set the layout options for the graph
    this.graphLayout = {
      autosize: true,
      title: "Bubble Chart",
      xaxis: {
        title: "X",
      },
      yaxis: {
        title: "Y",
      },
    };
  }
}
