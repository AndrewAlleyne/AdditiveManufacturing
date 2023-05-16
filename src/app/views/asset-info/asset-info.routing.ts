import { AssetInfoComponent } from "./asset-info.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Asset Information",
    },
    component: AssetInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetInfoRoutingModule {}
