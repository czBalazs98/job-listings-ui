import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Job, JobType } from '../model/job';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private httpClient: HttpClient) {}

  findJobs(keywords: string[]): Observable<Job[]> {
    return this.httpClient
      .get<Job[]>(`${environment.jobListingsServiceUrl}/jobs/filter?keywords=${keywords}`)
      .pipe(
        map((response: Job[]) =>
          response.map((job: Job) => ({
            ...job,
            jobType: JobType[job.jobType.toString() as keyof typeof JobType],
            created: new Date(job.created),
          }))
        )
      );
  }
}
