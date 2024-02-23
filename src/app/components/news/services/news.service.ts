import { NewsApiService } from './news-api.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly newsApiService = inject(NewsApiService);

  getNews(page: number) {
    return this.newsApiService.getNews(page);
  }

  getOne(id: string | number) {
    return this.newsApiService.getOne(id);
  }
}
