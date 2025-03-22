import React from "react";
import styled from "styled-components";

import ListItem from "../ListItem/ListItem";
import { IUser } from "../../interfaces/user.interfaces";

interface IProps {
  users: IUser[];
}

const List: React.FC<IProps> = ({ users }) => {
  const elements = users.map((user: IUser) => {
    return <ListItem key={user.id} user={user} />;
  });

  return <ListUl>{elements}</ListUl>;
};

export default List;

const ListUl = styled.ul`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 10;
`;
