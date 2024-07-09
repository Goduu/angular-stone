import { Component, Input } from '@angular/core';
import { RowCell } from './data.model';
import { DataModel } from '../data.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-row-cell',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <ng-container>
      <div *ngIf="!isEditingCell" class="p-3">
        {{ cell.value }}
      </div>
      <ng-container *ngIf="isEditingCell">
        <input
          [(ngModel)]="cell.value"
          [type]="cell.type"
          class="border border-gray-400 w-full"
        />
      </ng-container>
    </ng-container>
  `,
})
export class RowCellComponent {
  setEditingField: (rowId: number, value: string | number, type: 'text' | 'number' | 'email') => void = () => { };

  @Input() cell!: RowCell;
  @Input() isEditingCell: boolean = false;
}
