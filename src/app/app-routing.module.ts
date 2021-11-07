import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogoutComponent } from './modules/input/logout/logout.component';
import { ParentComponent } from './modules/input/parent/parent.component';

const routes: Routes = [
  {
    path: 'app-component',
    component: AppComponent,
    children: [
      {
        path: 'login',
        component: ParentComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
