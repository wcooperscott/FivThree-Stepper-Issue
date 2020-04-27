import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepperPageRoutingModule } from './stepper-routing.module';

import { StepperPage } from './stepper.page';
import  { FivStepperHorizontal, FivStepper } from '@fivethree/core'
import { LayoutModule } from '@fivethree/layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepperPageRoutingModule,
    LayoutModule
  ],
  declarations: [
    StepperPage
  ]
})
export class StepperPageModule {}
