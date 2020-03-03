import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers$: Observable<Customer[]>;
  public error$: Observable<String>;
  
  constructor() { }

  ngOnInit(): void {
  }

  editCustomer(customer) {

  }
  deleteCustomer(customer) {

  }

}
