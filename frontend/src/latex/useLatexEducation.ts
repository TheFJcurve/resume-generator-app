import { Education } from "../services/resumeService";

const useLatexEducation = (education: Education[]) => {
    let latexEducation = `\\textbf{Education} \n \\par\\noindent\\rule{\\textwidth}{0.2pt} \n`;
    const len = education.length;

    for (let i = 0; i < len; i++) {
      latexEducation += `\\textbf{${education[i].institute}}`
      if (education[i].graduationDate) latexEducation += `\\hfill ${education[i].graduationDate} \\\\ \n`
      latexEducation += `${education[i].degree} \\\\ \n`
      if (education[i].relevantCourses) latexEducation += `Relevant Courses: ${education[i].relevantCourses} \\\\ \n`
    }

    return latexEducation;
}

export default useLatexEducation