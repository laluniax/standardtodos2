import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

function TodosInput() {
  const dispatch = useDispatch;

  const submitFormHandler = (event) => {
    event.preventDefault(todo);

    dispatch(addTodo());
    const todo = {
      id: "",
      title,
      content,
      isDone: false,
    };
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentInputHandler = (event) => {
    setContent(event.target.value);
  };

  return (
    <StInputForm onSubmit={submitFormHandler}>
      제목 :
      <StInput onChange={titleInputHandler} value={title} type="text" />
      내용 :
      <StInput onChange={contentInputHandler} value={content} type="text" />
      <StBtn>추가</StBtn>
    </StInputForm>
  );
}

export default TodosInput;

const StInputForm = styled.form`
  margin-top: 1rem;
`;
const StInput = styled.input`
  width: 20rem;
  height: 2rem;
  border: 1px solid white;
  background-color: pink;
  border-radius: 2rem;
`;

const StBtn = styled.button`
  all: unset;
  font-size: 20px;
  margin-left: 10px;
  border: 2px solid pink;
  border-radius: 1rem;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: pink;
  }
`;
