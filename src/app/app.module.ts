import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { JobListingComponent } from './jobs/components/job-listing/job-listing.component';
import { JobCardComponent } from './jobs/components/job-card/job-card.component';
import { TagComponent } from './jobs/components/tag/tag.component';
import { FilterBarComponent } from './jobs/components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JobListingComponent,
    JobCardComponent,
    TagComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
