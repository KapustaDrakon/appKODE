import React from "react";
import styled from "styled-components";

interface IProps {
  filter: string;
  onFilterChange: (name: string) => void;
}

const Filter: React.FC<IProps> = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: "all", label: "Все" },
    { name: "design", label: "Designers" },
    { name: "analytics", label: "Analysts" },
    { name: "management", label: "Managers" },
    { name: "ios", label: "iOS" },
    { name: "android", label: "Android" },
  ];

  const filterButtons = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const buttonClass = isActive ? "active" : "";
    return (
      <li key={name} className={buttonClass}>
        <button type="button" onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return (
    <>
      <FilterNav>
        <ul>{filterButtons}</ul>
      </FilterNav>
    </>
  );
};

export default Filter;

const FilterNav = styled.nav`
  font-size: 15px;
  line-height: 20px;
  color: #97979b;
  padding: 8px 16px 0px;

  & ul {
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    margin: 0;
    min-width: 300px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    & li {
      /* padding: 8px 12px; */
      height: 36px;

      & button {
        padding: 8px 12px;
        border: none;
        background: inherit;
        color: inherit;
      }
    }

    & .active {
      color: #050510;
      border-bottom: 2px solid #6534ff;
    }
  }
`;
