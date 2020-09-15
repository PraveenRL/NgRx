import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IConfig } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public baseUrl: string = `${environment.baseUrl}data/config.json`;

  constructor(
    private http: HttpClient
  ) { }

  getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>(this.baseUrl);
  }

}
