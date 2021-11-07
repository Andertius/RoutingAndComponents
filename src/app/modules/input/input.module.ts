import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    LogoutComponent,
    ParentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [    
    RegistrationComponent,
    LogoutComponent,
    ParentComponent
  ]
})
export class InputModule { }
