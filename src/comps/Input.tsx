import { useState, KeyboardEvent } from "react"

export const Input: React.FC<{addTodo: (value: string, date: string) => void }> = (props) => {

	const today = new Date()
	const min = `${today.getFullYear()}-${today.getMonth() < 9 ? "0" : ""}${today.getMonth() + 1}-${today.getDate()}`
	const max = `${today.getFullYear()}-12-31`

	const [todo, setTodo] = useState<string>("")
	const [date, setDate] = useState<string>(min)

	const onEnterButton = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter' && todo && date) {
			props.addTodo(todo, date)
			setTodo("")
			setDate(min)
		}
	}

	const onEnterInput = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && todo && date) {
			props.addTodo(todo, date)
			setTodo("")
			setDate(min)
		}
	}

	const onClick = () => {
		if (todo && date) {
			props.addTodo(todo, date)
			setTodo("")
			setDate(min)
		}
	}

	return (
		<div className="w-full h-2/3 flex items-end border-0 rounded-md bg-skin-main">
			<div className="w-1/12 h-full flex justify-center items-center">
				<div className="w-2/3 h-3/5 border border-skin-circle rounded-full flex justify-center items-center">
				</div>
			</div>
			<div className="h-full grow flex items center pl-5 border-r-2">
				<input type="text" placeholder="Create a new todo..." onChange={e => setTodo(e.target.value)} value={todo} className="w-full placeholder:font-['Josefin_Sans'] placeholder:text-[25px] placeholder:text-skin-color3 bg-skin-main outline-none border-0 rounded-md font-['Josefin_Sans'] text-[25px] text-skin-color4 caret-skin-caret" onKeyDown={onEnterInput}/>
			</div>
			<div className="w-3/12 h-full flex justify-center items-center border-r-2">
				<input type="date" min={min} max={max} onChange={e => setDate(e.target.value)} value={date} className="bg-skin-main outline-none font-['Josefin_Sans'] text-[18px] text-skin-color4 caret-skin-caret" onKeyDown={onEnterInput}/>
			</div>
			<div className="w-1/12 h-full flex justify-center items-center">
				<button className="w-1/2 h-2/5 bg-gray-300 border-2 rounded-md flex justify-center items-center hover:bg-gradient-to-br hover:from-[#57DDFF] hover:to-[#C058F3] hover:border-none" onClick={onClick} onKeyDown={onEnterButton}>
					<img src="../icon-check.svg" alt="check" />
				</button>
			</div>
		</div>
	)
}