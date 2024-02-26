import { Certification } from "../resumeService"

const useLatexCertifications = (certifications: Certification[]) => {
    let latexCertifications = `\\header{\\textbf{Certifications}} \n`;
    const len = certifications.length;
    for (let i = 0; i < len; i++) {
        latexCertifications += `\\textbf{${certifications[i].name}} \n`
        latexCertifications += `\\begin{itemize} \\itemsep 0pt \n` 
        const descriptionLength = certifications[i].description?.length;
        for (let j = 0; j < descriptionLength; j++) {
            latexCertifications += `\\item{${certifications[i].description[j]}} \n`
        }
        latexCertifications += `\n \\end{itemize} \n`
        }
    return latexCertifications;
}

export default useLatexCertifications