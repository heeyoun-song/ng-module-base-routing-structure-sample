import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectComponent} from "./project.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ProjectComponent,
    }])
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule {
}
