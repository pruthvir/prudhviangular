import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
// import { navbarComponent } from "./navbar";

@NgModule({
  imports: [
    CommonModule,
    PlayRoutingModule
  ],
  declarations: [PlayComponent],
  providers: []
})
export class PlayModule {}
