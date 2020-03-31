import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LifecyclehooksComponent } from './lifecyclehooks.component';
import { HelperComponent } from './helper/helper.component';

const routes: Routes = [
  { path: '', component: LifecyclehooksComponent }
]

@NgModule({
  declarations: [
    LifecyclehooksComponent,
    HelperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LifecyclehooksModule { }
