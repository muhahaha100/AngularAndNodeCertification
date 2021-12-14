import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule} from "@angular/forms";
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewProductComponent,
    EditProductComponent,
    DeleteProductsComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
