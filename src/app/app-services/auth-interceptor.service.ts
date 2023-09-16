import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from where you have stored it (e.g., localStorage or a service)
    const token = localStorage.getItem('auth_token'); // Replace with your actual storage mechanism

    // Clone the request and add the token to the headers if it exists
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Continue with the request
    return next.handle(request);
  }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token'); // Get the token from local storage
    return !!token; // Return true if token exists, false if it doesn't
  }
  

}
