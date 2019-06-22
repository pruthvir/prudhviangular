import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
// import { navbarComponent } from "./navbar";

@NgModule({
  imports: [
    CommonModule,
    StoryRoutingModule
  ],
  declarations: [StoryComponent],
  providers: []
})
export class StoryModule {}
