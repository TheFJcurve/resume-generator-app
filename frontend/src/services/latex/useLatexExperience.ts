import { Experience } from "../resumeService"

const useLatexExperience = (experience: Experience[]) => {
    let latexExperience = `\\header{\\textbf{Experience}} \n`;
    const len = experience.length;
    for (let i = 0; i < len; i++) {
      latexExperience += `\\textbf{${experience[i].company}} \\hfill ${experience[i].startDate}`
      if (experience[i].endDate) latexExperience += ` - ${experience[i].endDate}`
      latexExperience += `\\\\ \n`
      latexExperience += `\\textit{${experience[i].position}}`
      if (experience[i].location) latexExperience += `\\hfill ${experience[i].location}`
      latexExperience += `\\\\ \n`
      latexExperience += `\\begin{itemize} \\itemsep 0pt \n`
      const descroptionLength = experience[i].description?.length;
      for (let j = 0; j < descroptionLength; j++) {
        latexExperience += `\\item{${experience[i].description[j]}} \n`
      }
      latexExperience += `\\end{itemize} \n`
    }
  return latexExperience;
}

export default useLatexExperience