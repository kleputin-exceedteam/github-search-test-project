import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryApiService {

  private readonly baseSearchUrl = 'https://api.github.com/search/repositories';

  constructor(private readonly http: HttpClient) { }

  getRepositoriesByQuery(query: string): Observable<any> {
    return this.http.get(this.baseSearchUrl, {
      params: {
        q: query
      }
    });
  }
}
