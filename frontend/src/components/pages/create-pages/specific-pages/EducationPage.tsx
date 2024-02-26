import GenericPage from "../GenericPage";

const EducationPage = () => {
  const title = "Resume Education";
  const componentName = "education";
  const components = [
    "institute",
    "degree",
    "location",
    "graduationDate",
    "relevantCourses",
  ];
  const displayName = [
    "Institute",
    "Degree",
    "Location",
    "Graduation Date",
    "Relevant Courses",
  ];
  const placeHolderValues = [
    "The University of Waterloo",
    "Computer Science with Statistics Minor",
    "Waterloo, Ontario",
    "April 2027",
    "Object Oriented Programming, Algorithms",
  ];
  const isRequired = [true, true, true, true, false];
  const isDescription = [false, false, false, false, false];
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

export default EducationPage;
