import styled from "styled-components";
import { SpinnerContainer } from "../Spinner/spinner-style";
export const baseButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const googleSignInStyles = styled(baseButtonStyles)`
  background-color: #4285f4;
  color: white;
  border: none;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const invertedStyles = styled(baseButtonStyles)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
