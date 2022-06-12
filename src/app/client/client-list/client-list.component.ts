import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';


export interface Client {
  lastName: string;
  firstName: string;
  email: string;
  numTel: string;
}

const CLIENT_DATA: Client[] = [
  {firstName: "Asmae",lastName: 'Hydrogen', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Helium', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Lithium', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Beryllium', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Boron', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Carbon', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Nitrogen', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Oxygen', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Fluorine', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Neon', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Hydrogen', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Helium', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Lithium', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Beryllium', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Boron', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Carbon', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Nitrogen', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Oxygen', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Fluorine', email: "asmae@gmail.com", numTel: '1234567890'},
  {firstName: "Asmae",lastName: 'Neon', email: "asmae@gmail.com", numTel: '1234567890'},
  
];

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 // dataSource = CLIENT_DATA;


  dataSource = new MatTableDataSource<Client>(CLIENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // goToagentDetails()
  // {
  //     this.router.navigate(['navbar/agent']);
  // }
}