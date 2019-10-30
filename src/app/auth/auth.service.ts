import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY = 'AIzaSyBlXtBN_hOSK_YFR32Y-f6s88JFgM27GJU';
  API_URL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
    this.API_KEY;
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.API_URL, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
