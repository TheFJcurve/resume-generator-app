import GenericPage from "../GenericPage";

const CertificationsPage = () => {
  const title = "Resume Certifications";
  const componentName = "certifications";
  const components = ["name", "description"];
  const displayName = ["Certification Name", "Certification Description"];
  const placeHolderValues = [
    "Cognizant Virtual Experience Program",
    [
      "Details about the Course or Certification",
      "Blah",
      "Blah Blah",
      "Blah Blah Blah",
    ],
  ];
  const isRequired = [true, true];
  const isDescription = [false, true];
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

export default CertificationsPage;
