import APIClient from "./apiClient";

export interface Heading {
    fullName: string;
    email: string;
    phoneNumber: string;
    personalWebsite?: string;
    linkedinUrl?: string;
}

export interface Education {
    institute: string;
    degree: string;
    location?: string;
    graduationDate?: string;
    relevantCourses?: string;
}

export interface Experience {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description: string;
}

export interface Project {
    projectName: string;
    projectLink: string;
    additionalLink?: string;
    description: string;
}
export interface Skill {
    skillHeading: string;
    skill: string;
}

export interface Certification {
    name: string;
    description?: string;
}

export interface Resume {
    _id: string;
    name: string;
    heading?: Heading;
    education?: Education[];
    experience?: Experience[];
    projects?: Project[];
    skills?: Skill[];
    certifications?: Certification[];
    createdAt: Date;
    updatedAt: Date;
}

const resumeService = new APIClient<Resume>("/api/resumes");

export default resumeService;