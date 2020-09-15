import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { GetUsers } from 'src/app/store/actions/user.actions';
import { SelectUserList } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this.store.pipe(select(SelectUserList));

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }

}
