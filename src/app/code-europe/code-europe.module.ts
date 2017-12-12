import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEuropeRoutingModule } from './code-europe-routing.module';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  imports: [
    CommonModule,
    CodeEuropeRoutingModule
  ],
  declarations: [SpeakersComponent]
})
export class CodeEuropeModule { }
