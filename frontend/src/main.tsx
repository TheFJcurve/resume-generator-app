import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ResumeContextProvider } from "./context/ResumeContext.tsx";
import "./index.css";
import router from "./routes.tsx";
import theme from "./theme.ts";

const defaultResume = {
  name: "",
  heading: {
    fullName: "",
    email: "",
    phoneNumber: "",
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
  certifications: [],
  latexCode: "",
  order: [
    "name",
    "heading",
    "education",
    "experience",
    "projects",
    "skills",
    "certifications",
  ],
  font: "lmodern",
};

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ResumeContextProvider initialValue={defaultResume}>
          <RouterProvider router={router} />
        </ResumeContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
