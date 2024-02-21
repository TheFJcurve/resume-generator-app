import { Box, Divider, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useResume from "../hooks/getResume";
import usePDF from "../hooks/usePDF";

const ResumeDetails = () => {
  const { id } = useParams();
  if (!id) throw new Error("id is required");

  const { data: resume, error } = useResume(id);
  const [pdfUrl, setPdfUrl] = useState<string>("");

  const loadOnlyOnce = () => {
    usePDF(resume?.latexCode, resume?.name || "").then((response) => {
      setPdfUrl(response);
    });
  };

  useEffect(() => {
    loadOnlyOnce();
  }, [resume]);

  if (error) throw error;

  if (resume === undefined) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} gap={10}>
      <GridItem width={"700px"} marginLeft={10}>
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

              <p>Phone Number: {resume.heading.phoneNumber}</p>

              {resume.heading.personalWebsite && (
                <p>Personal Website: {resume.heading.personalWebsite}</p>
              )}

              {resume.heading.linkedinUrl && (
                <p>LinkdIn Url: {resume.heading.linkedinUrl}</p>
              )}
            </SimpleGrid>
            <Divider />
          </Box>
        )}

        {resume.education?.length !== 0 ? (
          <>
            <Heading size={"md"}>Education</Heading>
            {resume.education?.map((e) => (
              <Box key={e.institute} padding={1}>
                <SimpleGrid columns={2} gap={3}>
                  <p>Institute: {e.institute}</p>

                  <p>Degree: {e.degree}</p>

                  {e.location && <p>Location: {e.location}</p>}

                  {e.graduationDate && (
                    <p>Graduation Date: {e.graduationDate}</p>
                  )}

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
              <Box key={e.company} padding={1}>
                <SimpleGrid columns={2} gap={3}>
                  <p>Company: {e.company}</p>

                  <p>Position: {e.position}</p>

                  {e.location && <p>Location: {e.location}</p>}

                  <p>Start Date: {e.startDate}</p>

                  {e.endDate && <p>End Date: {e.endDate}</p>}

                  {e.description && (
                    <>
                      Job Descrtiption:{" "}
                      {e.description.map((v, index) => (
                        <p key={index}>{v}</p>
                      ))}
                    </>
                  )}
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
              <Box key={e.projectName} padding={1}>
                <SimpleGrid columns={2} gap={3}>
                  <p>Project Name: {e.projectName}</p>

                  <p>Project Link: {e.projectLink}</p>

                  {e.additionalLink && (
                    <p>Additional Link: {e.additionalLink}</p>
                  )}

                  <>
                    Project Description:{" "}
                    {e.description.map((v, index) => (
                      <p key={index}>{v}</p>
                    ))}
                  </>
                </SimpleGrid>
                <Divider />
              </Box>
            ))}
          </>
        ) : null}

        {resume.skills?.length ? (
          <>
            <Heading size={"md"}>Skills</Heading>
            {resume.skills?.map((e) => (
              <Box key={e.skillHeading} padding={1}>
                <SimpleGrid columns={2} gap={3}>
                  <p>
                    {e.skillHeading}: {e.skill}
                  </p>
                </SimpleGrid>
                <Divider />
              </Box>
            ))}
          </>
        ) : null}

        {resume.certifications?.length ? (
          <>
            <Heading size={"md"}>Certifications</Heading>
            {resume.certifications?.map((e) => (
              <Box key={e.name} padding={1}>
                <SimpleGrid columns={2} gap={3}>
                  <p>Certificate Name: {e.name}</p>
                  <>
                    Certificate Description:{" "}
                    {e.description.map((v, index) => (
                      <p key={index}>{v}</p>
                    ))}
                  </>
                </SimpleGrid>
                <Divider />
              </Box>
            ))}
          </>
        ) : null}

        <Heading size={"md"}>
          Created :{" "}
          {formatDistanceToNow(
            new Date(resume.createdAt ? resume.createdAt : 0),
            { addSuffix: true }
          )}
        </Heading>
      </GridItem>
      <GridItem width={"710px"}>
        <iframe src={pdfUrl} width={"120%"} height={"900px"} />
      </GridItem>
    </SimpleGrid>
  );
};

export default ResumeDetails;
