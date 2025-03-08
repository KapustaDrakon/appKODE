import { useEffect, useState } from "react";

import GetRequest from "./services/users.service";

import { IUser } from "./components/interfaces/user.interfaces";

import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import List from "./components/List/List";
import SortPopup from "./components/SortPopup/SortPopup";

const App = () => {
  const getRequest = new GetRequest({});
  const [errorType, setErrorType] = useState<string>("null");
  const [download, setDownload] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all");
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchUsers, setSearchUsers] = useState<IUser[]>([]);
  const [sortType, setSortType] = useState<string>("none");

  const getUsers = async () => {
    setErrorType("null");
    setDownload(true);
    await getRequest
      .getUsersList()
      .then((res) => {
        // throw new Error(); // Тест ошибки
        setDownload(false);
        setUsers(res.data.items);
      })
      .catch((error) => {
        console.log(error);
        setDownload(false);
        return setErrorType("connection");
      });
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterChange = (users: IUser[], filter: string) => {
    switch (filter) {
      case "all":
        return users;
      case "design":
        return users.filter((user: IUser) => user.department === "design");
      case "analytics":
        return users.filter((user: IUser) => user.department === "analytics");
      case "management":
        return users.filter((user: IUser) => user.department === "management");
      case "ios":
        return users.filter((user: IUser) => user.department === "ios");
      case "android":
        return users.filter((user: IUser) => user.department === "android");
      default:
        return users;
    }
  };

  const onFilterChange = (name: string) => {
    return setFilter(name);
  };

  const sortUsers = (items: IUser[]) => {
    // setSortType(type);
    console.log(sortType);
    if (sortType === "alphabet") {
      // result = searchUsers.length !== 0 ? searchUsers : users;
      const result = items.sort((a: IUser, b: IUser) => {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
        return 0;
      });
      console.log("sort result = ", result);
      //setSearchUsers(result);
      return result;
    }

    if (sortType === "birthday") {
      const result = items.sort((a: IUser, b: IUser) => {
        if (
          getDaysBeforeBirthday(
            `${new Date().getFullYear()}${a.birthday.slice(4)}`
          ) <
          getDaysBeforeBirthday(
            `${new Date().getFullYear()}${b.birthday.slice(4)}`
          )
        )
          return -1;

        if (
          getDaysBeforeBirthday(
            `${new Date().getFullYear()}${a.birthday.slice(4)}`
          ) >
          getDaysBeforeBirthday(
            `${new Date().getFullYear()}${b.birthday.slice(4)}`
          )
        )
          return 1;
        return 0;
      });

      const birthdaysNextYear = result.filter(
        (el) =>
          getDaysBeforeBirthday(
            `${new Date().getFullYear()}${el.birthday.slice(4)}`
          ) < 0
      );

      const sortResult = result.slice(birthdaysNextYear.length);
      sortResult.push({
        id: "nextYear",
        avatarUrl: "",
        birthday: "",
        department: "",
        firstName: "",
        lastName: "",
        phone: "",
        position: "",
        userTag: "",
      });
      sortResult.push(...birthdaysNextYear);

      // const getUsersDaysBeforeBirthday = () =>
      //   result.map((user: IUser) => {
      //     console.log(`${new Date().getFullYear()}${user.birthday.slice(4)}`);
      //     return getDaysBeforeBirthday(
      //       `${new Date().getFullYear()}${user.birthday.slice(4)}`
      //     );
      //   });
      // console.log(getUsersDaysBeforeBirthday());

      console.log("sort result = ", sortResult);
      return sortResult;
    }

    return items;
  };

  const getDaysBeforeBirthday = (birthday: string) => {
    const result = Math.round(new Date(birthday).getTime() - Date.now());
    return convertMsToDays(result);
  };

  const convertMsToDays = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return days;
  };

  const visibleUsers = filterChange(
    searchUsers.length !== 0 ? sortUsers(searchUsers) : sortUsers(users),
    filter
  );

  const searchUser = (value: string = "") => {
    setErrorType("null");
    if (!value) {
      setFilter("all");
      setSearchUsers([]);
      setUsers(users);
    }

    const result = users.filter(
      (user: IUser) =>
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.userTag.toLowerCase().includes(value)
    );

    if (result.length === 0) {
      setErrorType("noresults");
      return;
    }
    return setSearchUsers(result);
  };

  console.log("users = ", users, "visibleUsers = ", visibleUsers, sortType);

  return (
    <>
      <Header
        errorType={errorType}
        download={download}
        filter={filter}
        onFilterChange={onFilterChange}
        searchUser={searchUser}
      />

      {errorType !== "null" ? (
        <Error
          errorType={errorType}
          setErrorType={setErrorType}
          getUsers={getUsers}
        />
      ) : null}

      <List users={visibleUsers} sortType={sortType} />
      <SortPopup setSortType={setSortType} />
    </>
  );
};

export default App;
