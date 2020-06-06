import {expect} from 'chai'
import {todos} from '../reducers'

describe('The todos reducer', () => {
    it('Adds a new todo', () => {
        const fakeTodo = {text: 'Testing 123', isCompleted: false}
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo
            }
        }
        const originalState = {isLoading: false, data: []}

        const expected = {
            isLoading: false,
            data: [fakeTodo]
        }

        const actual = todos(originalState, fakeAction)

        expect(actual).to.deep.equal(expected)

    })
})