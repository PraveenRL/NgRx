import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserHttp } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl: string = `${environment.baseUrl}data/users.json`;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.baseUrl);
  }

}
