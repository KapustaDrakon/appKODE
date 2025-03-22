import { IUser } from "./user.interfaces";

export interface IContext {
  frame: boolean;
  setFrame: React.Dispatch<React.SetStateAction<boolean>>;
  errorType: string;
  setErrorType: React.Dispatch<React.SetStateAction<string>>;
  download: boolean;
  setDownload: React.Dispatch<React.SetStateAction<boolean>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  searchUsers: IUser[];
  setSearchUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  sortType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
