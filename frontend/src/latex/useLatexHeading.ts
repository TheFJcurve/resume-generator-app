import { Heading } from "../services/resumeService"

const useLatexHeading = (heading: Heading) => {
    let latexHeading = `
        \\begin{center} \n
        \\textbf{\\Huge \\scshape ${heading.fullName}} \\\ \\vspace{3pt}  \n
            \\small \n
        \\faMobile \\hspace{.5pt} \\href{tel:${heading.phoneNumber}}{${heading.phoneNumber}} \n
            $|$ \n
        \\faAt \\hspace{.5pt} \\href{mailto:${heading.email}}{${heading.email}} \n
    `
    if (heading.linkedinUrl) {
        latexHeading += ` $|$ \n \\faLinkedin \\hspace{.5pt} \\href{${heading.linkedinUrl}}{${heading.linkedinUrl}} \n`
    }
    if (heading.personalWebsite) {
    latexHeading += ` $|$ \n \\faGlobe \\hspace{.5pt} \\href{${heading.personalWebsite}}{${heading.personalWebsite}} \n`
    }
    latexHeading += `\\end{center} \n`
    return latexHeading;
}

export default useLatexHeading