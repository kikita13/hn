import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { UserService } from './services/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  private readonly userSercvice = inject(UserService);
  readonly user$ = new BehaviorSubject<User | null>(null);
  private readonly router = inject(ActivatedRoute);

  ngOnInit(): void {
      this.router.params.subscribe(params => {
        this.userSercvice.getUser(params['user']).subscribe(user => {
          this.user$.next(user)
        })
      })
  }
}
