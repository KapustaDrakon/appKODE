import React from "react";
import styled from "styled-components";

import phone from "../../assets/images/phone.svg";
import { IUser } from "../../interfaces/user.interfaces";

interface IProps {
  user: IUser;
}

const UserDetailsPhone: React.FC<IProps> = ({ user }) => {
  const phoneFormat = (phone: string) =>
    phone.slice(0, 2) +
    " (" +
    phone.slice(2, 5) +
    ") " +
    phone.slice(5, 8) +
    " " +
    phone.slice(8, 10) +
    " " +
    phone.slice(10);

  return (
    <>
      <UserPhoneInf>
        <img src={phone} alt="phone" />
        <a href={`tel:${user.phone}`}>{phoneFormat(user.phone)}</a>
      </UserPhoneInf>
    </>
  );
};

export default UserDetailsPhone;

const UserPhoneInf = styled.div`
  display: flex;
  align-items: center;
  height: 60px;

  & img {
    margin-right: 12px;
  }
`;
