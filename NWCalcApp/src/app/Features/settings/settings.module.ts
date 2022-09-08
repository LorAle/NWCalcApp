import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MotesInputComponent } from './motes-input/motes-input.component';
import { CoreModule } from 'src/app/core/core.module';
import { MotesFormularComponent } from './motes-formular/motes-formular.component';


@NgModule({
  declarations: [
    SettingsComponent,
    MotesInputComponent,
    MotesFormularComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CoreModule
  ]
})
export class SettingsModule { }
