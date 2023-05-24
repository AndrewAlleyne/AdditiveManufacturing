import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PlotData } from "plotly.js";

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
    // Sample data
    const x = [1, 2, 3, 4, 5];
    const y = [2, 4, 1, 3, 5];
    const z = [10, 15, 7, 12, 9];

    // Create the trace for the bubble chart
    const bubbleTrace: Partial<PlotData> = {
      x: x,
      y: y,
      mode: "markers",
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
      title: "Bubble Chart",
      xaxis: {
        title: "X",
      },
      yaxis: {
        title: "Y",
      },
    };
  }

  // MODAL
  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  //MODAL
  onSubmit() {}
}
