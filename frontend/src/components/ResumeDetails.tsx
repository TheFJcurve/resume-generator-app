import { Box, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useResume from "../hooks/useResume";
import { formatDistanceToNow } from "date-fns";

const ResumeDetails = () => {
  const { id } = useParams();
  if (!id) throw new Error("id is required");

  const { data: resume, error } = useResume(id);

  if (error) throw error;

  if (resume === undefined) return null;

  return (
    <SimpleGrid padding={5} gap={2}>
      <Box padding={1}>
        <Heading>Resume Details</Heading>
        <p>Resume ID: {resume._id}</p>
        <p>Name: {resume.name}</p>
        <Divider />
      </Box>

      {resume.heading && (
        <Box padding={1}>
          <Heading size={"md"}>Heading</Heading>
          <SimpleGrid columns={2} gap={3}>
            <p>Full Name: {resume.heading.fullName}</p>

            <p>Email: {resume.heading.email}</p>

            <p>Phone Number: {resume.heading.phone}</p>

            {resume.heading.website && (
              <p>Personal Website: {resume.heading.website}</p>
            )}

            {resume.heading.linkedin && (
              <p>LinkdIn Url: {resume.heading.linkedin}</p>
            )}
          </SimpleGrid>
          <Divider />
        </Box>
      )}

      {resume.education?.length !== 0 ? (
        <>
          <Heading size={"md"}>Education</Heading>
          {resume.education?.map((e) => (
            <Box padding={1}>
              <SimpleGrid columns={2} gap={3}>
                <p>Institute: {e.institute}</p>

                <p>Degree: {e.degree}</p>

                {e.location && <p>Location: {e.location}</p>}

                {e.graduationDate && <p>Graduation Date: {e.graduationDate}</p>}

                {e.relevantCourses && (
                  <p>Relevant Courses: {e.relevantCourses}</p>
                )}
              </SimpleGrid>
              <Divider />
            </Box>
          ))}
        </>
      ) : null}

      {resume.experience?.length !== 0 ? (
        <>
          <Heading size={"md"}>Experience</Heading>

          {resume.experience?.map((e) => (
            <Box padding={1}>
              <SimpleGrid columns={2} gap={3}>
                <p>Company: {e.company}</p>

                <p>Position: {e.position}</p>

                {e.location && <p>Location: {e.location}</p>}

                <p>Start Date: {e.startDate}</p>

                {e.endDate && <p>End Date: {e.endDate}</p>}

                {e.description && <p>Job Descrtiption: {e.description}</p>}
              </SimpleGrid>
              <Divider />
            </Box>
          ))}
        </>
      ) : null}

      {resume.projects?.length !== 0 ? (
        <>
          <Heading size={"md"}>Projects</Heading>
          {resume.projects?.map((e) => (
            <Box padding={1}>
              <SimpleGrid columns={2} gap={3}>
                <p>Project Name: {e.projectName}</p>

                <p>Project Link: {e.projectLink}</p>

                {e.additionalLink && <p>Additional Link: {e.additionalLink}</p>}

                <p>Project Description: {e.projectDescription}</p>
              </SimpleGrid>
              <Divider />
            </Box>
          ))}
        </>
      ) : null}

      {resume.skills?.length ? (
        <>
          <Heading size={"md"}>Heading</Heading>
          {resume.skills?.map((e) => (
            <Box padding={1}>
              <SimpleGrid columns={2} gap={3}>
                <p>
                  {e.skillHeading}: {e.skills}
                </p>
              </SimpleGrid>
              <Divider />
            </Box>
          ))}
        </>
      ) : null}

      {resume.certifications?.length ? (
        <>
          <Heading size={"md"}>Heading</Heading>
          {resume.certifications?.map((e) => (
            <Box padding={1}>
              <SimpleGrid columns={2} gap={3}>
                <p>Certificate Name: {e.certificate}</p>
                <p>Certificate Description: {e.description}</p>
              </SimpleGrid>
              <Divider />
            </Box>
          ))}
        </>
      ) : null}

      <Heading size={"md"}>
        Created :{" "}
        {formatDistanceToNow(new Date(resume.createdAt ? resume.createdAt : 0))}
      </Heading>
    </SimpleGrid>
  );
};

export default ResumeDetails;
