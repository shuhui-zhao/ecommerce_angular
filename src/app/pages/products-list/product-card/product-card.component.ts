import { Component, input, inject } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col mt-2">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm">{{ '$' + product().price }}</span>
        <app-primary-button
          [label]="isInstock ? 'Add to Cart' : 'Out of Stock'"
          [disabled]="isInstock ? false : true"
          [class]="
            isInstock
              ? 'bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-75'
              : 'bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md opacity-75'
          "
          (btnClicked)="cardService.addToCart(product())"
        />
      </div>
      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if( product().stock!=0){ {{ product().stock }} left }@else {Out of
        stock}
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  cardService = inject(CartService);
  product = input.required<Product>();
  get isInstock(): Boolean {
    return (this.product()?.stock ?? 0) > 0;
  }
}
