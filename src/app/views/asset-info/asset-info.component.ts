import { Component } from "@angular/core";

@Component({
  selector: "app-asset-info",
  templateUrl: "./asset-info.component.html",
  styleUrls: ["./asset-info.component.scss"],
})
export class AssetInfoComponent {
  // Generates Table data from the selected parameters.
  generateTableData() {
    console.log("Generating some data using the form controller.");
  }

  // Generates a CSV based on the table data.
  downloadCSV() {
    console.log("Generate a CSV using the data from the table.");
  }
}
