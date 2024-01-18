import resumeService from '../services/resumeService';

interface Props {
    id: string
}

const deleteResume = ({id}: Props) => {
    resumeService.delete(id);
    console.log("deleted")
}

export default deleteResume