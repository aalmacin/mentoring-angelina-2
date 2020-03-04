import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { BalanceSubject } from "../balance";
import { BehaviorSubject, Subscriber, Subscription } from "rxjs";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.css"]
})
export class BalanceComponent implements OnInit, OnDestroy {
  balance = 0;

  subscriptions = new Subscription();
  constructor() {}

  ngOnInit() {
    this.subscriptions.add(
      BalanceSubject.subscribe(balance => {
        this.balance = balance;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  add() {
    BalanceSubject.next(BalanceSubject.value + 10);
  }

  subtract() {
    BalanceSubject.next(BalanceSubject.value - 10);
  }
}
