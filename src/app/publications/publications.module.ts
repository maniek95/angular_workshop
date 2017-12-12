import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationFormComponent } from './publication-form/publication-form.component';
import { PublicationService } from './publications.service';
import {
   MatCardModule,
   MatInputModule,
   MatButtonModule,
 } from '@angular/material';

 const materialModules = [
  MatCardModule,
  MatInputModule,  
  MatButtonModule,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PublicationsRoutingModule,
    materialModules
  ],
  declarations: [PublicationFormComponent],
  providers: [
    PublicationService
  ]
})
export class PublicationsModule { }
