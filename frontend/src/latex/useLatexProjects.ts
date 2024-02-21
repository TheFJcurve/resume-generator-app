import { Project } from "../services/resumeService"

const useLatexProjects = (projects: Project[]) => {
  let latexProjects = `\\header{\\textbf{Projects}} \n`;
  const len = projects.length;
  for (let i = 0; i < len; i++) {
    latexProjects += `\\textbf{${projects[i].projectName}} \\vline \\; \\url{${projects[i].projectLink}}`
    if (projects[i].additionalLink) latexProjects += `\\; \\vline \\; \\url{${projects[i].additionalLink}}`
    latexProjects += `\\\\ \n`
    latexProjects += `\\begin{itemize} \\itemsep 0pt \n`
    const descriptionLength = projects[i].description?.length;
    for (let j = 0; j < descriptionLength; j++) {
      latexProjects += `\\textbullet ${projects[i].description[j]} \n`
    }
    latexProjects += `\\end{itemize} \n`
  }
  return latexProjects;
}

export default useLatexProjects