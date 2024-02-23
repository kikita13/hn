import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly http = inject(HttpClient);

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/users/${username}`);
  }
}
