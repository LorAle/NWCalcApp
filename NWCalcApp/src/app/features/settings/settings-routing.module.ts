import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotesInputComponent } from './motes-input/motes-input.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'prices', pathMatch: 'full' },
  {
    path: 'prices', component: SettingsComponent,
    children: [
      { path: 'motes', component: MotesInputComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
