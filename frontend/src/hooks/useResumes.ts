interface HeadingPage {
    name: string;
    email: string;
    phone: string;
    website?: string;
    linkedin?: string;
}

interface CertificationsPage {
    certificate: string;
    description: string;
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

export interface Resume {
    _id: string;
    heading: HeadingPage;
    education: EducationPage[];
    experience: ExperiencePage[];
    projects: ProjectPage[];
    skills: SkillsPage[];
    certifications: CertificationsPage[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}  

const useResumes = () => {
  return;
}

export default useResumes