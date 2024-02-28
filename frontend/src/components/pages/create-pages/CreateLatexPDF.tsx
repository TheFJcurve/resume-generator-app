import { useEffect, useState } from "react";
import blankPdf from "../../../assets/blank-pdf.pdf";
import useResume from "../../../context/useResume";
import usePDF from "../../../hooks/usePDF";
import { Button, HStack, SimpleGrid } from "@chakra-ui/react";

const CreateLatexPDF = () => {
  const { resume } = useResume();
  const [pdfUrl, setPdfUrl] = useState<string>(blankPdf);

  const onButtonClickPDF = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = resume?.name || "output.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onButtonClickLaTeX = () => {
    const link = document.createElement("a");
    const blob = new Blob([resume?.latexCode || ""], {
      type: "text/plain",
    });
    link.href = URL.createObjectURL(blob);
    link.download = resume?.name + ".tex" || "output.tex";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    usePDF(resume?.latexCode, resume?.name || "").then(
      (response) => response && setPdfUrl(response)
    );
  }, [resume?.latexCode]);

  return (
    <SimpleGrid justifyItems={"center"} gap={2} width={"100%"}>
      <HStack>
        <Button onClick={onButtonClickPDF} colorScheme="teal">
          Download PDF
        </Button>
        <Button onClick={onButtonClickLaTeX} colorScheme="teal">
          Download LaTeX Code
        </Button>
      </HStack>
      <iframe src={pdfUrl + "#toolbar=0"} width={"100%"} height={"850px"} />
    </SimpleGrid>
  );
};

export default CreateLatexPDF;
