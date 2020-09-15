import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { GetConfig } from './store/actions/config.actions';
import { SelectConfig } from './store/selectors/config.selectors';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-users';
  config$ = this.store.pipe(select(SelectConfig));

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(){
    this.store.dispatch(new GetConfig());
  }

}
