import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewProductComponent} from "./add-new-product/add-new-product.component";
import {ManageProductsComponent} from "./manage-products/manage-products.component";

import {CustomerHomepageComponent} from "./customer-homepage/customer-homepage.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
const routes: Routes = [
  { path: 'add', component: AddNewProductComponent },
  { path: 'manage', component: ManageProductsComponent },
  { path: 'manage/editProduct', component: EditProductComponent },
  { path: 'adminhome', component: ManageProductsComponent },
  { path: '', component: CustomerHomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
