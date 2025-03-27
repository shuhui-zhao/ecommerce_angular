import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      mat-raised-button
      (click)="btnClicked.emit()"
      [class]="class()"
      [disabled]="disabled()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input<string>();
  disabled = input<boolean>();
  btnClicked = output();
  class = input<string>(
    'bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-75'
  );

  // handelButtonClick() {
  //   this.btnClicked.emit();
  // }
}
