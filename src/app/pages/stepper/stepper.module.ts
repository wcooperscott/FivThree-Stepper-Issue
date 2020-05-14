import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FivStepperModule } from "@fivethree/core";
import { IonicModule } from "@ionic/angular";
import { StepperPageRoutingModule } from "./stepper-routing.module";
import { StepperPage } from "./stepper.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepperPageRoutingModule,
    FivStepperModule,
  ],
  declarations: [StepperPage],
})
export class StepperPageModule {}
