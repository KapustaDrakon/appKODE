import React, { useEffect } from "react";
import styled from "styled-components";
import Filter from "../Filter/Filter";

import search from "../../assets/images/search.svg";
import sort from "../../assets/images/sort.svg";
import sortActive from "../../assets/images/sort-active.svg";

interface IProps {
  errorType: string;
  setErrorType: (type: string) => void;
  download: boolean;
  filter: string;
  setFilter: (name: string) => void;
  searchUser: (value: string) => void;
  sortType: string;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Header: React.FC<IProps> = ({
  errorType,
  setErrorType,
  download,
  filter,
  setFilter,
  searchUser,
  sortType,
  inputValue,
  setInputValue,
}) => {
  const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
    fn: F
  ) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<F>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, 500);
    };
  };

  useEffect(() => {
    searchUser(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const onChangeInputValue = (event: { target: { value: string } }) => {
    if (
      event.target.value !== "" &&
      event.target.value.split(" ").length - 1 === event.target.value.length
    )
      return;
    setErrorType("null");
    return setInputValue(event.target.value);
  };

  const showPopup = () => {
    const popup = document.getElementById("sort-popup")!;
    popup.style.display = "flex";
  };

  return (
    <>
      <HeaderStyled>
        <div className={`${errorType} ${download ? "download" : ""}`}>
          <div>
            <HeaderTitle
              className={`${errorType} ${download ? "download" : ""}`}
            >
              Поиск
            </HeaderTitle>
          </div>

          {download ? (
            <HeaderSearchDownload>Секундочку, гружусь...</HeaderSearchDownload>
          ) : errorType === "null" || errorType === "noresults" ? (
            <HeaderSearchContainer>
              <div>
                <img alt="search" id="search-image" src={search} />
                <HeaderSearch
                  type="text"
                  id="search"
                  title="search"
                  placeholder="Введи имя, тег, почту..."
                  autoFocus
                  onChange={debounce(onChangeInputValue.bind(this))}
                  defaultValue={inputValue}
                />
              </div>

              <button type="button" onClick={showPopup}>
                <img alt="sort" src={sortType === "none" ? sort : sortActive} />
              </button>
            </HeaderSearchContainer>
          ) : (
            <HeaderSearchError>
              Не могу обновить данные. Проверь соединение с интернетом.
            </HeaderSearchError>
          )}
        </div>

        <Filter filter={filter} setFilter={setFilter} />
      </HeaderStyled>
    </>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 0.3px solid #c3c3c6;

  & div div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .getResults {
    background: #f44336;
  }

  & .network {
    background: #f44336;
  }

  & .download {
    background: #6534ff;
  }

  & div .getResults {
    color: #ffffff;
  }

  & div .network {
    color: #ffffff;
  }

  & div .download {
    color: #ffffff;
  }
`;

const HeaderSearchError = styled.div`
  margin: 8px 24px 12px;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  height: 32px;
`;

const HeaderSearchDownload = styled.div`
  margin: 8px 24px 12px;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  height: 32px;
`;

const HeaderTitle = styled.h1`
  height: 48px;
  margin-top: 8px;
  padding: 8px 24px 12px;
  font-family: "Inter Bold";
  line-height: 28px;
  font-size: 24px;
`;

const HeaderSearchContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f8;
  border-radius: 16px;
  margin: 6px 16px;

  & div {
    display: flex;

    & img {
      opacity: 0.3;
    }
  }

  & button {
    border: none;
    width: 24px;
    height: 24px;
    background: inherit;
    padding: 0;
  }
`;

const HeaderSearch = styled.input`
  padding: 8px 12px;
  height: 40px;
  background: inherit;
  border: none;
  border-radius: 16px;
  outline: none;
  caret-color: #6534ff;
  font-family: "Inter";
  font-size: 15px;
  line-height: 20px;

  &::placeholder {
    color: #c3c3c6;
    font-family: "Inter";
    font-size: 15px;
    line-height: 20px;
  }
`;
