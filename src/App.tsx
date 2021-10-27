import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";

import { AuthContext } from "./contexts/auth";
import { useWindowDimensions } from "./hooks/windowDimensions";
import { Container } from "./styles/app";

export function App() {
  const { user } = useContext(AuthContext);
  const { width } = useWindowDimensions();

  return (
    <Container isAuthenticated={!!user} screenWidth={width}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </Container>
  );
}
