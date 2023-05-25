import {
  AfterViewChecked,
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { FormBuilder, FormGroup, UntypedFormBuilder } from "@angular/forms";
import { filter } from "rxjs";
import { PlotlyDataService } from "src/app/api/plotly.service";

@Component({
  selector: "combined-view",
  templateUrl: "./combined-view.component.html",
  styleUrls: ["./combined-view.component.scss"],
})
export class CombinedViewComponent {
  frozenScroll = false;
  tableData: any[] = [];
  failures: any[] = [];
  deviceFailure: any = {};
  header: any[] = [];
  realTimeData: any[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private plotlyAPI: PlotlyDataService
  ) {}

  // View group conditions
  condition1: boolean = true;
  condition2: boolean = false;
  condition3: boolean = this.condition1 && this.condition2 ? true : false;

  //Initialize the view check group
  btnCheckGroup = this.fb.group({
    checkbox1: [true],
    checkbox2: [false],
  });

  optionParameterFormGroup!: FormGroup;
  stringVisible: boolean[] = [];
  idealHeader: any[] = [];
  filteredHeader: any[] = [];

  idealData: any[] = [];
  filteredData: any[] = [];

  cleanString(str: string): string {
    // Remove spaces
    str = str.replace(/\s/g, "");

    // Remove [K]
    str = str.replace(/\[[^\]]*\]/g, "");

    // Remove -
    str = str.replace(/-/g, "");

    return str;
  }

  // Declare boolean variables for each form control
  airTemp: any[] = [];
  idealToolWear: any = [];
  idealAirTemp: any[] = [];
  idealProcessTemp: any[] = [];
  idealRPM: any[] = [];
  idealTorque: any[] = [];
  processTemp: any[] = [];
  productId: any[] = [];
  rotationalSpeed: any[] = [];
  timeStamp: any[] = [];
  rpm: any[] = [];
  torque: any[] = [];
  toolWear: any[] = [];

  graphData: any = [];

  graphLayout = {
    title: "Process Air Temperature ",
  };

  //Best for initializing before the view
  ngAfterViewInit() {
    /*
       "Time Stamp",
    "Product ID",
    "Air temperature [K]",
    "Ideal Value - Air Temp",
    "Process temperature [K]",
    "Ideal Value - Process Temp",
    "Rotational speed [rpm]",
    "Ideal Value - RPM",
    "Torque [Nm]",
    "Ideal Value - Torque ",
    "Tool wear [min]",
    "Ideal Tool Wear "

    */

    this.optionParameterFormGroup = this.fb.group({
      TimeStamp: false,
      ProductID: false,
      Airtemperature: false,
      IdealValueAirTemp: false,
      Processtemperature: false,
      IdealValueProcessTemp: false,
      Rotationalspeed: false,
      IdealValueRPM: false,
      Torque: false,
      IdealValueTorque: false,
      Toolwear: false,
      IdealToolWear: false,
    });

    this.optionParameterFormGroup.valueChanges.subscribe((event) => {

      if (event["IdealValueAirTemp"]) {
        this.stringVisible[2] = true;
        this.addPoint(event.value);
      } else {
        this.stringVisible[2] = false;
      }

      if (event["IdealValueProcessTemp"]) {
        this.stringVisible[4] = true;
        this.addPoint(event.value);
      } else {
        this.stringVisible[4] = false;
      }
      if (event["IdealValueRPM"]) {
        this.stringVisible[6] = true;
        this.addPoint(event.value);
      } else {
        this.stringVisible[6] = false;
      }
      if (event["IdealValueTorque"]) {
        this.addPoint(event.value);

        this.stringVisible[8] = true;
      } else {
        this.stringVisible[8] = false;
      }

      if (event["IdealToolWear"]) {
        this.addPoint(event.value);

        this.stringVisible[9] = true;
      } else {
        this.stringVisible[9] = false;
      }
    });

    this.plotlyAPI.getHeader().subscribe({
      next: (response) => {
        this.header = response;

        //Filter the header
        this.idealHeader = this.header.filter((item) => {
          return item.includes("Ideal");
        });

        this.filteredHeader = this.header.filter((item) => {
          return !item.includes("Ideal");
        });

        // Create object to track string visibiltiy
        this.stringVisible = Array(this.idealHeader.length).fill(false);
      },
      error: (error) => {
        throw new Error("Header response failed. ");
      },
    });

    this.plotlyAPI.getStreamData().subscribe((event: MessageEvent) => {
      let data: any = JSON.parse(event.data);

      this.graphData = [
        {
          x: [...this.timeStamp, ...data["Time Stamp"]],
          y: [...this.airTemp, ...[data["Air temperature [K]"]]],
          line: { color: "#17BECF" },
          type: "scatter",
          mode: "lines",
        },
      ];

      this.airTemp.push(data["Air temperature [K]"]);
      this.idealToolWear.push(data["Ideal Tool Wear"]);
      this.idealAirTemp.push(data["Ideal Value - Air Temp"]);
      this.idealProcessTemp.push(data["Ideal Value - Process Temp"]);
      this.idealRPM.push(data["Ideal Value - RPM"]);
      this.idealTorque.push(data["Ideal Value - Torque "]);
      this.processTemp.push(data["Process temperature [K]"]);
      this.productId.push(data["Product ID"]);
      this.rotationalSpeed.push(data["Rotational speed [rpm]"]);
      this.timeStamp.push(data["Time Stamp"]);
      this.toolWear.push(data["Tool wear [min]"]);
      this.torque.push(data["Tool wear [min]"]);


      // Turn items to atrauy

      this.filteredData.push(data);

      this.idealData = Object.keys(data)
        .filter((item) => {
          return item.includes("Ideal");
        })
        .reduce((obj: any, key) => {
          obj.push(data[key]);
          return obj;
        }, []);

      /*
      
      "Time Stamp": "44927.194444444445",
      "Product ID": "Motor",
      "Air temperature [K]": "299.1",
      "Ideal Value - Air Temp": "299.5",
      "Process temperature [K]": "309.4",
      "Ideal Value - Process Temp": "309.0",
      "Rotational speed [rpm]": "1439.0",
      "Ideal Value - RPM": "1530.0",
      "Torque [Nm]": "44.2",
      "Ideal Value - Torque ": "43.0",
      "Tool wear [min]": "82.0",
      "Ideal Tool Wear ": "55.0"


      */
      if (data.Target === "1.0") {
        this.deviceFailure = {
          ProductID: data["Product ID"],
          ToolWear: data["Air temperature [K]]"],
          Target: data["Process temperature [K]"],
          Failure: data["Rotational speed [rpm] "],
        };

        this.failures.push(this.deviceFailure);
      }
      // Transform the data.
      this.realTimeData.push(data);
    });
  }

  points: any[] = [];
  addPoint(graph: string) {
    if (graph === "Product ID") {
      let obj = {
        name: "Product ID",
        x: this.timeStamp,
        y: this.productId,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }

    if (graph === "Air temperature [K]") {
      let obj = {
        name: "Air Temp",

        x: this.timeStamp,
        y: this.airTemp,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }

    if (graph === "Ideal Value - Air Temp") {
      let obj = {
        name: "Ideal Value - Air Temp",
        x: this.timeStamp,
        y: this.idealAirTemp,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }

    if (graph === "Process tempearature [K]") {
      let obj = {
        name: "Process temparature [K]",
        x: this.timeStamp,
        y: this.processTemp,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }

    if (graph === "Ideal Value - Process Temp") {
      let obj = {
        name: "Ideal Value - Process Temp",

        x: this.idealProcessTemp,
        y: this.timeStamp,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }

    if (graph === "Rotational speed [rpm]") {
      let obj = {
        name: "Rotational speed [rpm]",
        x: this.rotationalSpeed,
        y: this.timeStamp,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }
    if (graph === "Ideal Value - RPM]") {
      let obj = {
        x: this.idealRPM,
        y: this.timeStamp,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }
    if (graph === "Torque [Nm]") {
      let obj = {
        name: "Torque [Nm]",
        x: this.torque,
        y: this.timeStamp,
        mode: "markers",
        type: "scatter",
      };
      this.points.push(obj);
    }
    if (graph === "Ideal Tool Wear ") {
      let obj = {
        name: "Ideal Tool Wear",
        x: this.idealToolWear,
        y: this.timeStamp,
        mode: "markers",
        type: "scatter",
      };

      this.points.push(obj);
    }
  }
  @HostListener("scroll", ["$event.target"])
  onTableScroll(container: HTMLElement) {
    // Check if the user manually scrolled the table
    this.frozenScroll =
      container.scrollTop !== container.scrollHeight - container.clientHeight;
  }

  //Set the values of the view check group
  setValue(controlName: string) {
    const prevValue = this.btnCheckGroup.get(controlName)?.value;

    const groupValue = this.btnCheckGroup.getRawValue();

    const newGroupValue = { ...groupValue, [`${controlName}`]: !prevValue };
    this.btnCheckGroup.setValue(newGroupValue);

    let val = newGroupValue[controlName];
    if (controlName === "checkbox1") {
      this.condition1 = val;
    } else if (controlName === "checkbox2") {
      this.condition2 = val;
    }
  }

  @ViewChild("tableRef") tableRef!: any;

  ngAfterViewChecked() {
    window.dispatchEvent(new Event("resize"));

    if (!this.frozenScroll) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    if (this.tableRef && this.tableRef.nativeElement) {
      const tableElement = this.tableRef.nativeElement;
      tableElement.scrollTop = tableElement.scrollHeight;
    }
  }

  printActivity = [
    {
      type: "indicator",
      value: 200,
      delta: { reference: 160 },
      gauge: { axis: { visible: false, range: [0, 250] } },
      domain: { row: 0, column: 0 },
    },
    // {
    //   type: "indicator",
    //   value: 120,
    //   gauge: {
    //     shape: "bullet",
    //     axis: {
    //       visible: false,
    //       range: [-200, 200],
    //     },
    //   },
    //   domain: { x: [0.1, 0.5], y: [0.15, 0.35] },
    // },
    // {
    //   type: "indicator",
    //   mode: "number+delta",
    //   value: 300,
    //   domain: { row: 0, column: 1 },
    // },
    // {
    //   type: "indicator",
    //   mode: "delta",
    //   value: 40,
    //   domain: { row: 1, column: 1 },
    // },
  ];

  // Static data
  printActivitylayout = {
    autosize: true,
    grid: {},
    template: {
      data: {
        indicator: [
          {
            title: { text: "Printer Activity" },
            mode: "number+delta+gauge",
            delta: { reference: 90 },
          },
        ],
      },
    },
  };

  bubbleChartTrace = {
    x: [1, 2, 3, 4],

    y: [10, 11, 12, 13],

    mode: "markers",

    marker: {
      size: [40, 60, 80, 100],
    },
  };

  bubbleChartRef = {
    data: [this.bubbleChartTrace],
    layout: {
      title: "Marker Size",
      autosize: true,
      showlegend: false,
    },
  };

  lineTrace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],

    type: "scatter",
  };

  lineTrace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],

    type: "scatter",
  };

  lineLayout = {
    title: "Line and Scatter Plot",
    autosize: true,
  };

  data = [this.lineTrace1, this.lineTrace2];
}
