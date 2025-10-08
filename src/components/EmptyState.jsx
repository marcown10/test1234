import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #667eea;
`

const Text = styled.p`
  font-size: 1.1rem;
`

const EmptyState = () => (
  <Container>
    <Icon>📝</Icon>
    <Text>No tasks yet. Add your first task above!</Text>
  </Container>
)

export default EmptyState
