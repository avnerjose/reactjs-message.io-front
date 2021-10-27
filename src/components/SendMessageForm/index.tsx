import { FormEvent, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import {
  Container,
  SignOutButton,
  SignOutIcon,
  UserInformation,
  UserImage,
  UserGithub,
  UserName,
  GithubIcon,
  SendMessageForm as SendMessageFromComponent,
} from "./styles";
import "react-toastify/dist/ReactToastify.css";

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    const { status } = await api.post("messages", {
      message,
    });

    if (status === 200) {
      const options = {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      };

      toast.success("Mensagem enviada com sucesso!", options);
    }
    setMessage("");
  }

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SignOutButton>
        <SignOutIcon onClick={signOut} />
      </SignOutButton>
      <UserInformation>
        <UserImage>
          <img src={user?.avatar_url} alt={user?.name} />
        </UserImage>
        <UserName>{user?.name}</UserName>
        <UserGithub>
          <GithubIcon />
          {user?.login}
        </UserGithub>
      </UserInformation>

      <SendMessageFromComponent onSubmit={handleSendMessage}>
        <label htmlFor="message">Messagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual a sua expectativa para o evento?"
          onChange={({ target }) => setMessage(target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </SendMessageFromComponent>
    </Container>
  );
}
