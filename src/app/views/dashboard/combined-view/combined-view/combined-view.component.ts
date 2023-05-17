import {
  AfterViewChecked,
  Component,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { UntypedFormBuilder } from "@angular/forms";

@Component({
  selector: "combined-view",
  templateUrl: "./combined-view.component.html",
  styleUrls: ["./combined-view.component.scss"],
})
export class CombinedViewComponent implements AfterViewChecked {
  frozenScroll = false;

  constructor(private fb: UntypedFormBuilder) {}

  // View group conditions
  condition1: boolean = true;
  condition2: boolean = false;
  condition3: boolean = this.condition1 && this.condition2 ? true : false;

  //Initialize the view check group
  btnCheckGroup = this.fb.group({
    checkbox1: [true],
    checkbox2: [false],
  });

  @HostListener("scroll", ["$event.target"])
  onTableScroll(container: HTMLElement) {
    // Check if the user manually scrolled the table
    this.frozenScroll =
      container.scrollTop !== container.scrollHeight - container.clientHeight;

    console.log("scrollings");
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
}
