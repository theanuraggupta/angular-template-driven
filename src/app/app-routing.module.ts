import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {
    path: 'template-driven', component: TemplateDrivenComponent
  },
  {
    path: '', redirectTo: 'template-driven', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
