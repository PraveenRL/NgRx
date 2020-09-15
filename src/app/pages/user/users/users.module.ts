import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { AllUsersModule } from '../components/all-users/all-users.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    AllUsersModule
  ]
})
export class UsersModule { }
