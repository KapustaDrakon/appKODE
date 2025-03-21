import React from "react";
import styled from "styled-components";

import { useData } from "../../providers/DataProviders";

import flying_saucer from "../../assets/images/flying-saucer.svg";
import magnifying_glass from "../../assets/images/magnifying-glass.svg";

interface IProps {
  getUsers: () => void;
}

const ErrorComponent: React.FC<IProps> = ({ getUsers }) => {
  const { errorType, setErrorType } = useData();

  return (
    <>
      {errorType === "getResults" ? (
        <ErrorContent>
          <img alt="flying saucer" src={flying_saucer} />
          <div>
            <ErrorTitle>Какой-то сверхразум все сломал</ErrorTitle>
            <ErrorText>Постараемся быстро починить</ErrorText>
            <ErrorButton
              onClick={() => {
                getUsers();
                setErrorType("null");
              }}
            >
              Попробовать снова
            </ErrorButton>
          </div>
        </ErrorContent>
      ) : null}

      {errorType === "noresults" ? (
        <ErrorContent>
          <img alt="magnifying glass" src={magnifying_glass} />
          <div>
            <ErrorTitle>Мы никого не нашли</ErrorTitle>
            <ErrorText>Попробуй скорректировать запрос</ErrorText>
          </div>
        </ErrorContent>
      ) : null}
    </>
  );
};

export default ErrorComponent;

const ErrorContent = styled.div`
  min-height: calc(100vh - 154px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const ErrorTitle = styled.h3`
  font-family: "Inter SemiBold";
  font-size: 17px;
  line-height: 22px;
`;

const ErrorText = styled.span`
  font-family: "Inter";
  font-size: 16px;
  line-height: 20px;
  color: #97979b;
`;

const ErrorButton = styled.button`
  border: none;
  background: inherit;
  font-family: "Inter SemiBold";
  font-size: 16px;
  line-height: 20px;
  color: #6534ff;
`;
