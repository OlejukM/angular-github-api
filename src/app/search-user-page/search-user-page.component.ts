import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {GithubService} from '../services/github.service';
import {User} from '../models/user.model';
import {filter, switchMap, debounceTime, catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'app-search-user-page',
  templateUrl: './search-user-page.component.html',
  styleUrls: ['./search-user-page.component.css']
})

export class SearchUserPageComponent implements OnInit {
  findControl = new FormControl ();
  error: Boolean = false;
  user: User;
  constructor (private githubService: GithubService) {}
  ngOnInit () {
    this.findControl.valueChanges
      .pipe (
        filter (value => value.length > 2),
        debounceTime (1000),
        switchMap (value =>
          this.githubService.getUser (value) .pipe (
            catchError (err => {
              this.user = null;
              this.error = true;
              return EMPTY;
            })
          )
        )
      )
      .subscribe (user => {
        this.user = user.items;
        this.error = false;
      });
  }
}
