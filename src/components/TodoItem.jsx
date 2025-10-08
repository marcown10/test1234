import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
`

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  ${css`animation: ${slideIn} 0.3s ease;`}
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.deleting {
    ${css`animation: ${fadeOut} 0.3s ease forwards;`}
  }
`

const CheckboxContainer = styled.div`
  margin-right: 1rem;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

const StyledCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${props => props.$completed ? '#667eea' : '#e1e1e1'};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$completed ? '#667eea' : 'white'};

  &::after {
    content: '✓';
    color: white;
    opacity: ${props => props.$completed ? 1 : 0};
    transform: ${props => props.$completed ? 'scale(1)' : 'scale(0.5)'};
    transition: all 0.2s ease;
  }

  &:hover {
    border-color: #667eea;
    transform: scale(1.05);
  }
`

const Text = styled.span`
  flex: 1;
  font-size: 1rem;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  color: ${props => props.$completed ? '#888' : '#333'};
  transition: all 0.3s ease;
  padding: 0.5rem 0;
`

const DeleteButton = styled.button`
  background: transparent;
  color: #ff4d4d;
  border: 2px solid #ff4d4d;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    background: #ff4d4d;
    color: white;
    opacity: 1;
    transform: translateY(-1px);
  }
`

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const itemRef = useRef(null)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      deleteTodo(todo.id)
    }, 300)
  }

  return (
    <Item ref={itemRef} className={isDeleting ? 'deleting' : ''}>
      <CheckboxContainer onClick={() => toggleTodo(todo.id)}>
        <HiddenCheckbox
          checked={todo.completed}
          onChange={() => {}}
        />
        <StyledCheckbox $completed={todo.completed} />
      </CheckboxContainer>
      <Text $completed={todo.completed}>{todo.text}</Text>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </Item>
  )
}

export default TodoItem
