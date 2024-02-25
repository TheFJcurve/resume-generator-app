import { createBrowserRouter } from "react-router-dom";
import CertificationsPage from "./components/CertificationsPage";
import EducationPage from "./components/EducationPage";
import ErrorPage from "./components/ErrorPage";
import ExperiencePage from "./components/ExperiencePage";
import HeadingPage from "./components/HeadingPage";
import ProjectPage from "./components/ProjectPage";
import ResumeDetails from "./components/ResumeDetails";
import ResumeList from "./components/ResumeList";
import ResumeName from "./components/ResumeName";
import SkillsPage from "./components/SkillsPage";
import Home from "./design/Home";
import LayoutCreate from "./design/LayoutCreate";
import LayoutEdit from "./design/LayoutEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume/create",
    element: <LayoutCreate />,
    errorElement: <ErrorPage />,
    children: [
      { path: "name", element: <ResumeName /> },
      { path: "heading", element: <HeadingPage /> },
      { path: "education", element: <EducationPage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "projects", element: <ProjectPage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "certifications", element: <CertificationsPage /> },
    ],
  },
  {
    path: "/resume/edit",
    element: <LayoutEdit />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <ResumeList /> },
      { path: ":id", element: <ResumeDetails /> },
    ],
  },
]);

export default router;
