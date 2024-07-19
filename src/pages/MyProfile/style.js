import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.GRAY_900};
  overflow: hidden;
  > h3 {
    display: flex;
    margin: 0 auto;
    padding-top: 120px;
    text-align: justify;
    color: white;
    font-family: "inter";
    max-width: 450px;
  }
`;

export const Image = styled.div`
  display: flex;

  > img {
      border-radius: 18px;
      margin-right:199px;
      width: 400px;
      height: 400px;
      padding-top:105px;
  }
`;

