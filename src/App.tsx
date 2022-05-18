import React, { ReactNode, useState } from 'react';
import { Background } from './comps/Background';
import { Bar } from './comps/Bar';
import { Input } from './comps/Input';
import { ListBox } from './comps/ListBox';
import { ListElement } from './comps/ListElements/ListElement';
import { Wrapper } from './comps/Wrapper';
import {v4 as uuid} from 'uuid';

export interface ChildrenProps {
  children?: ReactNode
}

export interface ElementsProps {
  isHover: Hovering
  onMouseEnter: (id: string) => void
  onMouseLeave: () => void
  isComplete: boolean
  value: string
  id: string
}

export interface Todo {
  id: string
  value: string
  isCompleted: boolean
}

export interface Hovering {
  isHover: boolean
  id: string
}

const App: React.FC = () => {

  const [isHover, setIsHover] = useState<Hovering>({isHover: false, id: ""})
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (value: string) => {
    const id = uuid()
    setTodos(
      [...todos, {id: id, value: value, isCompleted: false,}]
    )
  }

  const onMouseEnter = (id: string) => {
    setIsHover({isHover: true, id: id})
  }

  const onMouseLeave = () => {
    setIsHover({isHover: false, id: ""})
  }

  console.log(todos)

  return (
    <div className='w-full h-full'>
    <Background>
      <Wrapper>
        <Bar/>
        <Input addTodo={addTodo} />
        <ListBox>
          {todos.map((todo) => {
            return (
              <ListElement isHover={isHover} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isComplete={todo.isCompleted} value={todo.value} id={todo.id} />
            )
          })}
        </ListBox>
      </Wrapper>
    </Background>
    </div>
  );
}

export default App;
