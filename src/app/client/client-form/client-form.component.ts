import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';
// import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  displayData:any;
  public clients : Client[]=[];

  constructor(
    private clientService:ClientService
      ) { }

  ngOnInit(): void {
    this.getClient;
  }
  onSubmit(addClient :NgForm): void {
    this.clientService.addClient(addClient.value).subscribe(
      (response: Client) => {
    
        console.log(response);
        this.getClient() ;
        addClient.reset();
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
      );
   
    // const url = 'http://http://localhost:4040/Admin/addAdmin';
    // this.httpClient.post(url, data)
    //   .subscribe((result) => {
    //     this.ngOnInit(); //reload the table
    //   });
    // this.modalService.dismissAll(); //dismiss the modal
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
