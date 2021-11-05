import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductsComponent } from "./products/products.component";

const routes:Routes = [
  { path: "products", component: ProductsHomeComponent, children: [
    { path: "", component: ProductsComponent },
  ]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class ProductsRoutingModule{

}
