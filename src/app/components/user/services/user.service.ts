import { Injectable, inject } from '@angular/core';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userApiService = inject(UserApiService);

  getUser(username: string) {
    return this.userApiService.getUser(username);
  }
}
