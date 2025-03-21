import React from "react";
import styled from "styled-components";

import { IUser } from "../../interfaces/user.interfaces";

import star from "../../assets/images/star.svg";
import starWhite from "../../assets/images/star-white.svg";

interface IProps {
  user: IUser;
  darkMode: boolean;
}

const UserDetailsAge: React.FC<IProps> = ({ user, darkMode }) => {
  const dateFormat = (birthday: string) => {
    const month = new Date(birthday).getMonth() + 1;
    const day = new Date(birthday).getDate();
    const year = new Date(birthday).getFullYear();

    switch (month) {
      case 1:
        return day + " января " + year;
      case 2:
        return day + " февраля " + year;
      case 3:
        return day + " марта " + year;
      case 4:
        return day + " апреля " + year;
      case 5:
        return day + " мая " + year;
      case 6:
        return day + " июня " + year;
      case 7:
        return day + " июля " + year;
      case 8:
        return day + " августа " + year;
      case 9:
        return day + " сентября " + year;
      case 10:
        return day + " октября " + year;
      case 11:
        return day + " ноября " + year;
      case 12:
        return day + " декабря " + year;
      default:
        return "";
    }
  };

  const ageFormat = (birthday: string) => {
    const age = new Date().getFullYear() - new Date(birthday).getFullYear();
    let text;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      text = " лет";
    } else {
      count = count % 10;
      if (count === 1) {
        text = " год";
      } else if (count >= 2 && count <= 4) {
        text = " года";
      } else {
        text = " лет";
      }
    }
    return age + text;
  };

  return (
    <>
      <UserBirthdayInf>
        <div>
          <img src={darkMode ? starWhite : star} alt="star" />
          <span>{dateFormat(user.birthday)}</span>
        </div>

        <span>{ageFormat(user.birthday)}</span>
      </UserBirthdayInf>
    </>
  );
};

export default UserDetailsAge;

const UserBirthdayInf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  & div {
    display: flex;
    align-items: center;
  }

  & img {
    margin-right: 12px;
    width: 24px;
    height: 24px;
  }

  & div span {
    font-size: 16px;
    line-height: 20px;
    color: inherit;
  }
  & span {
    font-size: 16px;
    line-height: 20px;
    color: #97979b;
  }
`;
