import { Component, Input } from '@angular/core';
import { IconDeleteComponent } from '../../icons/icons.component';

@Component({
  selector: 'app-row-actions',
  standalone: true,
  imports: [IconDeleteComponent],
  template: `
  <div class="flex justify-center">
    <app-icon-delete (click)="handleDeleteRow(rowId)" class="w-7 cursor-pointer" [title]="'Delete Row'"></app-icon-delete>
 </div>
  `,
})

export class RowActionsComponent {
  @Input() rowId!: number;
  @Input() deleteRow!: (rowId: number) => void;
  tooltipText = '';

  handleDeleteRow(rowId: number) {
    this.deleteRow(rowId);
  }

}
