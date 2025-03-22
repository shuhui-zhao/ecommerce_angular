import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartCardComponent } from './cart-card/cart-card.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent, OrdersummaryComponent],
  template: ` <div class="p-6 flex flex-col gap-4">
    <h2 class="text-2xl">Shopping Cart</h2>
    @for (item of cart.cart(); track item.id){
    <app-cart-card [item]="item" />
    }
    <app-ordersummary />
  </div>`,
  styles: ``,
})
export class CartComponent {
  cart = inject(CartService);
}
