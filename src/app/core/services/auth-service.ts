import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = 'https://dummyjson.com'

  private http = inject(HttpClient)

  login(data: any) {
    return this.http.post(
      `${this.apiUrl}/auth/login`, data
    )
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    return localStorage.removeItem('token')
  }

}
