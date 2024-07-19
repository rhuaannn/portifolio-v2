import styled from "styled-components";

export const ContainerProfile = styled.div`
  display: flex;
  width: 100%;
  height: 897px;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Description = styled.div`
  max-width: 645px;
  height: 500px;
  flex-direction: row;
  padding-top: 60px;

  > p {
    display: flex;
    font-size: 64px;
    font-family: "Poppins";
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    padding-top: 24px;
    margin-left: 112px;
  }
  > span {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 18px;
    margin-left: 112px;
    text-align: justify;
    font-size: "Inter";
    weight: 400;
    line-height: 27px;
    padding-top: 16px;
  }
`;
export const Title = styled.div`
  display: flex;

  > p {
    width: 100%;
    font-size: 16px;
    font-family: "Poppins";
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-left: 112px;
  }
`;

export const ImageProfile = styled.div`
  display: flex;

  > img {
    border-radius: 18px;
    margin-left: 91px;
    width: 400px;
    height: 400px;
  }
`;

export const Tecnologia = styled.button`
  display: flex;
  background: ${({ theme }) => theme.COLORS.DARK};
  width: 100%;
  height: 112px;
  border: none;
  > div {
    width: 1216px;
    height: 64px;
    margin-right:112px;

    > button {
      margin-left: 16px;
      margin-top: 26.5px;
      padding: 16px, 32px, 16px, 32px;
      height: 59px;
      width: 187px;
      background: ${({ theme }) => theme.COLORS.DEFAULT};
      color: white;
      border: none;
      font-family: "Poppins";
      font-size: 18px;
      line-height: 27px;
      font-weight: 300;
      border-radius: 8px;
    }
  }
`;
