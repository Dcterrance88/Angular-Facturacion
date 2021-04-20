import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path:'**',
    redirectTo: 'customers'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
