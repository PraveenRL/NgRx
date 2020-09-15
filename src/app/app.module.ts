import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TodoReducer } from './ngrx/reducers/todo.reducer';
import { TodoComponent } from './ngrx/components/todo/todo.component';
import { AddTodoComponent } from './ngrx/components/add-todo/add-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NavbarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ todos: TodoReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
