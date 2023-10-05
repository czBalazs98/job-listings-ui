import { Component, Input } from '@angular/core';
import { Job } from 'src/app/jobs/model/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  
  @Input({required: true})
  job!: Job;

  getDaysPastCreation(): number {
    const msInDay: number = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((new Date().getTime() - this.job.created.getTime())  / msInDay));
  }

  getTimePastCreationString(): string {
    const days: number = this.getDaysPastCreation();
    if (days <= 30) {
      return days + 'd ago';
    } else if (days < 365) {
      return Math.round(Math.abs(days) / 30) + 'M ago';
    } else {
      return Math.round(Math.abs(days) / 365) + 'y ago';
    }
  }
}
