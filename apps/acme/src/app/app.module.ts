import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StyleClassModule,
    RouterModule.forRoot(
      [
        {
          path: 'acme/signup',
          loadChildren: () =>
            import('@prime-nx/acme/signup').then(
              (module) => module.AcmeSignupModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
