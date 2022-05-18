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
  date: string
  periodicity: string
  id: string
}

export interface Todo {
  id: string
  value: string
  isCompleted: boolean
  date: string
  periodicity: string
}

export interface Hovering {
  isHover: boolean
  id: string
}

const App: React.FC = () => {

  const [isHover, setIsHover] = useState<Hovering>({isHover: false, id: ""})
  const [todos, setTodos] = useState<Todo[]>([])

  const getDateFromMonth = (month: number, year: number) => {
    if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)))
      return (29)
    if (month === 1)
      return (28)
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11)
      return (31)
    return (30)
  }
  
  const getMonday = (date: string) => {
    const today = new Date(date)
    const day = today.getDay()
    const diff = today.getDate() - day + (day === 0 ? -6 : 1)
    let monday: Date
    if (diff <= 0) {
      monday = new Date(today.setMonth(today.getMonth() - 1))
      const dayInLastMonth = getDateFromMonth(monday.getMonth(), monday.getFullYear())
      monday.setDate(dayInLastMonth + diff)
    }
    else
      monday = new Date(today.setDate(diff))
    return monday
  }

  const getPeriodicity = (date: string) => {
    const todoDate = new Date(date)
    const monday = getMonday(date)
    const current = new Date()

    console.log(monday.getMonth(), current.getMonth())


    if (current.getDate() - todoDate.getDate() === 0 && current.getMonth() === todoDate.getMonth())
      return ("Today")
    if (current.getDate() - monday.getDate() < 7 && monday.getMonth() === current.getMonth() && current.getDate() > monday.getDate())
      return ("This Week")
    if (monday.getMonth() + 1 === current.getMonth()) {
      const dayInMonth = getDateFromMonth(monday.getMonth(), monday.getFullYear())
      if (dayInMonth - monday.getDate() + current.getDate() < 7)
        return ("This Week")
    }
    if (current.getMonth() === todoDate.getMonth())
      return ("This Month")
    return ("Next Month")
  }

  const addTodo = (value: string, date: string) => {
    const id = uuid()
    if (value.trim() === "" || date === "")
      return
    setTodos(
      [...todos, {id: id, value: value, isCompleted: true, date: date, periodicity: getPeriodicity(date)}]
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
                <ListElement isHover={isHover} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isComplete={todo.isCompleted} value={todo.value} id={todo.id} date={todo.date} periodicity={todo.periodicity} />
            )
          })}
        </ListBox>
      </Wrapper>
    </Background>
    </div>
  );
}

export default App;
