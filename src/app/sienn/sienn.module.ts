import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiennRoutingModule } from './sienn-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { SiennService } from './sienn.service';

@NgModule({
  imports: [
    CommonModule,
    SiennRoutingModule
  ],
  declarations: [LoginComponent, ProductListComponent, ProductFormComponent],
  providers:[
    SiennService
  ]
})
export class SiennModule { }
