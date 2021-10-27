import { Container, SignInWithGithubLink } from "./styles";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";

export function LoginBox() {
  const { signInURL } = useContext(AuthContext);
  return (
    <Container>
      <strong>Entre e compartilhe sua mensagem</strong>
      <SignInWithGithubLink href={signInURL}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </SignInWithGithubLink>
    </Container>
  );
}
