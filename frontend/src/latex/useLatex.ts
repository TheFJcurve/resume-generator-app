import { ResumeType } from "../context/ResumeContext";
import useLatexCertifications from "./useLatexCertifications";
import useLatexEducation from "./useLatexEducation";
import useLatexExperience from "./useLatexExperience";
import useLatexHeading from "./useLatexHeading";
import useLatexProjects from "./useLatexProjects";
import useLatexSkills from "./useLatexSkills";

const useLatex = (resume: ResumeType | undefined) => {
    let latexFile = `\\documentclass[a4paper]{article}
    \\usepackage{hyperref}
    \\usepackage{fullpage}
    \\usepackage{amsmath}
    \\usepackage{amssymb}
    \\usepackage{textcomp}
    \\usepackage{fontawesome}
    \\usepackage[utf8]{inputenc}
    \\usepackage[T1]{fontenc}
    \\textheight=10in
    \\pagestyle{empty}
    \\raggedright
    \\usepackage[left=0.4in,right=0.4in,bottom=0.3in,top=0.6in]{geometry}


\\def\\bull{\\vrule height 0.8ex width .7ex depth -.1ex }

% DEFINITIONS FOR RESUME %%%%%%%%%%%%%%%%%%%%%%%

\\newcommand{\\lineunder} {
    \\vspace*{-8pt} \\\\
    \\hspace*{-18pt} \\hrulefill \\\\
}

\\newcommand{\\header} [1] {
    {\\hspace*{-18pt}\\vspace*{6pt} \\textsc{#1}}
    \\vspace*{-6pt} \\lineunder
}

% END RESUME DEFINITIONS %%%%%%%%%%%%%%%%%%%%%%%

\\begin{document}
\\vspace*{-40pt} \n
`;
    if (resume?.name && resume?.heading.fullName != "") {
        if (resume.heading.fullName != "") {
            latexFile += useLatexHeading(resume.heading);
        }
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
    } else {
        latexFile += `\\begin{center} Thank you for using Resume Generator \\\\ \\textcopyright \\; Sargun Singh Bhatti, 2024 \\end{center}`
    }
    latexFile += `\\end{document}`;
    return latexFile;
}

export default useLatex