import resumeService, { Resume } from "../services/resumeService"

interface Props {
    id: string,
    resume: Resume,
}

const useResumeUpdate = ({ id, resume }: Props) => {
    resumeService.update(id, resume);
    console.log("updated")
}

export default useResumeUpdate