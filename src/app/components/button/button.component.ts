import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      mat-raised-button
      (click)="btnClicked.emit()"
      class="text-black px-5 py-2 rounded-xl shadow-md hover:bg-slate-200"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input<string>('');
  btnClicked = output();
}
