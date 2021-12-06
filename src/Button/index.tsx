import React from "react";
import styled from "@emotion/styled/macro";

interface ButtonProps {
  handleClick: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const ButtonDesk = styled.button`
  display: flex;
  width: 241px;
  height: 56px;
  background: #4e34e1;
  font-family: Inter, sans-serif;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  border-radius: 2px;
  outline: none;
  border: none;
`;

const Button: React.FC<ButtonProps> = ({ handleClick, onClick, children }) => {
  return <ButtonDesk onClick={handleClick}>{children}</ButtonDesk>;
};

export default Button;
