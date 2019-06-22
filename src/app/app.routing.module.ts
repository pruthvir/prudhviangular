import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: () => import('./shared/home-wrapper.module')
        .then(m => m.HomeWrapperModule)
      },
      {
        path: 'work',
        loadChildren: () => import('./shared/work-wrapper.module')
        .then(m => m.WorkWrapperModule)
      },
      {
        path: 'play',
        loadChildren: () => import('./shared/play-wrapper.module')
        .then(m => m.PlayWrapperModule)
      },
      {
        path: 'story',
        loadChildren: () => import('./shared/story-wrapper.module')
        .then(m => m.StoryWrapperModule)
      },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
