import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private authURL: string = 'http://localhost:1817';

  isLoggedIn = false;
  redirectUrl: string;
  private isAuthenticated = false;


  constructor(
    private http: HttpClient,
  ) {
    this.isAuthenticated = !!localStorage.getItem('token');
  }

  checkLoggedIn() {
    console.log(`localStorage Token: ${localStorage.getItem('token')}`);
    return localStorage.getItem('token') != null;
  }
  login(userData: any): Observable<any> {
    // this.log(`login data >>> ${JSON.stringify(userData)}`);
    return this.http.post<any>(this.authURL + '/auth/login', userData)
      .pipe(
        tap(_ => { this.isLoggedIn = true; }),
        catchError(this.handleError('login', []))
      );
  }
  register(userData: any): Observable<any> {
    console.log('register user data: ', userData);
    return this.http.post<any>(this.authURL + '/users', userData)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('Register', []))
      );
  }
  public getUserProfile(): Observable<any> {
    return this.http.get(`${this.authURL}/auth/profile`)
      .pipe(
        tap(_ => this.log(`AuthService: profile >>>>`) ),
        catchError(this.handleError('UserProfile', []))
      );
  }
  public logout() {
    localStorage.clear();
    // this.router.navigate (['/auth/login']);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
