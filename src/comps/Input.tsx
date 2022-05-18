import { useState, KeyboardEvent } from "react"

export const Input: React.FC<{addTodo: (value: string) => void }> = (props) => {

	const [todo, setTodo] = useState<string>("")

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && todo.trim() !== "") {
			props.addTodo(todo)
			setTodo("")
		}
	}

	return (
		<div className="w-full h-2/3 flex items-end border-0 rounded-md bg-skin-main">
			<div className="w-1/6 h-full flex justify-center items-center">
				<div className="w-1/3 h-1/2 border border-skin-circle rounded-full flex justify-center items-center">
				</div>
			</div>
			<div className="h-full grow flex items center">
				<input type="text" placeholder="Create a new todo..." onChange={e => setTodo(e.target.value)} onKeyDown={onEnter} value={todo} className="w-full placeholder:font-['Josefin_Sans'] placeholder:text-[25px] placeholder:text-skin-color3 bg-skin-main outline-none border-0 rounded-md font-['Josefin_Sans'] text-[25px] text-skin-color4 caret-skin-caret" />
			</div>
		</div>
	)
}