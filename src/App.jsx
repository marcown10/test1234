import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.5s ease;
`

const Title = styled.h1`
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Stats = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #667eea;
`

const StatLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
`

const ClearButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4d4d;
  }
`

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const completedTodos = todos.filter(todo => todo.completed).length
  const activeTodos = todos.length - completedTodos

  return (
    <Container>
      <Title>Todo List</Title>
      <Stats>
        <StatItem>
          <StatValue>{activeTodos}</StatValue>
          <StatLabel>Active Tasks</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{completedTodos}</StatValue>
          <StatLabel>Completed</StatLabel>
        </StatItem>
      </Stats>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      {completedTodos > 0 && (
        <ClearButton onClick={clearCompleted}>
          Clear completed tasks
        </ClearButton>
      )}
    </Container>
  )
}

export default App
