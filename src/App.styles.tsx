import styled from "@emotion/styled";
import "@fontsource-variable/montserrat/wght.css";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(249, 250, 251, 0.5);
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 512px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  border-width: 1px;
  padding: 1rem 1.5rem 2.5rem;
  position: relative;
  overflow: hidden;
  img {
    padding: 1.5rem;
    width: 70%;
    margin: 0 auto;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.5rem;
    height: 100%;
    background-color: #7a01fc;
    display: block;
  }
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Montserrat Variable", sans-serif;
`;

export const FormInput = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  span {
    font-family: "Montserrat Variable", sans-serif;
    font-size: 14px;
    margin-bottom: 0.25rem;
  }
  input {
    padding: 8px 12px;
    line-height: 1.5rem;
    border: rgb(229, 231, 235) 1px solid;
    &:focus {
      box-shadow: 0 0 0 3px rgba(248, 180, 180, 0.45);
      outline: 2px px solid transparent;
      outline-offset: 2px;
    }
  }
`;

export const FormButton = styled.button`
  font-family: "Montserrat Variable", sans-serif;
  appearance: button;
  color: #fff;
  padding: 8px 0;
  border-radius: 4px;
  border: 0px;
  width: 100%;
  background-color: rgb(54, 47, 120);
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(81, 69, 205, 1);
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
