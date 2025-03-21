import { Component, input, inject } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-card',
  imports: [ButtonComponent],
  template: ` <div
    class="bg-white shadow-md border-gray rouded-xl p-6 flex gap-4 items-center"
  >
    <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
    <div class="flex flex-col">
      <span class="text-md font-bold">{{ item().title }}</span>
      <span class="text-sm">{{ '$' + item().price }}</span>
    </div>
    <div class="flex-10">
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(item())"
      />
    </div>
  </div>`,
  styles: ``,
})
export class CartCardComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
