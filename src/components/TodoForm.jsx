import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`

const Button = styled.button`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #357abd;
  }
`

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <Button type="submit">Add</Button>
    </Form>
  )
}

export default TodoForm
