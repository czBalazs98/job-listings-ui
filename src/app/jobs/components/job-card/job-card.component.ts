import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Job, JobType } from 'src/app/jobs/model/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input({ required: true })
  job!: Job;

  constructor(private domSanitizer: DomSanitizer) {}

  getDaysPastCreation(): number {
    const msInDay: number = 24 * 60 * 60 * 1000;
    return Math.round(
      Math.abs((new Date().getTime() - this.job.created.getTime()) / msInDay)
    );
  }

  getTimePastCreationString(): string {
    const days: number = this.getDaysPastCreation();
    if (days === 0) {
      return 'Published today';
    } else if (days <= 30) {
      return days + 'd ago';
    } else if (days < 365) {
      return Math.round(Math.abs(days) / 30) + 'M ago';
    } else {
      return Math.round(Math.abs(days) / 365) + 'y ago';
    }
  }

  getLogo() {
    let base64Image = btoa(this.job.logoSrc);
    return this.domSanitizer.bypassSecurityTrustUrl(
      `data:image/svg+xml;base64,${base64Image}`
    );
  }
}
