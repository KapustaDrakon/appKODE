import styled from "styled-components";

const Frame = () => {
  return (
    <>
      <FrameUl>
        <FrameLi>
          <div>
            <FrameCircle />
            <div>
              <FrameTopLine />
              <FrameBottomLine />
            </div>
          </div>
        </FrameLi>
        <FrameLi>
          <div>
            <FrameCircle />
            <div>
              <FrameTopLine />
              <FrameBottomLine />
            </div>
          </div>
        </FrameLi>
        <FrameLi>
          <div>
            <FrameCircle />
            <div>
              <FrameTopLine />
              <FrameBottomLine />
            </div>
          </div>
        </FrameLi>
        <FrameLi>
          <div>
            <FrameCircle />
            <div>
              <FrameTopLine />
              <FrameBottomLine />
            </div>
          </div>
        </FrameLi>
        <FrameLi>
          <div>
            <FrameCircle />
            <div>
              <FrameTopLine />
              <FrameBottomLine />
            </div>
          </div>
        </FrameLi>
        <FrameLi>
          <div>
            <FrameCircle />
            <div>
              <FrameTopLine />
              <FrameBottomLine />
            </div>
          </div>
        </FrameLi>
        <FrameLi>
          <div>
            <FrameCircle />
            <div>
              <FrameTopLine />
              <FrameBottomLine />
            </div>
          </div>
        </FrameLi>
      </FrameUl>
    </>
  );
};

export default Frame;

const FrameUl = styled.ul`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FrameLi = styled.li`
  & div {
    display: flex;
    align-items: center;
    & div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
  }
`;
const FrameCircle = styled.div`
  width: 72px;
  height: 72px;
  margin: 6px 16px 6px 0;
  border-radius: 100%;
  background: linear-gradient(to right, #f3f3f6, #fafafa);
`;
const FrameTopLine = styled.div`
  width: 144px;
  height: 16px;
  border-radius: 50px;
  background: linear-gradient(to right, #f3f3f6, #fafafa);
`;
const FrameBottomLine = styled.div`
  width: 80px;
  height: 12px;
  border-radius: 50px;
  background: linear-gradient(to right, #f3f3f6, #fafafa);
`;
