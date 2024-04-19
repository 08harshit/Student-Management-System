import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('token');

    if (authToken) {
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${authToken}` },
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
