import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ResumeCard from "./ResumeCard";

export interface Resume {
  _id: string;
  heading: string;
  education: string;
  experience: string;
  projects: string;
  skills: string;
  certifications: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ResumeList = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    const fetchResumes = async () => {
      const response = await fetch("/api/resumes");
      const json = await response.json();

      if (response.ok) {
        setResumes(json);
      }
    };

    fetchResumes();
  }, []);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={2} padding={2} spacing={3}>
      {resumes &&
        resumes.map((resume) => (
          <ResumeCard key={resume._id} resume={resume} />
        ))}
    </SimpleGrid>
  );
};

export default ResumeList;
