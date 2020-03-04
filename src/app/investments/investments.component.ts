import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-investments",
  templateUrl: "./investments.component.html",
  styleUrls: ["./investments.component.css"]
})
export class InvestmentsComponent implements OnInit {
  @Input()
  balance = 0;

  constructor() {}

  ngOnInit() {}
}
