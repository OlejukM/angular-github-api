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
  public userLogin;
  public userInfo;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.userLogin = this.route.snapshot.paramMap.get('login');
    this.githubService.getUserInfo(this.userLogin)
      .subscribe(info => this.userInfo = info);
  }
  goBack(): void {
    this.location.back();
  }
}
