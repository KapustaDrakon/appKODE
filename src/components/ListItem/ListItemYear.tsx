import styled from "styled-components";

const ListItemYear = () => {
  return (
    <>
      <YearContainer>
        <YearLine />
        <Year>{new Date().getFullYear() + 1}</Year>
        <YearLine />
      </YearContainer>
    </>
  );
};

export default ListItemYear;

const YearContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  color: #c3c3c6;
  padding: 24px;
`;

const YearLine = styled.div`
  width: 100%;
  height: 1px;
  background: #c3c3c6;
`;

const Year = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
`;
