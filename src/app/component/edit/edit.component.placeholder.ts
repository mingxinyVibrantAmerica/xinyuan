import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  index: number;
  height: number;
  weight: number;
  age: number;
  gender: string;
  concentration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {index: 1, height: 10, weight: 10, age: 10, gender: 'male', concentration: '10%'},
  {index: 2, height: 20, weight: 20, age: 20, gender: 'male', concentration: '20%'},
  {index: 3, height: 30, weight: 30, age: 30, gender: 'male', concentration: '30%'},
  {index: 4, height: 40, weight: 40, age: 40, gender: 'male', concentration: '40%'},
  {index: 5, height: 50, weight: 50, age: 50, gender: 'male', concentration: '50%'},
  {index: 6, height: 60, weight: 60, age: 60, gender: 'male', concentration: '60%'},
  {index: 7, height: 70, weight: 70, age: 70, gender: 'male', concentration: '70%'},
  {index: 8, height: 80, weight: 80, age: 80, gender: 'male', concentration: '80%'},
  {index: 9, height: 90, weight: 90, age: 90, gender: 'male', concentration: '90%'},
  {index: 10, height: 100, weight: 100, age: 100, gender: 'male', concentration: '100%'},
];

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, MatTableModule, MatTableDataSource, MatPaginatorModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  displayedColumns: string[] = ['index', 'height', 'weight', 'age', 'gender', 'concentration', 'check', 'cross'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
