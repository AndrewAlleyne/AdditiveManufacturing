import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilteraleTableComponent } from "./filterale-table.component";
import { TableModule, UtilitiesModule } from "@coreui/angular";
@NgModule({
  imports: [CommonModule, TableModule, UtilitiesModule],
  declarations: [FilteraleTableComponent],
  exports: [FilteraleTableComponent],
})
export class FilterableTableModule {}
