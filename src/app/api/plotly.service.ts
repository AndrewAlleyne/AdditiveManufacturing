import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlotlyService {
  // Service consumes Backend rt data for plotly
  private URL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.URL}/data`);
  }

  getHeader(): Observable<any> {
    return this.http.get(`${this.URL}/header`);
  }
}
