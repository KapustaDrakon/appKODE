import React from "react";
import styled from "styled-components";

import cancel from "../../assets/images/cancel.svg";

interface IProps {
  setSortType: (type: string) => void;
}

const SortPopup: React.FC<IProps> = ({ setSortType }) => {
  const closePopUp = () => {
    const popup = document.getElementById("sort-popup")!;
    popup.style.display = "none";
  };

  return (
    <>
      <SortContainer id="sort-popup">
        <SortBackground onClick={closePopUp} />
        <Popup>
          <span>Сортировка</span>
          <PopupButtonClose type="button" onClick={closePopUp}>
            <img alt="cancel" src={cancel} />
          </PopupButtonClose>
          <PopupForm>
            <div>
              <input
                type="radio"
                id="sort-alphabet"
                name="sort"
                onClick={() => setSortType("alphabet")}
              />
              <label htmlFor="sort-alphabet">По алфавиту</label>
            </div>
            <div>
              <input
                type="radio"
                id="sort-birthday"
                name="sort"
                onClick={() => setSortType("birthday")}
              />
              <label htmlFor="sort-birthday">По дню рождения</label>
            </div>
          </PopupForm>
        </Popup>
      </SortContainer>
    </>
  );
};

export default SortPopup;

const SortContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
`;

const SortBackground = styled.div`
  position: inherit;
  width: 100%;
  height: 100%;
  background: #050510;
  opacity: 16%;
`;

const Popup = styled.div`
  width: 373px;
  background: #ffffff;
  border-radius: 20px;
  z-index: 10;

  padding: 24px 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  & span {
    margin-bottom: 16px;
    font-family: "Inter SemiBold";
    font-size: 20px;
    line-height: 24px;
  }
`;

const PopupButtonClose = styled.button`
  position: absolute;
  right: 23px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: #f7f7f8;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    width: 16px;
    height: 16px;
  }
`;

const PopupForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & div {
    height: 60px;
    display: flex;
    align-items: center;

    & label {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
