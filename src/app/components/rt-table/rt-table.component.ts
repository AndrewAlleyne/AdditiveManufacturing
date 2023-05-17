import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { PlotlyService } from "src/app/api/plotly.service";

@Component({
  selector: "app-rt-table",
  templateUrl: "./rt-table.component.html",
  styleUrls: ["./rt-table.component.scss"],
})
export class RtTableComponent implements OnInit {
  constructor(private plotlyService: PlotlyService) {}

  //Store real time data as it comes in
  realTimeData: any[] = [];
  header: any[] = [];

  ngOnInit() {
    const eventSource = new EventSource("http://localhost:8080/data");

    this.plotlyService.getHeader().subscribe({
      next: (response) => {
        this.header = [...this.header, ...response];
      },
      error: (error) => {
        throw new Error("Header response failed. ");
      },
    });

    eventSource.addEventListener("message", (event: MessageEvent) => {
      let data: any[] = JSON.parse(event.data);
      // Transform the data.
      this.realTimeData.push(data);
      console.log(this.realTimeData);
    });
  }

  frozenScroll = false;
  @HostListener("scroll", ["$event.target"])
  onTableScroll(container: HTMLElement) {
    // Check if the user manually scrolled the table
    this.frozenScroll =
      container.scrollTop !== container.scrollHeight - container.clientHeight;

  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
