import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'

import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers$: Observable<Customer[]>;
  public error$: Observable<String>;

  customers

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: 'LOAD_CUTSOMERS' });
    this.store.subscribe(state => (this.customers = state.customers.customers));
  }

  editCustomer(customer) {

  }
  deleteCustomer(customer) {

  }

}
