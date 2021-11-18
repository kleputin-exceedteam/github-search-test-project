import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepository } from '../state/repository/repository.model';

export interface ISearchResponse {
  total_count: number;
  items: IRepository[];
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryApiService {

  private readonly baseSearchUrl = 'https://api.github.com/search/repositories';

  constructor(private readonly http: HttpClient) { }

  getRepositoriesByQuery(query: string, itemsPerPage: number, pageIndex: number): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>(this.baseSearchUrl, {
      params: {
        q: query,
        per_page: itemsPerPage,
        page: pageIndex
      }
    });
  }
}
