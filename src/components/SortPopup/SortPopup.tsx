import React from "react";
import styled from "styled-components";

import cancel from "../../assets/images/cancel.svg";

interface IProps {
  setSortType: (type: string) => void;
  sortType: string;
}

const SortPopup: React.FC<IProps> = ({ setSortType, sortType }) => {
  const closePopUp = () => {
    const popup = document.getElementById("sort-popup")!;
    popup.style.display = "none";
  };

  return (
    <>
      <SortContainer id="sort-popup">
        <SortBackground onClick={closePopUp} />
        <Popup>
          <h3>Сортировка</h3>
          <PopupButtonClose type="button" onClick={closePopUp}>
            <img alt="cancel" src={cancel} />
          </PopupButtonClose>
          <PopupForm>
            <div>
              <PopupRadio
                type="radio"
                id="sort-alphabet"
                name="sort"
                defaultChecked={sortType === "alphabet" ? true : false}
                onClick={() => setSortType("alphabet")}
              />
              <label htmlFor="sort-alphabet">По алфавиту</label>
            </div>
            <div>
              <PopupRadio
                type="radio"
                id="sort-birthday"
                name="sort"
                defaultChecked={sortType === "birthday" ? true : false}
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
  z-index: 20;

  padding: 24px 16px 8px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  & h3 {
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

const PopupRadio = styled.input`
  width: 24px;
  height: 24px;
  margin: 0;
  margin-right: 12px;

  &:checked,
  &:not(:checked) {
    visibility: hidden;
  }

  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    cursor: pointer;
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: -36px;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #6534ff;
    border-radius: 100%;
    background: #ffffff;
    box-sizing: border-box;
    margin-left: 2px;
  }

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: "";
    position: absolute;
    left: -36px;
    top: 0;
    width: 20px;
    height: 20px;
    border: 6px solid #6534ff;
    border-radius: 100%;
    background: #ffffff;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    box-sizing: border-box;
    margin-left: 2px;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
