import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfilePageComponent implements OnInit {
  @Input()
  user: User;
  public userId;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.getUserId();
  }
  //
  // getUserId(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.githubService.getUserId(id)
  //     .subscribe(user => this.user = user);
  // }
  goBack(): void {
    this.location.back();
  }
}
