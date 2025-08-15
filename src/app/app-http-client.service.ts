import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get<TRequest, TResponse>(url: string, request?: TRequest): Observable<TResponse> {
    let options = {};
    if (request) {
      const params = new HttpParams({ fromObject: request as any });
      options = {
        params
      }
    }
    return this.httpClient.get<TResponse>(url, options)
  }

  getStreamed<TRequest, TResponse>(url: string, request?: TRequest, headers?: HttpHeaders): Observable<TResponse> {
    let options = {};
    if (request) {
      const params = new HttpParams({ fromObject: request as any });
      options = {
        headers: headers || new HttpHeaders(),
        responseType: 'arraybuffer',
        params
      }
    }
    return this.httpClient.get<TResponse>(url, options)
  }

  post<TRequest, TResponse>(url: string, request?: TRequest, isBlobResponse?: boolean, isResponseHeader?: boolean, headers?: HttpHeaders): Observable<TResponse> {
    const options = {
      headers: new HttpHeaders(),
      responseType: 'json',
      observe: 'body'
    } as any;
    if (isBlobResponse) {
      options.responseType = 'blob';
      if (isResponseHeader) {
        options.observe = 'response';
      }
    }
    if (headers) {
      options.headers = headers;
    }
    return this.httpClient.post<TResponse>(url, request, options) as any;
  }

  put<TRequest, TResponse>(url: string, request?: TRequest): Observable<TResponse> {
    return this.httpClient.put<TResponse>(url, request);
  }

  delete<TRequest, TResponse>(url: string, request?: TRequest, headers?: HttpHeaders): Observable<TResponse> {
    return this.httpClient.delete<TResponse>(url, {
      headers: headers || new HttpHeaders(),
      params: request ? new HttpParams({ fromObject: request as any }) : undefined
    });
  }

}
