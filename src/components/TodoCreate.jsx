import React, { useState } from 'react'

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState('')
    const handleSubmitAddTodo = (e) => {
        e.preventDefault()
        if (!title.trim()) return; // Prevent adding empty todos
        createTodo(title.trim());
        console.log('title::: ', title);
        setTitle('')
    }



    return (
        <form onSubmit={handleSubmitAddTodo} className=" flex gap-4 rounded-md bg-white overflow-hidden py-2 items-center px-4 dark:bg-gray-800">
            <span className="  rounded-full border-2 h-5 w-5 inline-block "></span>
            <input
                type="text"
                className="w-full text-gray-300 outline-none dark:bg-gray-800. dark:text-gray-300"
                placeholder="Create a new TODO ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
        </form>
    )
}

export default TodoCreate