import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private http = inject(HttpClient)

  apiUrl = 'https://dummyjson.com'


  getProfile() {
    return this.http.get(`${this.apiUrl}/auth/me`)
  }

}
