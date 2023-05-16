import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [TableComponent],
  declarations: [TableComponent],
})
export class TableComponentModule {}
