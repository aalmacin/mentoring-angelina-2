import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { BalanceSubject } from "../../balance";
import { Subscription } from "rxjs";

@Component({
  selector: "app-some-money",
  templateUrl: "./some-money.component.html",
  styleUrls: ["./some-money.component.css"]
})
export class SomeMoneyComponent implements OnInit, OnDestroy {
  money = 0;
  subscriptions = new Subscription();

  constructor() {}

  ngOnInit() {
    this.subscriptions.add(
      BalanceSubject.subscribe(balance => {
        this.money = balance;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
