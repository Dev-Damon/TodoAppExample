import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos]=useState([
    {
      id:1,
      text:'리액트 기초 알아보기',
      checked: true,
    },
    {
      id:2,
      text:'컴포넌트 스타일링',
      checked: false,


    },
    {
      id:3,
      text:'알림 카드 템플릿',
      checked: false,

    },
  ])
const nextId = useRef(4);

const onInsert = useCallback(
  text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },
  [todos],
)

const onToggle = useCallback(
  id =>{
    setTodos(
      todos.map(todo=>
        todo.id===id?{...todo, checked: !todo.checked}:todo,
        ),

    );
  },
  [todos],
);

const onRemove = useCallback(
  id => {
    setTodos(todos.filter(todo => todo.id !== id));
  },
  [todos],
);


  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};
export default App;
