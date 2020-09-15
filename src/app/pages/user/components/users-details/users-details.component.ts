import { Component, Input, OnInit } from '@angular/core';

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'user-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  @Input()
  user: IUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
