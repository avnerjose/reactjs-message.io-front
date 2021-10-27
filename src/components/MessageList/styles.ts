import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 1.75rem;
    margin: 2rem 0;
  }
`;

export const MessageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  flex: 1;
`;

export const MessageItem = styled(motion.li)`
  max-width: 27.5rem;

  &:nth-child(2) {
    margin-left: 5rem;
  }
`;

export const MessageItemContent = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const MessageUser = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
    margin-left: 0.75rem;
  }
`;

export const UserImage = styled.div`
  padding: 2px;
  background: linear-gradient(100deg, #18a558 0%, #21b6a8 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`;
