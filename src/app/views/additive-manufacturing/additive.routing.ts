import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PowderComponent } from "./powder/powder.component";
import { SiliconComponent } from "./silicon/silicon.component";
import { SpecimenComponent } from "./powder/specimen/specimen.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Additive Manufacturing",
    },
    children: [
      {
        path: "powder",
        component: PowderComponent,
        data: {
          title: "Powder",
        },
        pathMatch: "full",
      },
      {
        path: "silicone",
        data: {
          title: "Silicone",
        },
        component: SiliconComponent,
        pathMatch: "full",
      },
      {
        path: "specimen",
        data: {
          title: "Specimen",
        },
        component: SpecimenComponent,
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditiveManufacturingRouting {}
