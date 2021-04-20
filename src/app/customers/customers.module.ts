import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ToListComponent } from './pages/to-list/to-list.component';
import { ToAddOrEditComponent } from './pages/to-add-or-edit/to-add-or-edit.component';
import { CustomerComponent } from './pages/customer/customer.component';


@NgModule({
  declarations: [
    ToListComponent,
    ToAddOrEditComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
