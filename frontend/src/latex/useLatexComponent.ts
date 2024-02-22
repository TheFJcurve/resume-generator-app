import useLatexCertifications from "./useLatexCertifications";
import useLatexEducation from "./useLatexEducation";
import useLatexExperience from "./useLatexExperience";
import useLatexProjects from "./useLatexProjects";
import useLatexSkills from "./useLatexSkills";

const useLatexComponent = (componentName: string, component: any) => {
  if (componentName == "education") {
    return useLatexEducation(component);
  } else if (componentName == "experience") {
    return useLatexExperience(component);
  }
    else if (componentName == "projects") {
        return useLatexProjects(component);
    } 
    else if (componentName == "skills") {
        return useLatexSkills(component);
    } 
    else if (componentName == "certifications") {
        return useLatexCertifications(component);
    }
    return ""
}

export default useLatexComponent