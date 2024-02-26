import { Skill } from "../resumeService"

const useLatexSkills = (skills: Skill[]) => {
    let latexSkills = `\\header{\\textbf{Skills}} \n`;
    latexSkills += `\\begin{tabular}{l l} \n`
    const len = skills.length;
    for (let i = 0; i < len; i++) {
        latexSkills += `${skills[i].skillHeading}: \& ${skills[i].skill} \\\\ \n`
    }
    latexSkills += `\\end{tabular} \\\\ \n`
    return latexSkills;
}

export default useLatexSkills