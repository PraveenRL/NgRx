import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs-m/rxjs-m.module').then(m => m.RxjsMModule)
  },
  {
    path: 'schematic',
    loadChildren: () => import('./schematic/schematic.module').then(m => m.SchematicModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/form.module').then(m => m.FormModule)
  },
  {
    path: 'lifecycle',
    loadChildren: () => import('./lifecyclehooks/lifecyclehooks.module').then(m => m.LifecyclehooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
