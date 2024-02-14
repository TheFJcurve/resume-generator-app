import GenericPage from "./GenericPage";

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
  const multiple = true;
  const isRequired = [true, true, true, true, false];
  return (
    <GenericPage
      title={title}
      componentName={componentName}
      components={components}
      displayName={displayName}
      placeHolderValues={placeHolderValues}
      isRequired={isRequired}
      multiple={multiple}
    />
  );
};

export default EducationPage;
