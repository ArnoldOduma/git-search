import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  private name: string;
  constructor(private _http: HttpClient) {
    console.log('Ready');
  }

  userRequest(name: string) {
    interface IApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      followers: string;
      following: string;
      public_repos: string;
      html_url: string;
    }
    // tslint:disable-next-line: max-line-length
    return this._http.get<IApiResponse>('https://api.github.com/users/'
      + name + '?access_token=' + environment.secretKey).pipe(map(res => res));
  }
  userRepos(name: string) {
    interface IApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      followers: string;
      following: string;
      public_repos: string;
      html_url: string;
    }
    return this._http.get<IApiResponse>('https://api.github.com/users/'
      + name + '/repos?access_token=' + environment.secretKey);
  }
}
