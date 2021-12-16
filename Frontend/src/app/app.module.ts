import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { DiscountValidatorDirective } from './discount-validator.directive';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrdersComponent } from './cart/orders/orders.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login-page/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNewProductComponent,
    EditProductComponent,
    DeleteProductsComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ManageProductsComponent,
    HeaderComponent,
    FooterComponent,
    CustomerHomepageComponent,
    DiscountValidatorDirective,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    OrdersComponent,
    UserProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
