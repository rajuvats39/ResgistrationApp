import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationappGlobalService {
  
 registrationAppApiUrls = {
    registrations: '/api/registrations',
    get: (registrationId: string) => `/api/registrations/${registrationId}`,
    delete: (registrationId: string) => `/api/registrations/${registrationId}`
  };
  
}
