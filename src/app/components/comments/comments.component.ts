import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news/services/news.service';
import { BehaviorSubject } from 'rxjs';
import { CardComponent } from '../news/card/card.component';
import { CommentsService } from './services/comments.service';
import { Story } from '../news/models/hit';
import { Comment } from './models/comments';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, CommentComponent, CardComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.less',
})
export class CommentsComponent implements OnInit {
  private readonly router = inject(ActivatedRoute);
  private readonly newsService = inject(NewsService);
  private readonly commentsService = inject(CommentsService);
  readonly story$ = new BehaviorSubject<Story | null>(null);
  readonly comments$ = new BehaviorSubject<Comment[]>([]);

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.newsService
        .getOne(params['id'])
        .subscribe((data) => this.story$.next(data));

      this.commentsService.getComments(params['id']).subscribe((data) => {
        this.comments$.next(this.buildCommentHierarchy(data.hits));
      });
    });
  }

  buildCommentHierarchy(comments: Comment[]) {
    const commentMap: { [key: string]: Comment } = {};
    const topLevelComments: Comment[] = [];

    comments.forEach((comment) => {
      commentMap[comment.objectID] = comment;
    });

    comments.forEach((comment) => {
      const parent_id = comment.parent_id;
      if (parent_id && commentMap[parent_id]) {
        const parent = commentMap[parent_id];
        if (!parent.childComments) {
          parent.childComments = [];
        }
        parent.childComments.push(comment);
      } else {
        topLevelComments.push(comment);
      }
    });

    return topLevelComments;
  }
}
