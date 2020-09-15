import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './ngrx/reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NavbarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ todos: TodoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
