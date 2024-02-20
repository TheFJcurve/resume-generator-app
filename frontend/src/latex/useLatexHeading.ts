import { Heading } from "../services/resumeService"

const useLatexHeading = (heading: Heading) => {
    let latexHeading = `
        \\begin{center} {\\Huge \\scshape ${heading.fullName}} \\vspace{2pt} \\\\
        \\href{tel:${heading.phoneNumber}}{${heading.phoneNumber}}
        \\vline \\hspace{.5pt} \\href{mailto:${heading.email}}{${heading.email}} \n`
    if (heading.linkedinUrl) {
        latexHeading += ` \\vline \\hspace{.5pt} \\href{${heading.linkedinUrl}}{${heading.linkedinUrl}} \n`
    }
    if (heading.personalWebsite) {
    latexHeading += ` \\vline \\hspace{.5pt} \\href{${heading.personalWebsite}}{${heading.personalWebsite}} \n`
    }
    latexHeading += `\\end{center} \n`
    return latexHeading;
}

export default useLatexHeading