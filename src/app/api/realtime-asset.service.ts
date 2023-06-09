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
  private API_URL = "http://198.251.74.197:9080";

  headers!: any;
  eventSource!: EventSource;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set(
      "Authorization",
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOIiwiZXhwIjoxNjg0OTk4ODE5fQ.UlNZ1b4SrOj8_ydd1FI_xvmz3V5I-B6IVB8gNTrbzezXPg60RHNp7lFma9TCNtZeBBWwMszZlOanldWI9ifEtQ"
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
    console.log("asset id", assetID);
    return this.http
      .get(`${this.API_URL}/api/realtimeasset/all/${assetID}`, {
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
