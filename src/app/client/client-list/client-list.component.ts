import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';
import { HttpErrorResponse } from '@angular/common/http';







@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private router:Router,   private clientService:ClientService) { }

  ngOnInit(): void {
  }
  public clients : Client[]=[];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


 // dataSource = CLIENT_DATA;

//  clients:Client[] = [
//   new Client(1,'abdell','abdell','cd', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdeldl', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdezll', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdesll', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdxell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abd ell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdzell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','aabdell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdesll', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdesll', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','aabdell', 'hbdzejhd@ibhduh','1234567890','Client'),
//   new Client(1,'abdell','abdell','abdesll', 'hbdzejhd@ibhduh','1234567890','Client'),


//  ];
  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email','phone', 'role','Actions'];
  dataSource = new MatTableDataSource<Client>(this.clients);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

   goToagentDetails()
   {
       this.router.navigate(['client-details']);
   }


   public getClient(): void {
    this.clientService.getClient().subscribe(
      (response: Client[]) => {
        this.clients = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }
}
