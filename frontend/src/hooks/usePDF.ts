import resumeService from "../services/resumeService";

const usePDF = async (latexCode: string | undefined, name: string) => {
    if (latexCode) {
      const response = await resumeService
        .convert(latexCode, name)
        .catch((err) => {
          throw new Error(err);
        })
        .then(res => {
            return new Blob([res], { type: "application/pdf" });
        })
        .then(blob => {
            return URL.createObjectURL(blob);
        });
      return response;
    }
    return "";
  };

export default usePDF