import React from "react";

import { IUser } from "../../interfaces/user.interfaces";
import styled from "styled-components";
import ListItemYear from "./ListItemYear";
import { Link } from "react-router";

interface IProps {
  user: IUser;
  sortType: string;
}

const ListItem: React.FC<IProps> = ({ user, sortType }) => {
  const dateFormat = (birthday: string) => {
    const month = new Date(birthday).getMonth() + 1;
    const day = new Date(birthday).getDate();

    switch (month) {
      case 1:
        return day + " янв";
      case 2:
        return day + " фер";
      case 3:
        return day + " мар";
      case 4:
        return day + " апр";
      case 5:
        return day + " мая";
      case 6:
        return day + " июн";
      case 7:
        return day + " июл";
      case 8:
        return day + " авг";
      case 9:
        return day + " сен";
      case 10:
        return day + " окт";
      case 11:
        return day + " ноя";
      case 12:
        return day + " дек";
      default:
        return "";
    }
  };

  if (user.id === "nextYear") return <ListItemYear />;
  return (
    <>
      <ListLi>
        <ListUser>
          <div>
            <Link to={`/appKODE/users/${user.id}`}>
              <ListUserAvatar alt="user-avatar" src={user.avatarUrl} />
            </Link>

            <div>
              <Link to={`/appKODE/users/${user.id}`}>
                <ListUserName>
                  {user.firstName} {user.lastName} <span>{user.userTag}</span>
                </ListUserName>
              </Link>

              <ListUserDepartment>{user.department}</ListUserDepartment>
            </div>
          </div>
          {sortType === "birthday" ? (
            <ListUserBirtday>{dateFormat(user.birthday)}</ListUserBirtday>
          ) : null}
        </ListUser>
      </ListLi>
    </>
  );
};

export default ListItem;

const ListLi = styled.li`
  height: 84px;
`;

const ListUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;

  & div {
    display: flex;

    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 84px;
    }
  }
`;

const ListUserBirtday = styled.div`
  font-family: "Inter";
  font-size: 15px;
  line-height: 20px;
  color: #55555c;
`;

const ListUserAvatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin: 6px 16px 6px 0;
  cursor: pointer;
  display: block;
`;

const ListUserName = styled.span`
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;

  & span {
    font-size: 14px;
    line-height: 18px;
    color: #97979b;
  }
`;

const ListUserDepartment = styled.span`
  font-family: "Inter";
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
`;
