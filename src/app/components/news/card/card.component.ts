import { Component, Input } from '@angular/core';
import { Hit } from '../models/hit';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {
  @Input() story!: Hit;

  normalizeUrl(url: string | undefined) {
    if(!url) return

    return url.replace('https://', '').split("/")[0]
  }

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
