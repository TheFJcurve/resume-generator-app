
const errorTerms = ['\\', '%', '#', '$', '&', '_', '{','}',]

const processText = (latexInput: string) => {
    let processedText = latexInput
    errorTerms.forEach((term) => {
        processedText = processedText.replace(term, `\\${term}`)
    })
    return processedText
}

export default processText