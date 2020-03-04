import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-some-money",
  templateUrl: "./some-money.component.html",
  styleUrls: ["./some-money.component.css"]
})
export class SomeMoneyComponent implements OnInit {
  @Input()
  money = 0;

  constructor() {}

  ngOnInit() {}
}
