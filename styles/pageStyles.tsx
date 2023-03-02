import styled from "styled-components";

const MainContainer = styled.div`
  overflow-x: auto !important;
  padding: 15px 15px;
  color: #00008b;
`;

const Container = styled.div`
  padding: 15px;
  margin: 15px 0;
  font-size: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const Comment = styled.p`
  margin: 0;
  padding: 15px;
  font-size: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px 15px;
  width: 100%;
  font-size: 20px;
  box-sizing: border-box;
  border: 0;
  border-radius: 6px;
  background-color: #e9e9e9;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  width: 100%;
  font-size: 26px;
  color: #fff;
  border-radius: 6px;
  border: 0;
  background-color: #00008b;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: #4b4bff;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TBody = styled.tbody``;

const Tr = styled.tr`
  height: 50px;
  display: flex;
`;

const Td = styled.td`
  padding: 4px;
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #838383;
  &:nth-child(2n) {
    background-color: #b8dff8;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 20px;
`;

export {
  Table,
  TBody,
  Tr,
  Td,
  MainContainer,
  Container,
  Comment,
  Input,
  Text,
  Button,
};
