import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Proj4Component } from "./proj4.component";
//import { navbarComponent } from "./navbar";

@NgModule({
  declarations: [Proj4Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [Proj4Component]
})
export class Proj4Module {}
