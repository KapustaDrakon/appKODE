import { useEffect, useState } from "react";

import GetRequest from "./services/users.service";

import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import List from "./components/List/List";

const App = () => {
  const getRequest = new GetRequest({});
  const [errorType, setErrorType] = useState<string>("null");
  const [download, setDownload] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all");
  const [users, setUsers] = useState<[]>([]);

  const getUsers = async () => {
    setDownload(true);
    await getRequest
      .getUsersList()
      .then((res) => {
        // throw new Error();
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

  const onFilterChange = (name: string) => {
    return setFilter(name);
  };

  console.log(users);

  return (
    <>
      <Header
        errorType={errorType}
        download={download}
        filter={filter}
        onFilterChange={onFilterChange}
      />

      {errorType !== "null" ? (
        <Error
          errorType={errorType}
          setErrorType={setErrorType}
          getUsers={getUsers}
        />
      ) : null}

      <List />
    </>
  );
};

export default App;
