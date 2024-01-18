import { useQuery } from '@tanstack/react-query'
import resumeService, { Resume } from '../services/resumeService'

const getResume = (id: string) => useQuery<Resume, Error>({
    queryKey: ['resume', id],
    queryFn: () => resumeService.getOne(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
})

export default getResume