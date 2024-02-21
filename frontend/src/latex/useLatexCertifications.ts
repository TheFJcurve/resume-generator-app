import { Certification } from "../services/resumeService"

const useLatexCertifications = (certifications: Certification[]) => {
    let latexCertifications = `\\header{\\textbf{Certifications}} \n`;
    const len = certifications.length;
    for (let i = 0; i < len; i++) {
        latexCertifications += `\\textbf{${certifications[i].name}} \n`
        if (certifications[i].description) latexCertifications += `\\begin{itemize} \\itemsep 0pt \n \\item{${certifications[i].description}} \n \\end{itemize} \n`
    }
    return latexCertifications;
}

export default useLatexCertifications