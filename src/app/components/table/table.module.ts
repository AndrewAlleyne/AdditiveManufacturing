import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { CommonModule } from "@angular/common";
import { ValuesPipe } from "src/app/values.pipe";
import { KeysPipe } from "src/app/keys.pipe";

@NgModule({
  imports: [CommonModule],
  exports: [TableComponent],
  declarations: [TableComponent, ValuesPipe, KeysPipe],
})
export class TableComponentModule {}
