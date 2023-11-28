import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Todolist({ isActive }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>{isActive ? "📖 할 일" : " ⭐️ 완료 !"}</h2>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StTodolistBox>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p>{item.isDone.toString()}</p>
              <button>삭제</button>
              <button>완료</button>
            </StTodolistBox>
          );
        })}
    </div>
  );
}

export default Todolist;

const StTodolistBox = styled.div`
  background-color: #b8b8b8;
  height: 10rem;
  margin-top: 2rem;
  margin: 5px;
`;
