import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
    
  }

  columnDefs: ColDef[] = [
    {
      field: 'make', 
      editable: true, 
      cellEditor: 'agTextCellEditor',
      cellEditorParams: {
        useFormatter: true,
        maxLength: 2
      },
    },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];
}
