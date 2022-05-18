import React, { ReactNode, useEffect, useState } from 'react';
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
  date: string
  id: string
}

export interface Todo {
  id: string
  value: string
  isCompleted: boolean
  date: string
}

export interface Hovering {
  isHover: boolean
  id: string
}

const App: React.FC = () => {

  const [isHover, setIsHover] = useState<Hovering>({isHover: false, id: ""})
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    
  }, [todos])

  const addTodo = (value: string, date: string) => {
    const id = uuid()
    if (value.trim() === "" || date === "")
      return
    setTodos(
      [...todos, {id: id, value: value, isCompleted: false, date: date}]
    )
  }

  const onMouseEnter = (id: string) => {
    setIsHover({isHover: true, id: id})
  }

  const onMouseLeave = () => {
    setIsHover({isHover: false, id: ""})
  }

  return (
    <div className='w-full h-full'>
    <Background>
      <Wrapper>
        <Bar/>
        <Input addTodo={addTodo} />
        <ListBox>
          {todos.sort((a, b) => +new Date(a.date) - +new Date(b.date)).map((todo) => {
            return (
              <ListElement isHover={isHover} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isComplete={todo.isCompleted} value={todo.value} id={todo.id} date={todo.date} />
            )
          })}
        </ListBox>
      </Wrapper>
    </Background>
    </div>
  );
}

export default App;
