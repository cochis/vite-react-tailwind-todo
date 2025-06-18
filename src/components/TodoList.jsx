import React from 'react'
import CrossIcon from './icons/IconCross'
import TodoItem from './TodoItem'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId='todos'>
            {
                (droppableProvider) => (

                    <div ref={droppableProvider.innerRef}
                        {...droppableProvider.droppableProps}
                        className="bg-white rounded-t-md [&>article]:p-4 mt-8">
                        {todos.map((todo) => (
                            <Draggable key={todo.id} draggableId={todo.id.toString()} index={todo.id}>
                                {(draggableprovider) => (
                                    <TodoItem todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}
                                        ref={draggableprovider.innerRef}
                                        {...draggableprovider.draggableProps}
                                        {...draggableprovider.dragHandleProps}
                                    />

                                )}

                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </div>
                )
            }
        </Droppable>
    )
}

export default TodoList