import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { PlayModule } from './play/play.module';
import { StoryModule } from './story/story.module';
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    HomeModule,
    PlayModule,
    StoryModule,
    WorkModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {}
