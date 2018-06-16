import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuideComponent} from "./guide.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: GuideComponent,
    }])
  ],
  declarations: [GuideComponent]
})
export class GuideModule {
}
