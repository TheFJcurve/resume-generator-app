import { Certification } from "../resumeService";
import processText from "./processText";

const useLatexCertifications = (certifications: Certification[]) => {
    let latexCertifications = `\\header{\\textbf{Certifications}} \n`;
    const len = certifications.length;
    for (let i = 0; i < len; i++) {
        const certificationName = processText(certifications[i].name) 

        latexCertifications += `\\textbf{${certificationName}} \n`
        latexCertifications += `\\begin{itemize} \\itemsep 0pt \n` 
        const descriptionLength = certifications[i].description?.length;
        for (let j = 0; j < descriptionLength; j++) {
            const description = processText(certifications[i].description[j])
            latexCertifications += `\\item{${description}} \n`
        }
        latexCertifications += `\n \\end{itemize} \n`
        }
    return latexCertifications;
}

export default useLatexCertifications