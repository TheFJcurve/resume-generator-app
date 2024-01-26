import { Certification, Education, Experience, Heading, Project, Skill } from "../services/resumeService";
import useResume from "./useResume";

interface Props {
    componentName: string;
    resumeComponent: Heading | Education[] | Experience[] | Project[] | Skill[] | Certification[];
}

const getResume = ({componentName, resumeComponent} : Props) => {
    const {dispatch} = useResume();
    dispatch({type: 'UPDATE_RESUME', field: componentName, value: resumeComponent});
}

export default getResume;