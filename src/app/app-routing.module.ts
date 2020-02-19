import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AciStoreComponent } from './acistore/acistore.component';
import { CartDetailComponent } from './acistore/cart-detail.component';
import { CheckoutComponent } from './acistore/checkout.component';
import { AciStoreFirstGuard } from './acistoreFirst.guard';

const routes: Routes = [
  { path: "acistore", component: AciStoreComponent, canActivate: [AciStoreFirstGuard] },
  { path: "cart", component: CartDetailComponent, canActivate: [AciStoreFirstGuard]},
  { path: "checkout", component: CheckoutComponent, canActivate: [AciStoreFirstGuard]},
  { path: "**", redirectTo: "/acistore"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AciStoreFirstGuard]
})
export class AppRoutingModule { }
