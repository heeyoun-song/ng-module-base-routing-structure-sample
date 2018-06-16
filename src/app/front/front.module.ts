import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontComponent} from './front.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: FrontComponent,
      children: [
        {
          path: '', redirectTo: 'project', pathMatch: 'full'
        },
        {
          path: 'project',
          loadChildren: 'app/front/project/project.module#ProjectModule'
        },
        {
          path: 'guide',
          loadChildren: 'app/front/guide/guide.module#GuideModule'
        },
      ]
    }])
  ],
  declarations: [FrontComponent]
})
export class FrontModule {
}
