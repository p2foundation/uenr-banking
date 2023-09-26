import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor {
  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer' + token
        }
      });
    }

    // if (token) {
    //   console.log('isToken???', JSON.stringify(token));
    //   request = request.clone({headers: request.headers.set('Authorization', '' + token)});
    // }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event ==>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(`Auth Login Error intercept: ${JSON.stringify(error)}`);
        if (error.status === 401) {
          this.router.navigate(['/banking/accounts/open-account/login-accounts']);
        }
        if (error.status === 400) {
          const errorMsg = error.error;
          console.error(JSON.stringify(errorMsg));
        }
        return throwError(error);
      }));
  }
}
