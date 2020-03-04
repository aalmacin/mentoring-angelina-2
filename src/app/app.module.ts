import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BalanceComponent } from "./balance/balance.component";
import { InvestmentsComponent } from "./investments/investments.component";
import { SomeMoneyComponent } from "./investments/some-money/some-money.component";

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    InvestmentsComponent,
    SomeMoneyComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
