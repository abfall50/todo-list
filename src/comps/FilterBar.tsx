import { useState } from "react"

export const FilterBar = () => {

	const [colorAll, setColorAll] = useState<string>("text-skin-color3")
	const [colorActive, setColorActive] = useState<string>("text-skin-color3")
	const [colorCompleted, setColorCompleted] = useState<string>("text-skin-color3")

	const onClickAll = () => {
		setColorActive("text-skin-color3")
		setColorCompleted("text-skin-color3")
		if (colorAll === "text-skin-color3")
			setColorAll("text-skin-filter")
	}
	
	const onClickActive = () => {
		setColorAll("text-skin-color3")
		setColorCompleted("text-skin-color3")
		if (colorActive === "text-skin-color3")
			setColorActive("text-skin-filter")
	}

	const onClickCompleted = () => {
		setColorAll("text-skin-color3")
		setColorActive("text-skin-color3")
		if (colorCompleted === "text-skin-color3")
			setColorCompleted("text-skin-filter")
	}

	const style = `font-['Josefin_Sans'] text-[15px] ${colorAll} hover:text-skin-color4 font-medium focus:text-skin-filter`
	const style2 = `font-['Josefin_Sans'] text-[15px] ${colorActive} hover:text-skin-color4 font-medium focus:text-skin-filter mx-5`
	const style3 = `font-['Josefin_Sans'] text-[15px] ${colorCompleted} hover:text-skin-color4 font-medium focus:text-skin-filter`

	return (
		<>
		<div className="w-full h-[15%] grid grid-cols-3">
			<span className="justify-self-start self-center pl-5 font-['Josefin_Sans'] text-[18px] text-skin-color3 font-medium">1 items left</span>
			<div className="justify-self-center self-center">
				<button onClick={onClickAll} className={style}>All</button>
				<button onClick={onClickActive} className={style2}>Active</button>
				<button onClick={onClickCompleted} className={style3}>Completed</button>
			</div>
			<button className="justify-self-end self-center pr-5 font-['Josefin_Sans'] text-[15px] text-skin-color3 hover:text-skin-color4 font-medium">Clear Completed</button>
		</div>
		</>
	)
}