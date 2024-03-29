import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import stockresume from "../../../assets/stock-resume.png";
import useResume from "../../../context/useResume";
import useResumeRemove from "../../../hooks/deleteResumes";
import { Resume } from "../../../services/resumeService";

interface Props {
  resume: Resume;
}
const ResumeCard = ({ resume }: Props) => {
  const { dispatch } = useResume();
  const onDelete = (id: string) => {
    useResumeRemove({ id });
  };
  const navigate = useNavigate();

  const fetchAndUse = (resume: Resume) => {
    console.log(resume);
    dispatch({
      type: "SET_RESUME",
      payload: {
        name: resume.name,
        heading: resume.heading
          ? resume.heading
          : { fullName: "", email: "", phoneNumber: "" },
        education: resume.education ? resume.education : [],
        experience: resume.experience ? resume.experience : [],
        projects: resume.projects ? resume.projects : [],
        skills: resume.skills ? resume.skills : [],
        certifications: resume.certifications ? resume.certifications : [],
        order: resume.order
          ? resume.order.length > 0
            ? resume.order
            : [
                "name",
                "heading",
                "education",
                "experience",
                "projects",
                "skills",
                "certifications",
              ]
          : [
              "name",
              "heading",
              "education",
              "experience",
              "projects",
              "skills",
              "certifications",
            ],
        font: resume.font ? resume.font : "lmodern",
      },
    });
    navigate("/resume/create/name");
  };

  return (
    <Card
      borderRadius={20}
      _hover={{ transform: "scale(1.02)" }}
      transition={"all 0.3s ease-in-out"}
    >
      <Image
        src={stockresume}
        alt="A Stock Resume"
        width="100%"
        borderRadius="lg"
      />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Link to={resume._id ? resume._id : "."}>
            <Heading size={"md"} _hover={{ color: "teal.300" }}>
              {resume.name}
            </Heading>
          </Link>
          <Box>
            <Button colorScheme="teal" onClick={() => fetchAndUse(resume)}>
              Use
            </Button>
            <IconButton
              onClick={() => onDelete(resume._id)}
              aria-label="delete"
              margin={3}
              icon={<DeleteIcon />}
              colorScheme="red"
            />
          </Box>
        </HStack>
      </CardBody>
      <Divider />
      <CardFooter>
        {resume.heading?.fullName} -{" "}
        {formatDistanceToNow(new Date(resume.createdAt), { addSuffix: true })}
      </CardFooter>
    </Card>
  );
};

export default ResumeCard;
