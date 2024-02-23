import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Story } from '../models/hit';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardComponent {
  @Input() story!: Story | null;

  normalizeUrl(url: string | undefined) {
    if(!url) return;

    return url.replace('https://', '').split("/")[0];
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
