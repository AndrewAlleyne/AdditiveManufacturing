import {
  Component,
  Input,
  Pipe,
  PipeTransform,
  SimpleChanges,
} from "@angular/core";
import { PlotlyDataService } from "src/app/api/plotly.service";

interface Object {
  [key: string]: any;
}

@Component({
  selector: "data-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  //Data passed to table
  @Input() data: any[] = [];
  @Input() headerObjects: any[] = [];
  @Input() tableData: any[] = [];

  newItem: string[] = [];
  tableDataLen = this.tableData.length;
  realTimeData: any[] = [];

  constructor(private plotlyAPI: PlotlyDataService) {}
  ngOnInit() {
    this.newItem.push(...this.tableData);
    // console.log("New item ", this.newItem);

    this.plotlyAPI.getStreamData().subscribe((event: MessageEvent) => {
      let data: any[] = JSON.parse(event.data);
      // Transform the data.
      this.realTimeData.push(data);
      console.log(this.realTimeData);
    });
  }

  arrayFromLength(length: number): number[] {
    return Array.from({ length }, (_, index) => index);
  }

  items: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes["tableData"]) {
      let newChange = changes["tableData"];

      //push data to new ite
      this.newItem = [this.newItem, ...newChange.currentValue];
      // Define the properties you want to include in the new objects
      const properties = this.data;

      // Map over each item in the original array
      this.items = this.newItem.map((item) => {
        // Create a new object with only the specified properties
        const newObj: Object = {}; 
        properties.forEach((prop, idx) => {
          newObj[prop] = item[idx];
        });
        return newObj;
      });
    }
    this.items = [...this.items, ...this.newItem];
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
