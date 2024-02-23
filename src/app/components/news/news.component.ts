import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from './models/news';
import { NewsService } from './services/news.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  allNews$ = new BehaviorSubject<News | null>(null);
  page$ = new BehaviorSubject(1);
  pages$ = new BehaviorSubject([1]);
  private readonly newsService = inject(NewsService);

  ngOnInit(): void {
    this.newsService.getNews(this.page$.value).subscribe((data) => {
      this.allNews$.next(data);

      this.pages$.next(this.createPagesArray(data.nbPages));

      this.page$.next(data.page);
    });
  }

  createPagesArray(pages: number) {
    const result = [];

    for (let i = 1; i < pages; i++) {
      result.push(i);
    }

    return result;
  }

  choosePage(page: number) {
    this.newsService.getNews(page).subscribe(data => {
      this.allNews$.next(data);

      this.page$.next(data.page);
    })
  }
}
