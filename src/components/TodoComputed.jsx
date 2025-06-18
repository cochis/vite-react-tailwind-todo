import React from 'react'

const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="py-4 px-4 flex rounded-b-md justify-between bg-white dark:bg-gray-800 ">
            <span className="text-gray-400 dark:text-gray-300">{computedItemsLeft} items left</span>
            <button className="text-gray-400 dark:text-gray-300" onClick={clearCompleted}>
                Clear Completed
            </button>
        </section>
    )
}

export default TodoComputed