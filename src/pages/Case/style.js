import styled from "styled-components";

export const Card = styled.div`
  background: ${({theme}) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 250px;
  margin: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
`;

export const Followers = styled.p`
font-size: 14px;
color: white;
`;

export const Container = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.COLORS.GRAY_900};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;
export const Tecnologia = styled.button`
  display: flex;
  background: ${({ theme }) => theme.COLORS.DARK};
  width: 100%;
  height: 125px;
  overflow:hidden;
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
