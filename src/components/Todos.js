import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item hoverable col s12" key={todo.id}>
          <blockquote>
            <h6 onClick={() => deleteTodo(todo.id)}>
              {todo.content.toUpperCase()}
            </h6>
          </blockquote>
        </div>
      )
    })
  ) : (
      <h6 className='center'>You have no todo's left!</h6>
    )

  return (
    <div className='todos collection row'>
      {todoList}
    </div>
  );
}

export default Todos;
