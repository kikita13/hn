import { Component, Input } from '@angular/core';
import { Comment } from '../models/comments';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.less'
})
export class CommentComponent {
  @Input() comment!: Comment;

  formatTimeAgo(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
  
    const diffMilliseconds = +now - +date;
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
  
    if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffMinutes > 0) {
      return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    } else {
      return `${diffSeconds} second${diffSeconds > 1 ? 's' : ''} ago`;
    }
  }
}

