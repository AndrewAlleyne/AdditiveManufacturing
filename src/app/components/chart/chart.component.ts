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
      name: "Pie Chart",
      x: "",
      y: "",
    },
    {
      name: "Bar Chart",
      x: "",
      y: "",
    },
    {
      name: "Heat Map",
      x: "",
      y: "",
      z: "",
    },
  ];
  type: any[] = [];

  index!: number;

  accordionItems: {
    name?: string;
    index: number;
    visible: boolean;
    graph: any;
    isEditing?: boolean;
  }[] = [];

  editableButtonText!: string;
  isEditing: boolean = false;

  editButtonText(accordianIndex: number) {
    //Find the accordian
    let accordianObject = this.accordionItems[accordianIndex];
    accordianObject.isEditing = true;
  }

  saveButtonText(accordianIndex: number) {
    //Find the accordian
    let accordianObject = this.accordionItems[accordianIndex];
    accordianObject.isEditing = false;
  }

  changeButtonText(event: any) {
    let graph = event.target.outerText;

    this.type.push(
      this.graphTypes.find((typeOfGraph) => typeOfGraph.name === graph)
    );

    this.changeTraceOptions(graph);
    this.visible = !this.visible;
  }

  changeTraceOptions(graph: string) {
    if (this.accordionItems && this.accordionItems.length > this.index) {
      // Find the right graph template.
      let graphTemplate = this.graphTypes.find((item) => {
        return item.name === graph;
      });

      // Get the accordion object using the index.
      let accordionGraphObject = this.accordionItems[this.index];

      if (accordionGraphObject) {
        accordionGraphObject.graph = graphTemplate;
      }
    }
  }

  newGraph(event: any, index: number) {
    this.visible = !this.visible;
    this.index = index;

    //Find the graph using the index.
    if (this.accordionItems && this.accordionItems.length > 0) {
      let accordian = this.accordionItems[index];
      this.buttonText = accordian.graph.name;
    }
  }

  toggleLiveDemo(event: any) {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  //Adds an accordian object

  addGraphView() {
    const newIndex: number = this.accordionItems.length;
    let label: string = "Trace-" + newIndex;
    this.editableButtonText = label;

    const newItem = {
      name: label,
      index: newIndex,
      visible: false,
      graph: null,
      isEditing: false,
    };

    this.accordionItems.push(newItem);
  }

  getObjectKeys(graph: any) {
    console.log(this.accordionItems);
    return Object.keys(graph).filter((item) => item !== "name");
  }
}
