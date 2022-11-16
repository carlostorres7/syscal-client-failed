import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { AuthInterface, AuthServiceResponse } from 'src/app/models/auth/auth-interface';
import { MainRouting } from 'src/app/shared/models/main-routing';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri: string;
  private name_key_token: string = 'auth-token';
  private name_key_user: string = 'user-info';
  private userInfo?: AuthServiceResponse;

  constructor(private http: HttpClient) {
    this.uri = environment.url + 'auth/';
  }

  login(data: AuthInterface): Observable<AuthServiceResponse> {
    return this.http.post<AuthServiceResponse>(this.uri + 'login', data)
      .pipe(
        tap((value) => {
          this.setToken(value.auth_token);
          this.setUserInfo(value)
        })
      );
  }

  getToken(): string | null {
    let token: string | null = localStorage.getItem(this.name_key_token);
    return token ? token : null;
  }

  getUserInfo(): AuthServiceResponse {
    let data: string | null = localStorage.getItem(this.name_key_user);
    let user_info: AuthServiceResponse = JSON.parse((data)? data : '');
    this.userInfo = user_info;
    return this.userInfo;
  }

  getMains(): MainRouting[] | undefined {
    let mains: MainRouting[] | undefined;
    if (!this.userInfo) {
      mains = this.getUserInfo().roles.mains;
      return mains;
    } else {
      mains = this.userInfo.roles.mains;
      return mains;
    }
  }

  private setToken(token: string): void {
    localStorage.setItem(this.name_key_token,token);
  }

  private setUserInfo(data: AuthServiceResponse) {
    localStorage.setItem(this.name_key_user,JSON.stringify(data));
  }

}
