import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  @Input()
  users: IUser[];

  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.users);
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }

}
