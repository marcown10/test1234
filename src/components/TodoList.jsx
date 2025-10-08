import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import TodoItem from './TodoItem'
import EmptyState from './EmptyState'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const List = styled.ul`
  list-style: none;
  width: 100%;
  ${css`animation: ${fadeIn} 0.5s ease;`}
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

const FilterButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  color: ${props => props.$active ? '#667eea' : '#666'};
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid ${props => props.$active ? '#667eea' : 'transparent'};

  &:hover {
    color: #667eea;
  }
`

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const [filter, setFilter] = React.useState('all')

  const filteredTodos = React.useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }, [todos, filter])

  return (
    <>
      <FilterContainer>
        <FilterButton 
          onClick={() => setFilter('all')} 
          $active={filter === 'all'}
        >
          All
        </FilterButton>
        <FilterButton 
          onClick={() => setFilter('active')} 
          $active={filter === 'active'}
        >
          Active
        </FilterButton>
        <FilterButton 
          onClick={() => setFilter('completed')} 
          $active={filter === 'completed'}
        >
          Completed
        </FilterButton>
      </FilterContainer>

      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        <List>
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </List>
      )}
    </>
  )
}

export default TodoList
