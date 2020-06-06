import { expect } from 'chai';
import { getCompletedTodos, getIncompleteTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: false,
        }, {
            text: 'Climb Mount Everest',
            isCompleted: false,
        }];
        const expected = [{
            text: 'Say Hello',
            isCompleted: true,
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The getIncompleteTodos selector', () => {
    it('Returns only incomplete todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: false,
        }, {
            text: 'Say Goodbye',
            isCompleted: true,
        }, {
            text: 'Climb Mount Everest',
            isCompleted: true,
        }];
        const expected = [{
            text: 'Say Hello',
            isCompleted: false,
        }];
        const actual = getIncompleteTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});