import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import styled from "styled-components";

export const Container = styled.div`
  background: #1b1b1f;
  padding: 1.5rem;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  color: #c4c4cc;

  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SignOutIcon = styled(VscSignOut)`
  font-size: 2rem;
`;

export const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImage = styled.div`
  padding: 3px;
  background: linear-gradient(100deg, #18a558 0%, #21b6a8 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 6px solid #121214;
  }
`;

export const UserName = styled.strong`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const UserGithub = styled.span`
  display: flex;
  align-items: center;

  margin-top: 0.5rem;
  color: #c4c4cc;
`;

export const GithubIcon = styled(VscGithubInverted)`
  font-size: 1rem;
  margin-right: 0.5rem;
`;

export const SendMessageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 3rem;

  background: #202024;

  label {
    padding: 1.125rem 1.5rem;
    font-size: 1.25rem;
    background: #29292e;
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 1.5rem;
    resize: none;
    height: 10rem;
    color: #e1e1e6;
    font-size: 1rem;
    line-height: 1.5rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #8d8d99;
    }
  }

  button {
    align-self: flex-end;
    border: 0;
    background: #18a558;
    margin: 1.5rem;
    cursor: pointer;
    padding: 0 2rem;
    height: 2.5rem;
    color: #fff;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
