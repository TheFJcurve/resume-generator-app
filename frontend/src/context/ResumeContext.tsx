// ResumeContext.tsx
import React, { ReactNode, createContext, useReducer } from "react";
import {
  CertificationsPage,
  EducationPage,
  ExperiencePage,
  HeadingPage,
  ProjectPage,
  SkillsPage,
} from "../services/resumeService";

type ResumeType = {
  name: string;
  heading: HeadingPage;
  education: EducationPage[];
  experience: ExperiencePage[];
  projects: ProjectPage[];
  skills: SkillsPage[];
  certifications: CertificationsPage[];
};

type UpdateFieldAction = {
  type: "UPDATE_RESUME";
  field: string;
  value: any; // you can adjust this to be more specific based on your fields
};

type DeleteFieldAction = {
  type: "DELETE_RESUME";
  index: string;
};

type ResumeAction =
  | { type: "SET_RESUME"; payload: ResumeType }
  | UpdateFieldAction
  | DeleteFieldAction;

const resumeReducer = (
  state: ResumeType | undefined,
  action: ResumeAction
): ResumeType | undefined => {
  switch (action.type) {
    case "SET_RESUME":
      return action.payload;
    case "UPDATE_RESUME":
      if (state) {
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      return state;
    default:
      return state;
  }
};

type ResumeContextType = {
  resume: ResumeType | undefined;
  dispatch: React.Dispatch<ResumeAction>;
};

export const ResumeContext = createContext<ResumeContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
  initialValue?: ResumeType;
}

export const ResumeContextProvider = ({ children, initialValue }: Props) => {
  const [resume, dispatch] = useReducer(resumeReducer, initialValue);

  const contextValue = {
    resume,
    dispatch,
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};
