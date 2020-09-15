import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UsersDetailsModule } from '../components/users-details/users-details.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersDetailsModule
  ]
})
export class UserModule { }
