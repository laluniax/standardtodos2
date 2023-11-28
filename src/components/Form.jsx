import React from "react";
import styled from "styled-components";
import Todolist from "./Todolist";
import TodosInput from "./TodosInput";
function Form() {
  return (
    <div>
      <StDiv>
        <StP>Todolist</StP>
      </StDiv>
      <TodosInput />
      <Todolist isActive={true} />
      <Todolist isActive={false} />
    </div>
  );
}

export default Form;

const StDiv = styled.div`
  background-color: pink;
  width: 100%;
  height: 3rem;
  padding: 20px;
`;

const StP = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
