import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BalanceComponent } from "./balance/balance.component";
import { InvestmentsComponent } from "./investments/investments.component";
import { SomeMoneyComponent } from "./investments/some-money/some-money.component";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    InvestmentsComponent,
    SomeMoneyComponent
  ],
  imports: [BrowserModule, StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
