import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetUser } from 'src/app/store/actions/user.actions';

import { SelectSelectedUser } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$ = this.store.pipe(select(SelectSelectedUser))

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }

}
