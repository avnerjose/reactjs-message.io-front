import styled, { css } from "styled-components";
import Image from "../assets/background.svg";

type ContainerProps = {
  isAuthenticated: boolean;
  screenWidth: number;
};

export const Container = styled.main<ContainerProps>`
  ${({ isAuthenticated, screenWidth }) => css`
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 453px;
    column-gap: 7.5rem;
    position: relative;

    ${isAuthenticated &&
    screenWidth > 1200 &&
    css`
      &::before {
        content: "";
        height: 100vh;
        width: 420px;
        background: url(${Image}) no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        right: max(${`-${(screenWidth - 1200) / 2}px`},-200px);
      }/
    `}
  `}
`;
