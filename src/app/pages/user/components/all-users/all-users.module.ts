import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllUsersComponent } from './all-users.component';

@NgModule({
  declarations: [
    AllUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllUsersComponent
  ]
})
export class AllUsersModule { }
