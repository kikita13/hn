import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsApiService {
  private readonly http = inject(HttpClient);

  getComments(id: number | string): Observable<Comments> {
    return this.http.get<Comments>(`http://localhost:3000/api/comments/${id}`);
  }
}
