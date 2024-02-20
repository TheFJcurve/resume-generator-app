import { ResumeType } from "../context/ResumeContext";
import useLatexCertifications from "./useLatexCertifications";
import useLatexEducation from "./useLatexEducation";
import useLatexExperience from "./useLatexExperience";
import useLatexHeading from "./useLatexHeading";
import useLatexProjects from "./useLatexProjects";
import useLatexSkills from "./useLatexSkills";

const useLatex = (resume: ResumeType | undefined) => {
    let latexFile = `\\documentclass{article}
    \\usepackage[left=1cm,top=1cm,right=1cm,bottom=1cm,bindingoffset=0.5cm]{geometry} 
    \\usepackage{fontawesome} 
    \\usepackage{hyperref}
    \\usepackage{setspace}
    \\pagestyle{empty}
    \\singlespacing
    \\begin{document}`;
    if (resume) {
        latexFile += useLatexHeading(resume.heading);
        if (resume.education.length > 0) {
            latexFile += useLatexEducation(resume.education);
        }
        if (resume.experience.length > 0) {
            latexFile += useLatexExperience(resume.experience); 
        }
        if (resume.projects.length > 0) {
            latexFile += useLatexProjects(resume.projects);
        }
        if (resume.skills.length > 0) {
            latexFile += useLatexSkills(resume.skills);
        }
        if (resume.certifications.length > 0) {
            latexFile += useLatexCertifications(resume.certifications);
        }
    }
    latexFile += `\\end{document}`;
    console.log(latexFile);
    return latexFile;
}

export default useLatex