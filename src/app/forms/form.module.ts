import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component:  FormarrayComponent}
]

@NgModule({
  declarations: [
    FormarrayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormModule { }
