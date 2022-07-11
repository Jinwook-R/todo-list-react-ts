import React from "react";
import styled from '@emotion/styled';
import Task from "./Task";
import { useTasks } from "../contexts/TaskProvider";

const TaskList = () => {
  const {tasks} = useTasks();

  return (
    <UnorderedList>
      {
        tasks.map(item => (<Task key={item.id} id={item.id} content={item.content}></Task>))
      }
    </UnorderedList>
  );
}

export default TaskList;

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }

`