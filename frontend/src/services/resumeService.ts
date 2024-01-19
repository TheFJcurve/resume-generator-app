import APIClient from "./apiClient";

export interface HeadingPage {
    fullName: string;
    email: string;
    phone: string;
    website?: string;
    linkedin?: string;
}

export interface EducationPage {
    institute: string;
    degree: string;
    location?: string;
    graduationDate?: string;
    relevantCourses?: string;
}

export interface ExperiencePage {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description: string;
}

export interface ProjectPage {
    projectName: string;
    projectLink: string;
    additionalLink?: string;
    projectDescription: string;
}

export interface SkillsPage {
    skillHeading: string;
    skill: string;
}

export interface CertificationsPage {
    name: string;
    description?: string;
}

export interface Resume {
    _id: string;
    name: string;
    heading?: HeadingPage;
    education?: EducationPage[];
    experience?: ExperiencePage[];
    projects?: ProjectPage[];
    skills?: SkillsPage[];
    certifications?: CertificationsPage[];
    createdAt: Date;
    updatedAt: Date;
}

const resumeService = new APIClient<Resume>("/api/resumes");

export default resumeService;