import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { RouterModule, Routes } from '@angular/router';
import { ObservableCustomComponent } from './observable-custom/observable-custom.component';
import { FromComponent } from './creation-operator/from/from.component';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { FilteringComponent } from './filtering/filtering.component';
import { TransformationComponent } from './transformation/transformation.component';
import { TapComponent } from './tap/tap.component';

const rxjsRoutes: Routes = [
  { path: '', component: ObservableComponent },
  { path: 'custom', component: ObservableCustomComponent },
  { path: 'from', component: FromComponent },
  { path: 'creation', component: CreationOperatorComponent },
  { path: 'join', component: JoinCreationComponent },
  { path: 'filtering', component: FilteringComponent },
  { path: 'transformation', component: TransformationComponent },
  { path: 'tap', component: TapComponent },
]

@NgModule({
  declarations: [
    ObservableComponent,
    ObservableCustomComponent,
    FromComponent,
    CreationOperatorComponent,
    JoinCreationComponent,
    FilteringComponent,
    TransformationComponent,
    TapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rxjsRoutes)
  ]
})
export class RxjsMModule { }
