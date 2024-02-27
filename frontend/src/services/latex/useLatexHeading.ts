import { Heading } from "../resumeService"
import processText from "./processText"

const useLatexHeading = (heading: Heading) => {
    const headingFullname = processText(heading.fullName)
    const headingEmail = processText(heading.email)
    
    let latexHeading = `\\vspace*{-10pt}
        \\begin{center}
        {\\Huge \\scshape ${headingFullname}} \\vspace{2pt} \\\\
        \\href{mailto:${headingEmail}}{${headingEmail}}
        \\vline \\hspace{.5pt} \\href{tel:${heading.phoneNumber}}{${heading.phoneNumber}} \n`
    if (heading.personalWebsite) {
        latexHeading += ` \\vline \\hspace{.5pt} \\href{${heading.personalWebsite}}{${heading.personalWebsite}} \n`
        }
    if (heading.linkedinUrl) {
        latexHeading += ` \\vline \\hspace{.5pt} \\href{${heading.linkedinUrl}}{${heading.linkedinUrl}} \n`
    }
    latexHeading += `\\end{center} \n`
    return latexHeading;
}

export default useLatexHeading