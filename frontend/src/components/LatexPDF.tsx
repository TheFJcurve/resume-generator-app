import { useEffect, useState } from "react";
import usePDF from "../hooks/usePDF";
import useResume from "../hooks/useResume";

const LatexPDF = () => {
  const { resume } = useResume();
  const [pdfUrl, setPdfUrl] = useState<string>("");

  useEffect(() => {
    usePDF(resume?.latexCode, resume?.name || "").then((response) =>
      setPdfUrl(response)
    );
  }, [resume?.latexCode]);

  return <iframe src={pdfUrl} width={"120%"} height={"850px"} />;
};

export default LatexPDF;
