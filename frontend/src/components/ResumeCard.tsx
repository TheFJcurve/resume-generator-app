import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useResumeRemove from "../hooks/deleteResumes";
import { Resume } from "../services/resumeService";
import useResume from "../hooks/useResume";

interface Props {
  resume: Resume;
}
const ResumeCard = ({ resume }: Props) => {
  const { dispatch } = useResume();

  const onDelete = (id: string) => {
    useResumeRemove({ id: id });
    window.location.reload();
  };

  const fetchAndUse = () => {
    console.log(resume);
    dispatch({
      type: "SET_RESUME",
      payload: {
        name: resume.name,
        heading: resume.heading
          ? resume.heading
          : { fullName: "", email: "", phone: "" },
        education: resume.education ? resume.education : [],
        experience: resume.experience ? resume.experience : [],
        projects: resume.projects ? resume.projects : [],
        skills: resume.skills ? resume.skills : [],
        certifications: resume.certifications ? resume.certifications : [],
      },
    });
  };

  return (
    <Card>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Link to={resume._id ? resume._id : "."}>
            <Heading size={"md"}>{resume.name}</Heading>
          </Link>
          <Box>
            <Link to={"/resume/create"}>
              <Button colorScheme="teal" onClick={fetchAndUse}>
                Use
              </Button>
            </Link>
            <IconButton
              onClick={() => onDelete(resume._id)}
              aria-label="delete"
              marginLeft={3}
              icon={<DeleteIcon />}
              colorScheme="red"
            />
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ResumeCard;
