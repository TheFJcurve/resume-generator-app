import { Skill } from "../resumeService"
import processText from "./processText";

const useLatexSkills = (skills: Skill[]) => {
    let latexSkills = `\\header{\\textbf{Skills}} \n`;
    latexSkills += `\\begin{tabular}{l l} \n`
    const len = skills.length;
    for (let i = 0; i < len; i++) {
        const skillHeading = processText(skills[i].skillHeading)
        const skillSkills = processText(skills[i].skill) 
        latexSkills += `${skillHeading}: \& ${skillSkills} \\\\ \n`
    }
    latexSkills += `\\end{tabular} \\\\ \n`
    return latexSkills;
}

export default useLatexSkills