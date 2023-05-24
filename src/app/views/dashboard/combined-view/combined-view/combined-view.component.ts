import {
  AfterViewChecked,
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from "@angular/core";
import { UntypedFormBuilder } from "@angular/forms";
import { PlotlyDataService } from "src/app/api/plotly.service";

@Component({
  selector: "combined-view",
  templateUrl: "./combined-view.component.html",
  styleUrls: ["./combined-view.component.scss"],
})
export class CombinedViewComponent implements AfterViewChecked, OnInit {
  frozenScroll = false;
  tableData: any[] = [];
  failures: any[] = [];
  deviceFailure: any = {};
  header: any[] = [];

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

  realTimeData: any[] = [];
  //
  ngOnInit() {
    this.plotlyAPI.getHeader().subscribe({
      next: (response) => {
        this.tableData = [...this.tableData, ...response];
        this.header = response;
      },
      error: (error) => {
        throw new Error("Header response failed. ");
      },
    });

    this.plotlyAPI.getStreamData().subscribe((event: MessageEvent) => {
      let data: any = JSON.parse(event.data);

      if (data.Target === "1.0") {
        this.deviceFailure = {
          ProductID: data["Product ID"],
          ToolWear: data["Tool wear [min]"],
          Target: data["Target"],
          Failure: data["Due Maintainance ( Preventive ) "],
        };

        this.failures.push(this.deviceFailure);
      }
      // Transform the data.
      this.realTimeData.push(data);
    });
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

  PlotlyChange(event: any) {
    console.log(event);
  }

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

  relayout(event: any) {
    console.log(event);
    this.bubbleChartRef.layout.autosize = true;
  }

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
