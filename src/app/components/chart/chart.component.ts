import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  cilChartLine,
  cilChartPie,
  cilBarChart,
  cilChart as cilHeatChart,
} from "@coreui/icons";

@Component({
  selector: "data-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent {
  variableForm!: FormGroup;
  public visible = false;
  icons: any = {
    cilChartLine,
    cilHeatChart,
    cilChartPie,
    cilBarChart,
  };

  constructor(private optionsForm: FormBuilder) {}

  ngOnInit() {
    this.variableForm = this.optionsForm.group({
      x: [""],
      y: [""],
    });
  }

  buttonText: string = "Trace Type";

  defaultGraph = [
    {
      x: "",
      y: "",
    },
  ];

  graphTypes = [
    {
      name: "Line",
      x: "",
      y: "",
    },
    {
      name: "PieChart",
      x: "",
      y: "",
    },
    {
      name: "Bar",
      x: "",
      y: "",
    },
    {
      name: "HeatMap",
      x: "",
      y: "",
      z: "",
    },
  ];

  changeButtonText(event: any) {
    console.log(event.target.outerText);
    let graph = event.target.outerText;
    this.changeTraceOptions(graph);
    this.buttonText = graph;
    this.visible = !this.visible;

    //Search and populate respective table
  }

  changeTraceOptions(graph: string) {
    console.log("called");
  }

  accordionItems: { index: number; visible: boolean }[] = [];

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  addGraphView() {
    const newIndex = this.accordionItems.length;
    const newItem = { index: newIndex, visible: false };
    this.accordionItems.push(newItem);
  }
}
