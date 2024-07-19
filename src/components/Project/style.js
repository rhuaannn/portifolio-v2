import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  > section {
    display: flex;
    max-width: 1216px;
    > h1 {
      margin-left: 112px;
      padding-top: 112px;
      display: flex;
      width: 100%;
      font-family: "Poppins";
      font-size: 32px;
      line-height: 38.4px;
      font-weight: 600;
    }
    > span {
      padding-top: 112px;
      height: 48px;
      justify-content: space-between;
      font-family: "Inter";
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  max-width: 1200px;
  height: 448px;

  > section {
    display: flex;
    width: 100%;
    height: 208px;
    margin-left: 112px;
    margin-top: 112px;
    padding: 32px;
    background: ${({ theme }) => theme.COLORS.GRAY_200};
    justify-content: space-between;

    > div {
      width: 100%;
      border-radius:10px;
      gap:10px;
      margin-left:10px;
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.COLORS.GRAY_300};

      > h2 {
        padding-top: 16px;
        margin-left: 32px;
        font-size: 24px;
      }
      > img {
        margin-left: 32px;
        width: 40px;
        height: 40px;
      }
    }
  }
`;
