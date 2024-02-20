import { useEffect, useState } from "react";
import useResume from "../hooks/useResume";
import useLatex from "../latex/useLatex";
import resumeService from "../services/resumeService";

const LatexPDF = () => {
  const { resume } = useResume();
  const [pdfUrl, setPdfUrl] = useState<string>("");
  let latexCode = useLatex(resume);

  useEffect(() => {
    const fetchPDF = async () => {
      if (resume) {
        latexCode = useLatex(resume);
        const response = await resumeService
          .convert(latexCode, resume.name)
          .catch((err) => {
            throw new Error(err);
          });
        const blob = new Blob([response], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      }
    };
    fetchPDF();
  }, [resume]);

  return <iframe src={pdfUrl} width={"140%"} height={"900px"} />;
};

export default LatexPDF;
