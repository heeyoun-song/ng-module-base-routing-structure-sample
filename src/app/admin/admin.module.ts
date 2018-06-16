import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "", component: AdminComponent,
      children: [
        {
          path: '', redirectTo: 'users', pathMatch: 'full'
        },
        {
          path: 'users', component: UsersComponent
        },
      ]
    }])
  ],
  declarations: [AdminComponent, UsersComponent],
  exports: [AdminComponent, UsersComponent]
})
export class AdminModule {
}
