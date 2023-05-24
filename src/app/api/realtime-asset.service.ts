import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RealtimeAssetService {
  // Service consumes Backend rt data for plotly
  private API_URL = "http://66.175.238.218:9080";

  headers!: any;
  eventSource!: EventSource;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set(
      "Authorization",
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOIiwiZXhwIjoxNjg0OTYxNTg0fQ.cSwhd6MTSxvTYC-ccnexeIljH_x0Rxsty5umwU6lBb5gTHux4gW4OpS3kxbeihbUvAZZAsdNOJ9qkDnOv1X-Kg"
    );
  }

  getAssetById(): Observable<any> {
    return this.http
      .get(`${this.API_URL}/api/realtimeasset`, { headers: this.headers })
      .pipe(
        catchError((error: any) => {
          return throwError(() => new Error("Cannot get assetid"));
        })
      );
  }

  getStreamData(assetID: number): Observable<any> {
    return this.http
      .get(`${this.API_URL}/api/realtimeasset/${assetID}`, {
        headers: this.headers,
      })
      .pipe(
        catchError((error: any) => {
          return throwError(() => new Error("Cannot get assetid"));
        })
      );
  }

  // getGraph(): Observable<any> {
  //   return this.http.get(`${this.URL}/graph`).pipe(
  //     catchError((error: any) => {
  //       return throwError(() => new Error("An error occurred:", error));
  //     })
  //   );
  // }

  // getStreamData(assetID: number): Observable<MessageEvent> {
  //   if (!this.eventSource) {
  //     this.eventSource = new EventSource(
  //       `${this.API_URL}/api/realtimeasset/${assetID}`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //   }
  //   return new Observable((observer) => {
  //     this.eventSource.addEventListener("message", (event: MessageEvent) => {
  //       observer.next(event);
  //     });

  //     return () => {
  //       this.eventSource.close();
  //     };
  //   });
  // }
}
