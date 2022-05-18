import { StateProps } from "./ListElement"

export const HoverState: React.FC<StateProps> = (props) => {
	return (
		<li className="w-full h-1/6 border-b-2 border-skin-circle flex items-center" onMouseLeave={props.onMouseLeave}>
			<div className="w-1/12 h-full flex justify-end items-center shrink-0">
				<div className="w-4/6 h-3/5 p-px bg-gradient-to-br from-[#57DDFF] to-[#C058F3] rounded-full">
					<div className="w-full h-full rounded-full bg-skin-main"></div>
				</div>
			</div>
			<span className="pl-8 font-['Josefin_Sans'] text-[20px] text-skin-color4 truncate grow">{props.value}</span>
			<button className="w-1/12 h-full flex justify-center items-center shrink-0">
				<img src="../icon-cross.svg" alt="cross"/>
			</button>
		</li>
	)
}