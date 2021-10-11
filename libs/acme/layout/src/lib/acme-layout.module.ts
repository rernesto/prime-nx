import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';

@NgModule({
  imports: [CommonModule],
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
