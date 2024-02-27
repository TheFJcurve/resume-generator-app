import { Education } from "../resumeService";
import processText from "./processText";

const useLatexEducation = (education: Education[]) => {
    let latexEducation = `\\header{\\textbf{Education}} \n`;
    const len = education.length;

    for (let i = 0; i < len; i++) {
      const educationInstitute = processText(education[i].institute)
      const educationDegree = processText(education[i].degree)

      latexEducation += `\\textbf{${educationInstitute}}`
      if (education[i].location) {
        const educationLocation = processText(education[i].location as string)
        latexEducation += `\\hfill ${educationLocation}`
      }
      latexEducation += `\\\\ \n`
      latexEducation += `${educationDegree}`
      if (education[i].graduationDate) {
        const educationGraduationDate = processText(education[i].graduationDate as string)
        latexEducation += `\\hfill ${educationGraduationDate}`
      }
      latexEducation += `\\\\ \n`
      if (education[i].relevantCourses) {
        const educationRelevantCourses = processText(education[i].relevantCourses as string)
        latexEducation += `\\begin{itemize} \\itemsep 0pt \n \\item{\\underline{Relevant Courses}: ${educationRelevantCourses}} \n \\end{itemize} \n`
      }
    }

    return latexEducation;
}

export default useLatexEducation