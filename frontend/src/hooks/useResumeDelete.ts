import resumeService from '../services/resumeService';

interface Props {
    id: string
}

const useResumeRemove = ({id}: Props) => {
    resumeService.delete(id);
    console.log("deleted")
}

export default useResumeRemove