import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes.tsx";
import theme from "./theme.ts";
import { ResumeProvider } from "./context/ResumeContext.tsx";

const defaultResume = {
  name: "",
  heading: {
    fullName: "",
    email: "",
    phone: "",
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
  certifications: [],
};

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ResumeProvider initialValue={defaultResume}>
          <RouterProvider router={router} />
        </ResumeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
