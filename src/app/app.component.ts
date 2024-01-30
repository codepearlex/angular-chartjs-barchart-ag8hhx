import { Component, OnInit } from "@angular/core";

import { Chart } from "chart.js/auto";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public chart: Chart;
  ngOnInit() {
    this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: ["AIRBUS INDUSTRIE A330 A330"],
        datasets: [
          {
            label: "H - Transponder...",
            data: [517, 19, 3, 5],
            borderWidth: 1,
            backgroundColor: "#407ab3"
          }
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right'
          }
        }
      }
    });
  }
}
