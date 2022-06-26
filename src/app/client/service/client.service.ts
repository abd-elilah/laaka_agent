import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url= environment.apiBaseUrl;
  

  constructor(private http:HttpClient) { }
//   public getClient(): Observable<Client[]> {
// return this.http.get<Client[]>(`${this.url}/Client/clients`);
//   }
public getClient(): Observable<Client[]> {
  return this.http.get<Client[]>(`${this.url}/Client/clients`);
}
  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/Client/addClient/allow-cors`,Client);
      }

  public updateClient(client : Client): Observable<Client> {
      return this.http.put<Client>(`${this.url}/Admin/update`,Client);
          }
  public deleteClient(clientId :number): Observable<void> {
       return this.http.delete<void>(`${this.url}/Admin/delete/${clientId}`);
              }
}
