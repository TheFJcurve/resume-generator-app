import GenericPage from "./GenericPage";

const ExperiencePage = () => {
  const title = "Resume Experience";
  const componentName = "experience";
  const components = [
    "company",
    "position",
    "location",
    "startDate",
    "endDate",
    "description",
  ];
  const displayName = [
    "Company",
    "Position",
    "Location",
    "Start Date",
    "End Date",
    "Job Description",
  ];
  const placeHolderValues = [
    "Sweat Free Apparel",
    "Mobile Developer",
    "Waterloo, ON",
    "7th May 2023",
    "30th September 2023",
    [
      "Swift and Kotlin Development for iOS and Android platforms.",
      "Worked with the CEO",
      "How many more fields?",
    ],
  ];
  const isRequired = [true, true, false, true, false, true];
  const isDescription = [false, false, false, false, false, true];
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

export default ExperiencePage;
