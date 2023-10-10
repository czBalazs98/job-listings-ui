import { Component } from '@angular/core';
import { Job, JobType } from '../../model/job';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss'],
})
export class JobListingComponent {

  jobs: Job[] = [];

  isFilterVisible: boolean = false;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.searchItems([]);
  }

  searchItems(keywords: string[]) {
    this.jobService.findJobs(keywords).subscribe(data => this.jobs = data);
  }
}
