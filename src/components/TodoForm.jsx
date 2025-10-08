import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 2px solid #e1e1e1;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0 2rem;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
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
        placeholder="Add a new task..."
      />
      <Button type="submit">Add</Button>
    </Form>
  )
}

export default TodoForm
