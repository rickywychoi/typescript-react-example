import React, { useRef, useState } from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = (props: Props) => {
    const [count, setCount] = useState<number | undefined>(null!);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <h1>{props.text}</h1>
            <h3>{props.person.firstName} {props.person.lastName}</h3>
            <input ref={inputRef}  onChange={props.handleChange}/>
        </div>
    );
}

export default TextField;