import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, SkeletonModule, ButtonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AdBannerComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdBannerComponent
  ],
})
export class AcmeLayoutModule {}
