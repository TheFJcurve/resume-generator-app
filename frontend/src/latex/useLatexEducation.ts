import { Education } from "../services/resumeService";

const useLatexEducation = (education: Education[]) => {
    let latexEducation = `\\header{\\textbf{Education}} \n`;
    const len = education.length;

    for (let i = 0; i < len; i++) {
      latexEducation += `\\textbf{${education[i].institute}}`
      if (education[i].location) latexEducation += `\\hfill ${education[i].location}`
      latexEducation += `\\\\ \n`
      latexEducation += `${education[i].degree}`
      if (education[i].graduationDate) latexEducation += `\\hfill ${education[i].graduationDate}`
      latexEducation += `\\\\ \n`
      if (education[i].relevantCourses) latexEducation += `\\begin{itemize} \\itemsep 0pt \n \\item{\\underline{Relevant Courses}: ${education[i].relevantCourses}} \n \\end{itemize} \n`
    }

    return latexEducation;
}

export default useLatexEducation