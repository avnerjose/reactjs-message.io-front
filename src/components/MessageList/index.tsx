import {
  Container,
  MessageList as MessageListComponent,
  MessageItem,
  MessageItemContent,
  MessageUser,
  UserImage,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import io from "socket.io-client";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

const messagesQueue: Message[] = [];
const socket = io("http://127.0.0.1:4000");

socket.on("new_message", (message: Message) => {
  messagesQueue.push(message);
});

const firstItemAnimation = {
  initial: {
    x: -10,
    y: -10,
  },
  animate: {
    x: 0,
    y: 0,
  },
};

const variants = {
  visible: (i: number) => {
    let res = {};

    if (i == 0) {
      res = {
        opacity: 1,
        y: 0,
      };
    }

    return res;
  },
  hidden: (i: number) => {
    let res = {};

    if (i == 0) {
      res = {
        opacity: 0,
        y: -10,
      };
    }

    return res;
  },
};

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prev) =>
          [messagesQueue[0], prev[0], prev[1]].filter(Boolean)
        );
        messagesQueue.shift();
      }
    });
  });

  useEffect(() => {
    getLatest3Messages();
  }, []);

  const getLatest3Messages = async () => {
    await api
      .get("/messages/last3")
      .then((res) => setMessages(res.data as Message[]));
  };
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <MessageListComponent>
        <AnimateSharedLayout>
          {messages?.map(({ id, text, user }, index) => (
            <MessageItem
              key={id}
              layoutId={id}
              // initial={{ opacity: 0, translateX: -50 }}
              // animate={{ opacity: 1, translateX: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <MessageItemContent>{text} </MessageItemContent>
              <MessageUser>
                <UserImage>
                  <img src={user.avatar_url} alt={user.name} />
                </UserImage>
                <span>{user.name}</span>
              </MessageUser>
            </MessageItem>
          ))}
        </AnimateSharedLayout>
      </MessageListComponent>
    </Container>
  );
}
