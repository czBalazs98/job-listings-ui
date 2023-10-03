import { Component } from '@angular/core';
import { Job, JobType } from '../../model/job';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss'],
})
export class JobListingComponent {
  jobs: Job[] = [
    {
      logoSrc: '../../../../assets/images/myhome.svg',
      company: 'MyHome',
      position: 'Junior Frontend Developer',
      created: new Date('2023-10-02'),
      jobType: JobType.Contract,
      location: 'USA only',
      featured: true,
      tags: ['Frontend', 'Junior', 'CSS', 'JavaScript']
    },
    {
      logoSrc: '../../../../assets/images/photosnap.svg',
      company: 'Photosnap',
      position: 'Senior Frontend Developer',
      created: new Date('2023-09-27'),
      jobType: JobType.FullTime,
      location: 'USA only',
      featured: true,
      tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript']
    },
    {
      logoSrc: '../../../../assets/images/manage.svg',
      company: 'Manage',
      position: 'Fullstack Developer',
      created: new Date('2023-10-03'),
      jobType: JobType.PartTime,
      location: 'Remote',
      featured: true,
      tags: ['Fullstack', 'Midweight', 'Python', 'React']
    },
    {
      logoSrc: '../../../../assets/images/loop-studios.svg',
      company: 'Loop Studios',
      position: 'Software Engineer',
      created: new Date('2023-10-03'),
      jobType: JobType.FullTime,
      location: 'Worldwide',
      featured: false,
      tags: ['Fullstack', 'Midweight', 'JavaScript', 'Sass', 'Ruby']
    },
    {
      logoSrc: '../../../../assets/images/faceit.svg',
      company: 'FaceIt',
      position: 'Junior Backend Developer',
      created: new Date('2023-09-03'),
      jobType: JobType.FullTime,
      location: 'UK only',
      featured: false,
      tags: ['Backend', 'Junior', 'Ruby', 'RoR']
    }
  ];
}
