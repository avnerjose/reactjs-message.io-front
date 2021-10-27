import styled from "styled-components";
import BannerGirl from "../../assets/banner-girl.png";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #17171a url(${BannerGirl}) no-repeat center top;

  padding: 440px 80px 0%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2rem;
    line-height: 2.25rem;
  }
`;

export const SignInWithGithubLink = styled.a`
  background: #4d00ff;
  margin-top: 2rem;
  padding: 0 2.5rem;
  height: 3.5rem;
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;
