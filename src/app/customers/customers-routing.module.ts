import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToListComponent } from './pages/to-list/to-list.component';
import { ToAddOrEditComponent } from './pages/to-add-or-edit/to-add-or-edit.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'list'        , component: ToListComponent },
      { path: 'create'  , component: ToAddOrEditComponent },
      { path: 'edit/:id', component: ToAddOrEditComponent },
      { path: ':id'     , component: CustomerComponent },
      { path: '**'      , redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class CustomersRoutingModule { }
