import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { WorkComponent } from "./work.component";
//import { navbarComponent } from "./navbar";

@NgModule({
  declarations: [WorkComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [WorkComponent]
})
export class WorkModule {}
