import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private readonly http = inject(HttpClient);

  getNews(page: number): Observable<News> {
    return this.http.get<News>(`http://localhost:3000/api/news/${page}`);
  }
}
