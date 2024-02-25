import GenericPage from "./GenericPage";

const ProjectPage = () => {
  const title = "Resume Projects";
  const componentName = "projects";
  const components = [
    "projectName",
    "projectLink",
    "additionalLink",
    "description",
  ];
  const displayName = [
    "Project Name",
    "Project Link",
    "Additional Link",
    "Description",
  ];
  const placeHolderValues = [
    "Resume Generator App",
    "www.google.com",
    "www.google.com",
    [
      "A web application that generates resumes.",
      "Built using React.",
      "You are using it right now!",
    ],
  ];
  const isRequired = [true, true, false, true];
  const isDescription = [false, false, false, true];
  const multiple = true;
  return (
    <GenericPage
      title={title}
      componentName={componentName}
      components={components}
      displayName={displayName}
      placeHolderValues={placeHolderValues}
      isRequired={isRequired}
      isDescription={isDescription}
      multiple={multiple}
    />
  );
};

export default ProjectPage;
