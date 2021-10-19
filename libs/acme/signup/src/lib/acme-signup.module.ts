import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './containers/signup/signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AcmeLayoutModule } from '@prime-nx/acme/layout';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    AcmeLayoutModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
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
