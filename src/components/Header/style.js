import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  justify-content: space-between;
`;

export const HeaderContainer = styled.header`
  display: flex;
  margin-left: 112px;
  width: 100%;
  align-items: center;
  font-family: "Poppins";
  font-weight: 200;
  line-height: 76px;
  font-size: 28px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  > div {
    width: 380px;
    justify-content: space-between;
  }
`;

export const LinksHeader = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  > ul {
    display: flex;
    font-size: 12px;
    cursor: pointer;
    list-style: none;
    justify-content: space-between;
    padding-left: 350px;

    > li {
      flex-direction: column;
      margin-left: 48px;
    }
  }
`;
