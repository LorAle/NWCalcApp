import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./Features/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'settings', loadChildren: () => import('./Features/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'info', loadChildren: () => import('./Features/info/info.module').then(m => m.InfoModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
