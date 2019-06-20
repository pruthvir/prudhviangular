import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
//import { navbarComponent } from "./navbar";

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
