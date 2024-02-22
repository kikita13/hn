import { NewsApiService } from './news-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly newsApiService = inject(NewsApiService);

  getNews(page: number) {
    return this.newsApiService.getNews(page);
  }
}
