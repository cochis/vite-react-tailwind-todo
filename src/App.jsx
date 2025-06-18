import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState, useEffect } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

function App() {

    const [todos, setTodos] = useState(initialStateTodos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])




    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            complete: false
        }
        setTodos([...todos, newTodo])
    }

    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }
    const updateTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        }));
    }
    const computedItemsLeft = todos.filter(todo => !todo.complete).length;

    const clearCompleted = () => {
        const updatedTodos = todos.filter(todo => !todo.complete);
        setTodos(updatedTodos);
    }

    const [filter, setFilter] = useState('all');

    const changeFilter = (filter) => setFilter(filter);
    // Filter todos based on the selected filter
    const filteredTodos = () => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.complete);
            case 'completed':
                return todos.filter(todo => todo.complete);
            default:
                return todos;
        }
    }

    return (
        <div
            className="bg-[url(./assets/images/bg-mobile-light.jpg)] 
        bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900 
        dark:bg-[url(./assets/images/bg-mobile-dark.jpg)]  md:bg-[url(./assets/images/bg-desktop-light.jpg)] dark:md:bg-[url(./assets/images/bg-desktop-dark.jpg)] 
        "
        >

            <Header />

            <main className="container mx-auto px-4 mt-8 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <TodoList todos={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo} />
                <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className="text-center mt-8 dark:text-gray-400">Drag & Drop Reorder list</footer>
        </div>
    );
}

export default App;
