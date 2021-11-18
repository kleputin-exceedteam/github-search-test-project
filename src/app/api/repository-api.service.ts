import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IRepository, IRepositoryDetail } from '../state/repository/repository.model';

export interface ISearchResponse {
  total_count: number;
  items: IRepository[];
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryApiService {

  private readonly baseSearchUrl = 'https://api.github.com/search/repositories';
  private readonly baseReposUrl = 'https://api.github.com/repos/';
  private readonly baseDownloadMarkdownUrl = 'https://raw.githubusercontent.com/';

  constructor(private readonly http: HttpClient) { }

  getRepositoriesByQuery(query: string, itemsPerPage: number, pageIndex: number, languageFilterOptions: string[]): Observable<ISearchResponse> {
    const requestQuery = languageFilterOptions.length > 0 ? query + `language: ${languageFilterOptions.join(', ')}` : query;
    return this.http.get<ISearchResponse>(this.baseSearchUrl, {
      params: {
        q: requestQuery,
        per_page: itemsPerPage,
        page: pageIndex,
      }
    });
  }

  getRepositoryDetails(name?: string): Observable<IRepositoryDetail> {
    if (!name) {
      return EMPTY;
    }
    return this.http.get(this.baseReposUrl + name).pipe(
      mergeMap((repositoryDetails) => this.getRepositoryBranches(name, repositoryDetails as IRepositoryDetail)),
      map((repositoryDetails) => ({
        ...repositoryDetails,
        readme_url: this.baseDownloadMarkdownUrl + `/${name}/${repositoryDetails.default_branch}/README.md`,
      }))
    )
  }

  getRepositoryBranches(name: string, repositoryDetails: IRepositoryDetail): Observable<IRepositoryDetail> {
    return this.http.get(this.baseReposUrl + name + '/branches').pipe(
      map(response => {
        const branches = response as any[];
        if (branches.length === 0) {
          return {
            ...repositoryDetails,
            branches: []
          };
        }
        return {
          ...repositoryDetails,
          branches: branches.map(branch => branch.name)
        }
      }
    ))
  }
}
