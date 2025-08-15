import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppHttpClientService } from './app-http-client.service';
import { RegistrationappGlobalService } from './registrationapp-global-service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationappService {

  constructor(
    private readonly httpClient: AppHttpClientService,
    private readonly registrationappGlobalService: RegistrationappGlobalService
  ) { }

  /** Create a new registration */
  public createRegistration(data: any, key: string): Observable<any> {
    return this.httpClient.post<any, any>(
      `${this.registrationappGlobalService.registrationAppApiUrls.registrations}?key=${encodeURIComponent(key)}`,
      data
    );
  }

  /** Get registration details by ID */
  public getRegistrationById(registrationId: string, key: string): Observable<any> {
    return this.httpClient.get<any, any>(
      `${this.registrationappGlobalService.registrationAppApiUrls.get(registrationId)}?key=${encodeURIComponent(key)}`
    );
  }

  /** Delete registration by ID */
  public deleteRegistration(registrationId: string, key: string): Observable<any> {
    return this.httpClient.delete<any, any>(
      `${this.registrationappGlobalService.registrationAppApiUrls.delete(registrationId)}?key=${encodeURIComponent(key)}`
    );
  }
}
