import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.css"]
})
export class BalanceComponent implements OnInit {
  @Input()
  balance = 0;

  @Output()
  balanceChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  add() {
    this.balance += 10;
    this.balanceChanged.emit(this.balance);
  }

  subtract() {
    this.balance -= 10;
    this.balanceChanged.emit(this.balance);
  }
}
