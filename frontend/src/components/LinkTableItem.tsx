import { Tbody, Td, Tr } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  children: ReactNode;
}

const LinkTableItem = ({ link, children }: Props) => {
  return (
    <Tbody>
      <Tr>
        <Td>
          <Link to={link}>{children}</Link>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default LinkTableItem;
