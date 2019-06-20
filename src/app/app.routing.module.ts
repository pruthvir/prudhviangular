import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { WorkComponent } from "./work/work.component";
import { StoryComponent } from "./story/story.component";
import { PlayComponent } from "./play/play.component";

import { Proj1Component } from "./project/proj1/proj1.component";
import { Proj2Component } from "./project/proj2/proj2.component";
import { Proj3Component } from "./project/proj3/proj3.component";
import { Proj4Component } from "./project/proj4/proj4.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent,
    WorkComponent,
    PlayComponent,
    StoryComponent,
    Proj1Component,
    Proj2Component,
    Proj3Component,
    Proj4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "work", component: WorkComponent },
      { path: "work/proj1", component: Proj1Component },
      { path: "work/proj2", component: Proj2Component },
      { path: "work/proj3", component: Proj3Component },
      { path: "work/proj4", component: Proj4Component },
      { path: "play", component: PlayComponent },
      { path: "story", component: StoryComponent },
      { path: "**", redirectTo: "home" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
