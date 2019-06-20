import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Proj1Component } from "./proj1.component";
//import { navbarComponent } from "./navbar";

@NgModule({
  declarations: [Proj1Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [Proj1Component]
})
export class Proj1Module {}
