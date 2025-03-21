import { useEffect, useLayoutEffect } from "react";
import { Navigate, Route, HashRouter as Router, Routes } from "react-router";

import GetRequest from "./services/users.service";
import { useData } from "./providers/DataProviders";

import { IUser } from "./interfaces/user.interfaces";

import Header from "./components/Header/Header";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import List from "./components/List/List";
import SortPopup from "./components/SortPopup/SortPopup";
import UserDetails from "./components/UserDetails/UserDetails";
import Network from "./components/Network/Network";
import Frame from "./components/Frame/Frame";

const App = () => {
  const getRequest = new GetRequest({});

  const {
    frame,
    setFrame,
    errorType,
    setErrorType,
    setDownload,
    filter,
    users,
    setUsers,
    searchUsers,
    setSearchUsers,
    sortType,
    darkMode,
  } = useData();

  const getUsers = async () => {
    setErrorType("null");
    setDownload(true);
    setFrame(true);
    await getRequest
      .getUsersList()
      .then((res) => {
        // throw new Error(); // Тест ошибки
        setDownload(false);
        setFrame(false);
        setUsers(res.data.items);
      })
      .catch((error) => {
        console.log(error);
        setDownload(false);
        setFrame(false);
        setErrorType("getResults");
      });
  };

  useLayoutEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = "#1f1f1f";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.background = "#ffffff";
      document.body.style.color = "#050510";
    }
  }, [darkMode]);

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

  const sortUsers = (items: IUser[]) => {
    if (sortType === "alphabet") {
      const result = items.sort((a: IUser, b: IUser) => {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
        return 0;
      });
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
      if (birthdaysNextYear.length !== 0)
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

  const searchUser = (value: string) => {
    if (!value) {
      setSearchUsers([]);
      setUsers(users);
      return;
    }

    const result = users.filter(
      (user: IUser) =>
        user.firstName.toLowerCase().includes(value.toLowerCase()) ||
        user.lastName.toLowerCase().includes(value.toLowerCase()) ||
        user.userTag.toLowerCase().includes(value.toLowerCase())
    );

    if (result.length === 0) {
      setErrorType("noresults");
      return;
    }
    return setSearchUsers(result);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/appKODE/users" replace />} />
        <Route
          path="/appKODE/"
          element={<Navigate to="/appKODE/users" replace />}
        />
        <Route
          path="/appKODE/users"
          element={
            <>
              <Header searchUser={searchUser} />

              <Network />

              {errorType !== "null" && errorType !== "network" ? (
                <ErrorComponent getUsers={getUsers} />
              ) : frame ? (
                <Frame />
              ) : (
                <List users={visibleUsers} />
              )}

              <SortPopup />
            </>
          }
        ></Route>
        {users.map((user) => (
          <Route
            path={`/appKODE/users/${user.id}`}
            key={user.id}
            element={<UserDetails user={user} />}
          />
        ))}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
