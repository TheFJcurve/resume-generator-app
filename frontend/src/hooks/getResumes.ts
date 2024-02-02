import { useQuery } from "@tanstack/react-query"; 
import resumeService, { Resume } from "../services/resumeService";

const getResumes = () => useQuery<Resume[], Error>({
    queryKey: ["resumes"],
    queryFn: resumeService.getAll,
});

export default getResumes