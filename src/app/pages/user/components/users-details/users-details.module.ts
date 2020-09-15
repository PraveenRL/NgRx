import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDetailsComponent } from './users-details.component';

@NgModule({
  declarations: [
    UsersDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersDetailsComponent
  ]
})
export class UsersDetailsModule { }
