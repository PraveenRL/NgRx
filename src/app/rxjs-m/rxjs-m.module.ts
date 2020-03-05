import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { RouterModule, Routes } from '@angular/router';
import { ObservableCustomComponent } from './observable-custom/observable-custom.component';
import { FromComponent } from './creation-operator/from/from.component';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';

const rxjsRoutes: Routes = [
  { path: '', component: ObservableComponent },
  { path: 'custom', component: ObservableCustomComponent },
  { path: 'from', component: FromComponent },
  { path: 'creation', component: CreationOperatorComponent },
]

@NgModule({
  declarations: [
    ObservableComponent,
    ObservableCustomComponent,
    FromComponent,
    CreationOperatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rxjsRoutes)
  ]
})
export class RxjsMModule { }
