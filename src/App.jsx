import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
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
  color: #666;
  font-size: 0.9rem;
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

  const completedTodos = todos.filter(todo => todo.completed).length

  return (
    <Container>
      <Title>Todo List</Title>
      <Stats>
        {completedTodos} of {todos.length} tasks completed
      </Stats>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </Container>
  )
}

export default App
