import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';
import { Proj1Component } from './project/proj1/proj1.component';
import { Proj2Component } from './project/proj2/proj2.component';
import { Proj3Component } from './project/proj3/proj3.component';
import { Proj4Component } from './project/proj4/proj4.component';

const routes: Routes = [
    {
        path: '',
        component: WorkComponent
    },
    {
        path: 'proj1',
        component: Proj1Component
    },
    {
        path: 'proj2',
        component: Proj2Component
    },
    {
        path: 'proj3',
        component: Proj3Component
    },
    {
        path: 'proj4',
        component: Proj4Component
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule {

}
