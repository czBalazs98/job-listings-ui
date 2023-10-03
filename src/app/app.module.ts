import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { JobListingComponent } from './jobs/components/job-listing/job-listing.component';
import { JobCardComponent } from './jobs/components/job-card/job-card.component';
import { TagComponent } from './jobs/components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JobListingComponent,
    JobCardComponent,
    TagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
