import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ngx-webstorage';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    Ng2Webstorage
  ],
  declarations: [
  ],
  providers:[
  ]
})
export class SharedModule { }
