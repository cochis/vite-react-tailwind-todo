import React from 'react'

const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container  mx-auto mt-8">
            <div className=" bg-white  p-4 flex rounded-md justify-center gap-4 dark:bg-gray-800 ">
                <button className={`${filter == 'all' ? 'text-blue-500 hover:text-gray-800' : 'text-gray-400 hover:text-blue-600'} `} onClick={() => changeFilter('all')}> All</button>
                <button className={`${filter == 'active' ? 'text-blue-500 hover:text-gray-800' : 'text-gray-400 hover:text-blue-600'} `} onClick={() => changeFilter('active')} >Active</button>
                <button className={`${filter == 'completed' ? 'text-blue-500 hover:text-gray-800' : 'text-gray-400 hover:text-blue-600'} `} onClick={() => changeFilter('completed')}>Completed</button>
            </div>
        </section>
    )
}

export default TodoFilter