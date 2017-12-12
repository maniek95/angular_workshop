import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  {
    path: 'code-europe',
    children: [
      {
        path: '',
        redirectTo: 'speakers',
        pathMatch: 'prefix'
      },
      {
        path: 'speakers',
        component: SpeakersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeEuropeRoutingModule { }
