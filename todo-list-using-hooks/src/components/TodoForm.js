import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <div>
            <form className="to-do" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a to-do list"
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}> Add to do </button>

            </form>
        </div>
    )
}

export default TodoForm
