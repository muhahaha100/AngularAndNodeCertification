import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewProductComponent} from "./add-new-product/add-new-product.component";
import {ManageProductsComponent} from "./manage-products/manage-products.component";

import {CustomerHomepageComponent} from "./customer-homepage/customer-homepage.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrdersComponent } from './cart/orders/orders.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login-page/login/login.component';
import { SignupComponent } from './signup-page/signup/signup.component';

const routes: Routes = [
  { path: 'add', component: AddNewProductComponent },
  { path: 'manage', component: ManageProductsComponent },
  { path: 'manage/editProduct', component: EditProductComponent },
  { path: 'adminhome', component: ManageProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/item', component: CartItemComponent },
  { path: 'cart/checkout', component: CheckoutComponent },
  { path: 'cart/orders', component: OrdersComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: CustomerHomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
