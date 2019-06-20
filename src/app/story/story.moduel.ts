import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoryComponent } from "./story.component";
//import { navbarComponent } from "./navbar";

@NgModule({
  declarations: [StoryComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [StoryComponent]
})
export class StoryModule {}
