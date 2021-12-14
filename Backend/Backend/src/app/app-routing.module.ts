import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewProductComponent} from "./add-new-product/add-new-product.component";
import {ManageProductsComponent} from "./manage-products/manage-products.component";

import {CustomerHomepageComponent} from "./customer-homepage/customer-homepage.component"
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
const routes: Routes = [
  { path: 'add', component: AddNewProductComponent },
  { path: 'adminhome', component: AdminHomepageComponent },
  { path: '', component: CustomerHomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
