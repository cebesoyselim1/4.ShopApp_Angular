import { NgModule } from "@angular/core";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations:[
    ProductsHomeComponent,
    ProductsComponent,
    NavbarComponent
  ],
  imports:[
    BrowserModule,
    ProductsRoutingModule
  ],
  providers:[],
  exports:[]
})

export class ProductsModule{

}
