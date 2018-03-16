import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '..';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    // нельзя просто внедрить сервис AuthService в интерсептор,
    // так как он использует HttpClient
    const authService = this.injector.get(AuthService);

    const authRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        `token ${authService.token}`
      )
    });

    return next.handle(authRequest);
  }
}
