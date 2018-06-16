import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";

const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: 'front', pathMatch: 'full'
  },
  {
    path: 'front', loadChildren: 'app/front/front.module#FrontModule'
  },
  {
    path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
