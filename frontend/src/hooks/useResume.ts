import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

// Define a custom hook to access the context value
const useResume = () => {
    const context = useContext(ResumeContext);

    if (!context) {
        throw new Error("useResume must be used within a ResumeProvider");
    }

    return context;
};

export default useResume;