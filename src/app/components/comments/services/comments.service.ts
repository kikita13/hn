import { Injectable, inject } from '@angular/core';
import { CommentsApiService } from './comments-api.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly commentsApiService = inject(CommentsApiService);

  getComments(id: string | number) {
    return this.commentsApiService.getComments(id);
  }
}
