import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Checkbox = styled.input`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
`

const Text = styled.span`
  flex: 1;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  color: ${props => props.$completed ? '#888' : '#333'};
`

const DeleteButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff3333;
  }
`

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <Item>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <Text $completed={todo.completed}>{todo.text}</Text>
      <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
    </Item>
  )
}

export default TodoItem
