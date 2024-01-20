import { DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useResumeRemove from "../hooks/deleteResumes";
import { Resume } from "../services/resumeService";

interface Props {
  resume: Resume;
}
const ResumeCard = ({ resume }: Props) => {
  const onDelete = (id: string) => {
    useResumeRemove({ id: id });
    window.location.reload();
  };

  return (
    <Card>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack>
          <Link to={resume._id ? resume._id : "."}>{resume.name}</Link>
          <IconButton
            onClick={() => onDelete(resume._id ? resume._id : ".")}
            alignContent={"end"}
            aria-label="delete"
            icon={<DeleteIcon />}
            colorScheme="red"
          />
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ResumeCard;
