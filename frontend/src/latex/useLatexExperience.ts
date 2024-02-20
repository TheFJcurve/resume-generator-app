import { Experience } from "../services/resumeService"

const useLatexExperience = (experience: Experience[]) => {
    let latexExperience = `\\textbf{Experience} \\\ \n \\par\\noindent\\rule{\\textwidth}{0.2pt} \\\ \n`;
    const len = experience.length;
    for (let i = 0; i < len; i++) {
      latexExperience += `\\textbf{${experience[i].company}}, \\textnormal{\\textit{${experience[i].position}}}`
      if (experience[i].location) latexExperience += ` | ${experience[i].location}`
      latexExperience += `\\hfill ${experience[i].startDate}`
      if (experience[i].endDate) latexExperience += ` - ${experience[i].endDate}`
      latexExperience += `\n \\begin{itemize} \n \\item {${experience[i].description}} \n \\end{itemize} \n`
    }
  return latexExperience;
}

export default useLatexExperience