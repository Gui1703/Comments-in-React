import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const TextArea = styled.textarea`
  background: #ffffff;
  border-radius: 10px;
  width: 342px;
  height: 138px;
  border: none;
  margin-top: 52px;
  outline: none;

  padding-left: 15px;
  padding-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: rgba(15, 45, 82, 0.65);
`;

export const Button = styled.button`
  background: ${(props) => (props.isOn ? "#000000" : "#808080	")};
  border-radius: 10px;
  width: 342px;
  height: 64px;
  border: none;
  cursor: pointer;
  margin-top: 24px;

  font-weight: bold;
  font-size: 17px;
  line-height: 2px;
  color: ${(props) => (props.isOn ? "#FFFFFF" : "#000000	")};

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Li = styled.li`
  display: flex;
  background: rgba(255, 255, 255, 0.14);
  width: 342px;
  height: 60px;
  padding-left: 7px;
  border-radius: 10px;
  margin-top: 10px;

  align-items: center;
  color: #ffffff;
  font-weight: 900;
  font-size: 19px;
  line-height: 2px;
`;

export const Ul = styled.ul`
  margin-top: 35px;
`;
