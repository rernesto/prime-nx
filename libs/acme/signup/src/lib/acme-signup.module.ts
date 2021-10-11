import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './containers/signup/signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AcmeLayoutModule } from '@prime-nx/acme/layout';

@NgModule({
  imports: [
    CommonModule,
    AcmeLayoutModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: SignupComponent}
    ]),
  ],
  declarations: [
    SignupComponent,
    SignupFormComponent
  ],
})
export class AcmeSignupModule {}
