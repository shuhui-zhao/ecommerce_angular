import { Component, inject, computed } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-ordersummary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border-grey">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 mt-2">
          <span class="text=lg">Total</span>
          <span class="text-lg font-bold">{{ '$' + total() }}</span>
        </div>
        <app-primary-button label="Proceed to checkout" />
      </div>
    </div>
  `,
  styles: ``,
})
export class OrdersummaryComponent {
  cartSevice = inject(CartService);
  total = computed(() => {
    let total = 0;
    for (const item of this.cartSevice.cart()) {
      total += item.price;
    }
    return total;
  });
}
