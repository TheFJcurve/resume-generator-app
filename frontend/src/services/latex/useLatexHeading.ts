import { Heading } from "../resumeService"

const useLatexHeading = (heading: Heading) => {
    let latexHeading = `\\vspace*{-10pt}
        \\begin{center}
        {\\Huge \\scshape ${heading.fullName}} \\vspace{2pt} \\\\
        \\href{mailto:${heading.email}}{${heading.email}}
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