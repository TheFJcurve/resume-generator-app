import { Project } from "../services/resumeService"

const useLatexProjects = (projects: Project[]) => {
  let latexProjects = `\\textbf{Projects} \\\ \n \\par\\noindent\\rule{\\textwidth}{0.2pt} \\\ \n`;
  const len = projects.length;
  for (let i = 0; i < len; i++) {
    latexProjects += `\\textbf{${projects[i].projectName}}`
    latexProjects += `\\hfill \\faGithub \\hspace{.5pt} \\href{${projects[i].projectLink}}{${projects[i].projectLink}}`
    if (projects[i].additionalLink) latexProjects += ` | \\hfill \\href{${projects[i].additionalLink}}{${projects[i].additionalLink}}`
    latexProjects += `\\\ \n \\begin{itemize} \n \\item{${projects[i].description}} \n \\end{itemize} \\\ \n`
  }
  return latexProjects;
}

export default useLatexProjects