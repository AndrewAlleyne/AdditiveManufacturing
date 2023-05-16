import { Component } from "@angular/core";
import { UntypedFormBuilder } from "@angular/forms";

@Component({
  selector: "combined-view",
  templateUrl: "./combined-view.component.html",
  styleUrls: ["./combined-view.component.scss"],
})
export class CombinedViewComponent {
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

  //Set the values of the view check group
  setValue(controlName: string) {
    const prevValue = this.btnCheckGroup.get(controlName)?.value;
    console.log(controlName, prevValue);

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
}
