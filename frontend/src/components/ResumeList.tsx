import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ResumeCard from "./ResumeCard";
import { Resume } from "../hooks/useResumes";

const ResumeList = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResumes = async () => {
      const response = await fetch("/api/resumes");
      const json = await response.json();

      if (response.ok) {
        setResumes(json);
        setIsLoading(false);
      }
    };

    fetchResumes();
  }, []);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={3} gap={3}>
      {isLoading && <Spinner size="xl" />}

      {resumes &&
        resumes.map((resume) => (
          <ResumeCard key={resume._id} resume={resume} />
        ))}
    </SimpleGrid>
  );
};

export default ResumeList;
