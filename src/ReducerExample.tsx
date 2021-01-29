import React, { useReducer } from 'react'

const initialState: State = [];

type State = Todo[];

type ACTIONTYPE = 
    | { type: "add"; txt: string; }
    | { type: "remove"; idx: number; };

interface Todo {
    text: string;
    complete: boolean;
}

const TodoReducer = (state: State, action: ACTIONTYPE) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.txt, complete: false }];
        case "remove":
            // what is _? => see https://stackoverflow.com/questions/27637013/what-is-the-meaning-of-an-underscore-in-javascript-function-parameter#:~:text=The%20underscore%20symbol%20_%20is%20a,ignore%20this%20binding%2Fparameter%22.
            return state.filter((_, i) => action.idx !== i)
        default:
            return state;
    }
}

export const ReducerExample = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <div>
            {JSON.stringify(todos)}
            <button
                onClick={() => {
                    dispatch({ type: "add", txt: "new!" });
                }}
            >
                +
            </button>
        </div>
    )
}