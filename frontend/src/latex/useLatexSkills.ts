import { Skill } from "../services/resumeService"

const useLatexSkills = (skills: Skill[]) => {
    let latexSkills = `\\textbf{Skills} \\\ \n \\par\\noindent\\rule{\\textwidth}{0.2pt} \\\ \n \\begin{tabular}{ll}`;
    const len = skills.length;
    for (let i = 0; i < len; i++) {
        latexSkills += `\\textbf{${skills[i].skillHeading}}: \& ${skills[i].skill} \\\\ \n`
    }
    latexSkills += `\\end{tabular} \n`
    return latexSkills;
}

export default useLatexSkills