import { Certification } from "../services/resumeService"

const useLatexCertifications = (certifications: Certification[]) => {
    let latexCertifications = `\\textbf{Certifications} \\\\ \n \\par\\noindent\\rule{\\textwidth}{0.2pt} \\\ \n`;
    const len = certifications.length;
    for (let i = 0; i < len; i++) {
        latexCertifications += `\\textbf{${certifications[i].name}}`
        if (certifications[i].description) latexCertifications += `\\\\ \n \\begin{itemize} \\item {${certifications[i].description}} \\end{itemize} \\\\ \n`
    }
    return latexCertifications;
}

export default useLatexCertifications