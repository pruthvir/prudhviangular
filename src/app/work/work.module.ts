import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { navbarComponent } from './navbar/navbar.component';
import { Proj1Component } from './project/proj1/proj1.component';
import { Proj2Component } from './project/proj2/proj2.component';
import { Proj3Component } from './project/proj3/proj3.component';
import { Proj4Component } from './project/proj4/proj4.component';
// import { navbarComponent } from "./navbar";

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    WorkComponent,
    navbarComponent,
    Proj1Component,
    Proj2Component,
    Proj3Component,
    Proj4Component
  ],
  providers: []
})
export class WorkModule {}
