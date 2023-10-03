export interface Job {
    logoSrc: string;
    company: string;
    position: string;
    created: Date;
    location: string;
    jobType: JobType;
    featured: boolean;
    tags?: string[];
}

export enum JobType {
    FullTime = "Full time",
    PartTime = "Part time",
    Contract = "Contract"
}