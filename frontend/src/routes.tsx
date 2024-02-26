import { createBrowserRouter } from "react-router-dom";
import CertificationsPage from "./components/pages/create-pages/specific-pages/CertificationsPage";
import EducationPage from "./components/pages/create-pages/specific-pages/EducationPage";
import ErrorPage from "./components/design/ErrorPage";
import ExperiencePage from "./components/pages/create-pages/specific-pages/ExperiencePage";
import HeadingPage from "./components/pages/create-pages/specific-pages/HeadingPage";
import ProjectPage from "./components/pages/create-pages/specific-pages/ProjectPage";
import ResumeDetails from "./components/pages/edit-pages/ResumeDetails";
import ResumeList from "./components/pages/edit-pages/ResumeList";
import ResumeName from "./components/pages/create-pages/specific-pages/ResumeName";
import SkillsPage from "./components/pages/create-pages/specific-pages/SkillsPage";
import Home from "./components/design/Home";
import LayoutCreate from "./components/design/LayoutCreate";
import LayoutEdit from "./components/design/LayoutEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
