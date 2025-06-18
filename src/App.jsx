import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []
console.log('initialStateTodos::: ', initialStateTodos);
const reorder = (list, startIndex, endIndex) => {
    console.log('startIndex::: ', startIndex);
    console.log('endIndex::: ', endIndex);
    const result = [...list];
    console.log('result::: ', result);
    const [removed] = result.splice(startIndex, 1);
    console.log('removed::: ', removed);
    result.splice(endIndex, 0, removed);
    console.log('result::: ', result);

    return result;
};

function App() {

    const [todos, setTodos] = useState(initialStateTodos)
    console.log('todos::: ', todos);

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
    console.log('todos::: ', todos);
    const computedItemsLeft = todos.filter(todo => { todo === !todo.complete }).length;

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
    const handleDragEnd = (result) => {
        const { destination, source } = result;
        console.log('source::: ', source);
        console.log('destination::: ', destination);
        if (!destination) return;
        const startIndex = source.index;
        console.log('startIndex::: ', startIndex);
        const endIndex = destination.index;
        console.log('endIndex::: ', endIndex);
        if (startIndex === endIndex) return; // No change in order

        const reorderedTodos = reorder(todos, startIndex, endIndex);
        console.log('reorderedTodos::: ', reorderedTodos);
        setTodos(reorderedTodos);
    };
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

                <DragDropContext onDragEnd={handleDragEnd}>

                    <TodoList todos={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo} />
                </DragDropContext>
                <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className="text-center mt-8 dark:text-gray-400">Drag & Drop Reorder list</footer>
        </div>
    );
}

export default App;
