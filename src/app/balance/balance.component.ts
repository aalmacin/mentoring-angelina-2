import { Component, OnInit, OnDestroy } from "@angular/core";
import { BalanceSubject } from "../balance";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "../reducers";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.css"]
})
export class BalanceComponent implements OnInit, OnDestroy {
  balance = 0;

  subscriptions = new Subscription();
  constructor(private store: Store<State>) {}

  ngOnInit() {
    // this.subscriptions.add(
    //   BalanceSubject.subscribe(balance => {
    //     this.balance = balance;
    //   })
    // );
    this.subscriptions.add(
      this.store
        .select(state => state.balance)
        .subscribe(balance => {
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
