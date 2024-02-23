import { Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comments/comments.component';

export const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    title: 'news',
  },
  {
    path: 'users/:user',
    component: UserComponent,
    title: 'User',
  },
  {
    path: 'comments/:id',
    component: CommentsComponent,
    title: 'Commnets',
  },
];
