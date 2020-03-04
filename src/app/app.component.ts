import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  balance = 10;

  changeHandler(newVal: number) {
    this.balance = newVal;
  }
}
