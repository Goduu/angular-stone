import { Component, OnInit } from '@angular/core';
import { ColumnDefinition, DataModel } from './data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [CommonModule]
})

export class TableComponent implements OnInit {
  data: DataModel[] = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Jim Beam', age: 45, email: 'jim@example.com' }
  ];

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
    },
    {
      key: 'age',
      label: "Age",
      type: "number",
    },
    {
      key: 'email',
      label: "Email",
      type: "email",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}