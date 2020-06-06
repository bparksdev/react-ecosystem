import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import { addTodoRequest } from './thunks'
import {getTodos} from './selectors'

const NewFormContainer = styled.div
`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`
const NewToDoInput = styled.input
`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`

const NewToDoButton = styled.button
`    
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #2fa81a;
`

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState("")

    return (
        <NewFormContainer>
            <NewToDoInput
                type="text" 
                value={inputValue}
                placeholder="Type new item"
                onChange={e => setInputValue(e.target.value)}
            />
            <NewToDoButton
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue)
                    if(!isDuplicateText) {   
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }
                  }
                }
                >Create ToDo
            </NewToDoButton>
        </NewFormContainer>
    )
}

const mapStateToProps = state => ({
    todos: getTodos(state),
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)