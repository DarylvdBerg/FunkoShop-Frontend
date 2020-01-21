import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserService} from '../user/user.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ((req.headers.get('no-token') == null && req.headers.get('no-token') !== 'no-token') || this.userService.isUserPresent()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.currentUser.authToken}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.jwtExpired();
          return of(err);
        }
        throw err;
      })
    );
  }

  private jwtExpired() {
    localStorage.removeItem('user');
    this.userService.currentUser = null;
    this.router.navigate(['/login']);
  }

}
