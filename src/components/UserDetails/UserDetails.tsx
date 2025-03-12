import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

import UserDetailsAge from "./UserDetailAge";
import UserDetailsPhone from "./UserDetailsPhone";
import { IUser } from "../../interfaces/user.interfaces";

import back from "../../assets/images/back.svg";

interface IProps {
  user: IUser;
}

const UserDetails: React.FC<IProps> = ({ user }) => {
  return (
    <>
      <UserDetailsContainer>
        <UserDetailsMain>
          <ButtonBackContainer>
            <Link to="/appKODE/users">
              <img src={back} alt="back" />
            </Link>
          </ButtonBackContainer>
          <UserDetailsWrap>
            <img src={user.avatarUrl} alt="user-avatar" />

            <div>
              <UserName>
                {user.firstName} {user.lastName} <span>{user.userTag}</span>
              </UserName>

              <UserPosition>
                {user.position[0].toUpperCase() + user.position.slice(1)}
              </UserPosition>
            </div>
          </UserDetailsWrap>
        </UserDetailsMain>

        <UserAdditionalInf>
          <UserDetailsAge user={user} />
          <UserDetailsPhone user={user} />
        </UserAdditionalInf>
      </UserDetailsContainer>
    </>
  );
};

export default UserDetails;

const UserDetailsContainer = styled.div`
  background: #ffffff;
  min-height: inherit;
`;

const UserDetailsMain = styled.div`
  background: #f7f7f8;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
`;

const UserDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & img {
    width: 104px;
    height: 104px;
    border-radius: 100%;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const ButtonBackContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 24px 0;

  & a {
    height: 24px;
  }

  & img {
    width: 24px;
    height: 24px;
  }
`;

const UserName = styled.h1`
  font-family: "Inter Bold";
  font-size: 24px;
  line-height: 28px;

  display: flex;
  align-items: center;
  gap: 4px;

  & span {
    font-family: "Inter";
    font-size: 17px;
    line-height: 22px;
    color: #97979b;
  }
`;

const UserPosition = styled.span`
  font-family: "Inter";
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
`;

const UserAdditionalInf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
`;
