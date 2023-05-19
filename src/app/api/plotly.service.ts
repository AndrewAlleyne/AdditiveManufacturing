import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlotlyDataService {
  // Service consumes Backend rt data for plotly
  private URL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getHeader(): Observable<any> {
    return this.http.get(`${this.URL}/header`).pipe(
      catchError((error: any) => {
        return throwError(() => new Error("An error occurred:", error));
      })
    );
  }

  getGraph(): Observable<any> {
    return this.http.get(`${this.URL}/graph`).pipe(
      catchError((error: any) => {
        return throwError(() => new Error("An error occurred:", error));
      })
    );
  }

}
