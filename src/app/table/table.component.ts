import { Component, OnInit } from '@angular/core';
import { DataModel } from './data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
})
export class TableComponent implements OnInit {
  data: DataModel[] = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Jim Beam', age: 45, email: 'jim@example.com' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}