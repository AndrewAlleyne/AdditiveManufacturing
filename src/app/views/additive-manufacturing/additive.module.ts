import { NgModule } from "@angular/core";
import { PowderModule } from "./powder/powder.module";
import { AdditiveManufacturingRouting } from "./additive.routing";
import { SiliconeModule } from "./silicon/silicone.module";
import { SpecimenModule } from "./powder/specimen/specimen.module";

@NgModule({
  imports: [
    AdditiveManufacturingRouting,
    SpecimenModule,
    SiliconeModule,
    PowderModule,
    SpecimenModule,
  ],
  declarations: [],
  exports: [],
})
export class AdditiveManufacturingModule {}
