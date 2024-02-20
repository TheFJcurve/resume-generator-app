import { useEffect } from "react";
import Latex from "react-latex-next";
import useResume from "../hooks/useResume";
import useLatex from "../latex/useLatex";

const LatexPDF = () => {
  const { resume } = useResume();
  let latexCode = useLatex(resume);
  useEffect(() => {
    latexCode = useLatex(resume);
  }, [resume]);
  return <Latex>{latexCode}</Latex>;
};

export default LatexPDF;
