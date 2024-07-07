import { Component, OnInit } from '@angular/core';
import { ColumnDefinition, DataModel, EditingField } from './data.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class TableComponent implements OnInit {
  data: DataModel[] = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Jim Beam', age: 45, email: 'jim@example.com' }
  ];

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
    }
  ]

  constructor() { }

  setEditingField(columnKey: keyof DataModel, rowId: number, value: string | number, type: 'text' | 'number' | 'email') {
    this.editingField = { columnKey: columnKey, rowId: rowId, value, type };
  }

  isEditingCell(columnKey: keyof DataModel, rowId: number) {
    return this.editingField?.columnKey === columnKey && this.editingField?.rowId === rowId;
  }

  ngOnInit(): void {
  }
}