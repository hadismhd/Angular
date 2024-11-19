import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Hadis'},
  {position: 4, name: 'Helia'},
]
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  onSelectRow(){
    console.log("clicked!")
  }

  constructor(private snackBar: MatSnackBar) {}

  onRowClick(row: any) {
    this.snackBar.open(`You clicked on ${row.name}`, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
