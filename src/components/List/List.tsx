import React from "react";
import ListItem from "../ListItem/ListItem";
import { IUser } from "../interfaces/user.interfaces";
import styled from "styled-components";

interface IProps {
  users: IUser[];
  sortType: string;
}

const List: React.FC<IProps> = ({ users, sortType }) => {
  const elements = users.map((user: IUser) => {
    return <ListItem key={user.id} user={user} sortType={sortType} />;
  });

  return <ListUl>{elements}</ListUl>;
};

export default List;

const ListUl = styled.ul`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
