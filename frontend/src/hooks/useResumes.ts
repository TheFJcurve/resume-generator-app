import { useQuery } from "@tanstack/react-query"; 
import resumeService, { Resume } from "../services/resumeService";

const useResumes = () => useQuery<Resume[], Error>({
    queryKey: ["resumes"],
    queryFn: resumeService.getAll,
    staleTime: 1000 * 60 * 5, // 5 minutes
});

export default useResumes