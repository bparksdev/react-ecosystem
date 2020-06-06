import React from 'react'
import styled from 'styled-components'

const ToDoItemContainer = styled.div
`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`

const ToDoItemContainerWithWarning = styled(ToDoItemContainer)
`
    border-bottom: 
    ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
        ? 'none'
        : '2px solid red')
    };
`

const Button = styled.button
`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`

const ButtonsContainer = styled.div
`
    position: absolute;
    right: 12px;
    bottom: 12px;
`

const CompletedButton = styled(Button) //inheritance
`
    background-color: #2fa81a;    
`

const RemoveButton = styled(Button)
`
    color: #fff;
    background-color: #a81818;
    margin-left: 8px;  
`

const TodoListItem = ({todo, onRemovePressed, onCompletedPressed, onIncompletePressed}) => {
    const Container = todo.isCompleted ? ToDoItemContainer : ToDoItemContainerWithWarning;
    return (
        <Container createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>
            <p>
                Created: {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
            <ButtonsContainer>
                {todo.isCompleted
                    ? 
                        <RemoveButton 
                            onClick={() => onIncompletePressed(todo.id)}>
                            Mark As Not Completed
                        </RemoveButton>

                    :
                        <CompletedButton 
                            onClick={() => onCompletedPressed(todo.id)}>
                            Mark As Completed
                        </CompletedButton>
                }
                <RemoveButton onClick={() => onRemovePressed(todo.id)}>
                    Remove
                </RemoveButton>
            </ButtonsContainer>
        </Container>
    )
}

export default TodoListItem