import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientItemComponent } from './client-item/client-item.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    ClientFormComponent,
    ClientItemComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
