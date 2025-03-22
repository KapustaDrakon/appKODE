import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { IUser } from "../interfaces/user.interfaces";
import { IContext } from "../interfaces/context.interfaces";

type Props = {
  children: ReactNode;
};

export const DataPovider: React.FC<Props> = ({ children }) => {
  const [errorType, setErrorType] = useState<string>("null"); // null network getResults noresults
  const [frame, setFrame] = useState<boolean>(false);
  const [download, setDownload] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all");
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchUsers, setSearchUsers] = useState<IUser[]>([]);
  const [sortType, setSortType] = useState<string>("none"); // none birthday alphabet
  const [inputValue, setInputValue] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(
    JSON.parse(JSON.stringify(localStorage.getItem("darkMode"))) ? true : false
  );

  const dataValue = useMemo(
    () => ({
      frame,
      setFrame,
      errorType,
      setErrorType,
      download,
      setDownload,
      filter,
      setFilter,
      users,
      setUsers,
      searchUsers,
      setSearchUsers,
      sortType,
      setSortType,
      inputValue,
      setInputValue,
      darkMode,
      setDarkMode,
    }),
    [
      frame,
      errorType,
      download,
      filter,
      users,
      searchUsers,
      sortType,
      inputValue,
      darkMode,
    ]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
};

const DataContext = createContext<IContext>(null!);

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
