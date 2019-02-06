import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  @Input()
  user: User;

  constructor(private http: HttpClient) {
  }

  getUser(name: string): Observable<User> {
    const url = `https://api.github.com/search/users?q=${name}`;
    return this.http.get <User>(url);
  }

  getUserInfo(name: any): Observable<User> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get <User>(url);
  }

  // getUserRepos(name: string): Observable <User> {
  //   const url = `https://api.github.com/users/${name}/repos`;
  //   return this.http.get <User> (url);
  // }
}
