import APIClient from "./apiClient";

interface HeadingPage {
    fullName: string;
    email: string;
    phone: string;
    website?: string;
    linkedin?: string;
}

interface EducationPage {
    institute: string;
    degree: string;
    location?: string;
    graduationDate?: string;
    relevantCourses?: string;
}

interface ExperiencePage {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description: string;
}

interface ProjectPage {
    projectName: string;
    projectLink: string;
    additionalLink?: string;
    projectDescription: string;
}

interface SkillsPage {
    skillHeading: string;
    skills: string;
}

interface CertificationsPage {
    certificate: string;
    description?: string;
}

export interface Resume {
    _id: string;
    name: string;
    heading: HeadingPage;
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