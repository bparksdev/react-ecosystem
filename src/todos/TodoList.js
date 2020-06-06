import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { getTodosLoading, getCompletedTodos, getIncompleteTodos} from './selectors'
import { loadTodos, removeTodoRequest,markTodoAsCompletedRequest, markTodoAsIncompleteRequest } from './thunks'

const ListWrapper = styled.div
`
    max-width: 700px;
    margin: auto;
`


const TodoList = ({ 
    completedTodos, 
    incompleteTodos,
    onRemovePressed, 
    onCompletedPressed, 
    onIncompletePressed, 
    isLoading, 
    startLoadingTodos 
    }) => {

    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading To Dos...</div>
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => 
                <TodoListItem  key={Math.random()}
                    todo={todo}  
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                    onIncompletePressed={onIncompletePressed}
                />
            )}
            <h3>Complete:</h3>
            {completedTodos.map(todo => 
                <TodoListItem  key={Math.random()}
                    todo={todo}  
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                    onIncompletePressed={onIncompletePressed}
                />
            )}            
        </ListWrapper>
    )
    return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onIncompletePressed: id => dispatch(markTodoAsIncompleteRequest(id)),
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)