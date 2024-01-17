import {
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Tr,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const ResumeComponentList = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={3} gap={10}>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>
                <Link to="./name">Resume Name</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="./heading">Heading</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="./education">Education</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="./experience">Experience</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="./project">Projects</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="./skills">Skills</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="./certifications">Certifications</Link>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Resume Components</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Outlet />
    </SimpleGrid>
  );
};

export default ResumeComponentList;
