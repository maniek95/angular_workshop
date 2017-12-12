import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationFormComponent } from './publication-form/publication-form.component';

const routes: Routes = [
  {
    path: 'publications',
    component: PublicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
