import { Component } from "@angular/core";
import { cilChartPie, cilArrowRight } from "@coreui/icons";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.scss"],
})
export class WarningAlertComponent {
  icons = { cilChartPie, cilArrowRight };

  colors = [
    { color: "primary", textColor: "primary" },
    { color: "secondary", textColor: "secondary" },
    { color: "success", textColor: "success" },
    { color: "danger", textColor: "danger" },
    { color: "warning", textColor: "warning" },
    { color: "info", textColor: "info" },
    { color: "light" },
    { color: "dark" },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
