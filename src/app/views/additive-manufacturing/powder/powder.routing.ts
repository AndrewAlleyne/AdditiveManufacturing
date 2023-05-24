import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PowderComponent } from "./powder/powder.component";
import { SiliconComponent } from "./silicon/silicon.component";
import { SpecimenComponent } from "./powder/specimen/specimen.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Powder",
    },
    children: [
      {
        path: "specimen",
        component: SpecimenComponent,
        data: {
          title: "Specimen",
        },
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecimenRouting {}
