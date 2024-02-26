import GenericPage from "../GenericPage";

const SkillsPage = () => {
  const title = "Resume Skills";
  const componentName = "skills";
  const components = ["skillHeading", "skill"];
  const displayName = ["Skill Heading", "Skill"];
  const placeHolderValues = ["Programming", "Python, C++, TypeScript"];
  const isRequired = [true, true];
  const isDescription = [false, false];
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

export default SkillsPage;
