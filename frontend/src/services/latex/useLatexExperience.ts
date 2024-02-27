import { Experience } from "../resumeService"
import processText from "./processText";

const useLatexExperience = (experience: Experience[]) => {
    let latexExperience = `\\header{\\textbf{Experience}} \n`;
    const len = experience.length;
    for (let i = 0; i < len; i++) {
      const experienceCompany = processText(experience[i].company) 
      const experiencePosition = processText(experience[i].position)
      const experienceStartDate = processText(experience[i].startDate)
      
      latexExperience += `\\textbf{${experienceCompany}} \\hfill ${experienceStartDate}`
      if (experience[i].endDate) {
        const experienceEndDate = processText(experience[i].endDate as string)
        latexExperience += ` - ${experienceEndDate}`
      }
      latexExperience += `\\\\ \n`
      latexExperience += `\\textit{${experiencePosition}}`
      if (experience[i].location) {
        const experienceLocation = processText(experience[i].location as string)
        latexExperience += `\\hfill ${experienceLocation}`
      }
      latexExperience += `\\\\ \n`
      latexExperience += `\\begin{itemize} \\itemsep 0pt \n`
      const descriptionLength = experience[i].description?.length;
      for (let j = 0; j < descriptionLength; j++) {
        const description = processText(experience[i].description[j])
        latexExperience += `\\item{${description}} \n`
      }
      latexExperience += `\\end{itemize} \n`
    }
  return latexExperience;
}

export default useLatexExperience