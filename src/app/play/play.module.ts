import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { PlayComponent } from "./play.component";
//import { navbarComponent } from "./navbar";

@NgModule({
  declarations: [PlayComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [PlayComponent]
})
export class PlayModule {}
