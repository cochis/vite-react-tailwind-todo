import React from 'react'
import IconCross from './icons/IconCross';
import IconCheck from './icons/IconCheck';


const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, complete } = todo;
    // const handleToggleComplete = () => {
    return (
        <article className="flex gap-4  border-b-gray-400 border-b dark:bg-gray-800">
            {/* <button className=" flex-none rounded-full border-2 h-5 w-5 inline-block "></button> */}
            <button className={` flex-none rounded-full border-2 h-5 w-5 ${complete ? ' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center' : ' inline-block'} `}
                onClick={() => updateTodo(id)}
            >

                {complete && <IconCheck />}
            </button>
            <p className={`flex-1 text-gray-500 dark:text-gray-300 ${complete && 'line-through text-gray-400'} `}>
                {title}
            </p>
            <button className="flex-none " onClick={() => removeTodo(id)} >
                <IconCross />
            </button>
        </article>
    )
}



export default TodoItem