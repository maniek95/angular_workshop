import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
   MatToolbarModule,
   MatMenuModule,
   MatButtonModule,   
 } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { CodeEuropeModule } from './code-europe/code-europe.module';
import { PublicationsModule } from './publications/publications.module';
import { SiennModule } from './sienn/sienn.module';

const materialModules = [
  MatToolbarModule,  
  MatMenuModule,
  MatButtonModule,  
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    materialModules,
    CodeEuropeModule,
    PublicationsModule,
    SiennModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
