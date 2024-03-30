"use client";

import { IoChatbubblesOutline } from "react-icons/io5";
import styled from "styled-components";

interface ChatIconProps {
  onClick(): void;
  num_comments: number;
}

const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: 300ms;

  &:hover {
    background-color: ${(props) => props.theme.palette.grey[300]};
  }

  .counter-container {
    position: absolute;
    top: -5px;
    right: -8px;
    background-color: ${(props) => props.theme.palette.error.main};
    border-radius: 25px;
    display: flex;
    width: 18px;
    height: 18px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.8rem;
  }
`;

const ChatIcon = ({ onClick, num_comments }: ChatIconProps) => {
  return (
    <Container onClick={onClick}>
      <div className="counter-container">{num_comments}</div>
      <IoChatbubblesOutline color="#616161" fontSize="1.3rem" />
    </Container>
  );
};

export default ChatIcon;
