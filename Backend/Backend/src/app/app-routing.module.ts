import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewProductComponent} from "./add-new-product/add-new-product.component";
import {ManageProductsComponent} from "./manage-products/manage-products.component";

const routes: Routes = [
  { path: 'add', component: AddNewProductComponent },
  { path: "manage", component: ManageProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
