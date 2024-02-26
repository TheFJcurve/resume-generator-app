import GenericPage from "../GenericPage";

const HeadingPage = () => {
  const title = "Resume Heading";
  const componentName = "heading";
  const components = [
    "fullName",
    "email",
    "phoneNumber",
    "personalWebsite",
    "linkedinUrl",
  ];
  const displayName = [
    "Full Name",
    "Email",
    "Phone Number",
    "Personal Website",
    "LinkedIn URL",
  ];
  const placeHolderValues = [
    "Sargun Singh Bhatti",
    "ss2bhatt@uwaterloo.ca",
    "4379849244",
    "www.google.com",
    "https://www.linkedin.com/in/sargun-singh-bhatti/",
  ];
  const mulitple = false;
  const isDescription = [false, false, false, false, false];
  const isRequired = [true, true, true, false, false];
  return (
    <GenericPage
      title={title}
      componentName={componentName}
      components={components}
      displayName={displayName}
      placeHolderValues={placeHolderValues}
      isRequired={isRequired}
      isDescription={isDescription}
      multiple={mulitple}
    />
  );
};

export default HeadingPage;
