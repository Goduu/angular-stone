import { Component, HostListener, OnInit } from '@angular/core';
import { ColumnDefinition, DataModel, EditingField } from './data.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RowCellComponent } from './row-cell/row-cell.component';
import { RowActionsComponent } from './row-actions/row-actions.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RowCellComponent, RowActionsComponent]
})

export class TableComponent implements OnInit {
  data: DataModel[] = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Jim Beam', age: 45, email: 'jim@example.com' }
  ];

  constructor() {
  }

  editingField: EditingField | null = null;

  columns: ColumnDefinition[] = [
    {
      key: 'id',
      label: "Id",
      type: "text",
    },
    {
      key: 'name',
      label: "Name",
      type: "text",
      editable: true
    },
    {
      key: 'age',
      label: "Age",
      type: "number",
      editable: true
    },
    {
      key: 'email',
      label: "Email",
      type: "email",
      editable: true
    },
  ]

  setEditingField(columnKey: keyof DataModel, rowId: number, value: string | number, type: 'text' | 'number' | 'email') {
    this.editingField = { columnKey: columnKey, rowId: rowId, value, type };
  }

  isEditingCell(columnKey: keyof DataModel, rowId: number) {
    return this.editingField?.columnKey === columnKey && this.editingField?.rowId === rowId;
  }

  addRow() {
    const newRow: DataModel = { id: this.data.length + 1, name: '', age: 0, email: '' };
    this.data.push(newRow);
  }


  deleteRow(rowId: number) {
    this.data = this.data.filter((row) => row.id !== rowId);
  }

  boundDeleteRow = this.deleteRow.bind(this);

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.editingField) {
      this.editingField = null;
    }
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: any) {
    const tableElement = document.getElementById('table');

    if (tableElement && !tableElement.contains(targetElement)) {
      this.editingField = null;
    }
  }

  ngOnInit(): void {
  }
}