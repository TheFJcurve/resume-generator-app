import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { Resume } from "./ResumeList";

interface Props {
  resume: Resume;
}
const ResumeCard = ({ resume }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{resume.heading}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Education
            </Heading>
            <Text pt="2" fontSize="sm">
              {resume.education}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Experience
            </Heading>
            <Text pt="2" fontSize="sm">
              {resume.experience}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Projects
            </Heading>
            <Text pt="2" fontSize="sm">
              {resume.projects}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Skills
            </Heading>
            <Text pt="2" fontSize="sm">
              {resume.skills}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Certifications
            </Heading>
            <Text pt="2" fontSize="sm">
              {resume.certifications}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Created At
            </Heading>
            <Text pt="2" fontSize="sm">
              {formatDistanceToNow(new Date(resume.createdAt), {
                addSuffix: true,
              })}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ResumeCard;
