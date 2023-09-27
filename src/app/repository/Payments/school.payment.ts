import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SchoolPayment {
  private payURL: string = 'http://localhost:1817';


  redirectUrl: string;


  constructor(
    private http: HttpClient,
  ) {

  }

  public makeSchoolPayments(pData: any): Observable<any> {
    console.log('payment prams ==>', pData);
    return this.http
      .post<any>(`${this.payURL}/payment/makepayments`, pData)
      .pipe(
        tap(_res => this.log(`Make school payment`)),
        catchError(this.handleError('Payment Services', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      alert(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
