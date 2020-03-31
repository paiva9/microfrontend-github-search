import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { App } from "./app.component";

enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([], { useHash: true })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/search/users/" }],
  declarations: [App],
  bootstrap: [App]
})
export class MainModule {}
