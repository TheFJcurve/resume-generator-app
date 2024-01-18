import resumeService, { Resume } from "../services/resumeService"

interface Props {
    resume: Resume,
}

const useResumeCreate = ({resume}: Props) => {
    resumeService.create(resume);
    console.log("created")
}

export default useResumeCreate