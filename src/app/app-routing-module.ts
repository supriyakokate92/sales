import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModule } from './orders/orders-module';
import { ProductsModule } from './products/products-module';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: ()=>import('./orders/orders-module').then(m=>m.OrdersModule)
  },
  {
    path:'products',
    loadChildren: ()=>import('./products/products-module').then(m=>m.ProductsModule)
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
