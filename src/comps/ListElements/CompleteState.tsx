import { StateProps } from "./ListElement"

export const CompleteState: React.FC<StateProps> = (props) => {
	return (
		<li className="w-full h-1/6 border-b-2 border-skin-circle flex items-center hover:cursor-pointer" onMouseEnter={() => props.onMouseEnter(props.id)} onMouseLeave={props.onMouseLeave}>
			<div className="w-1/12 h-full flex justify-end items-center shrink-0">
				<div className="w-4/6 h-3/5 border rounded-full bg-gradient-to-br from-[#57DDFF] to-[#C058F3] flex justify-center items-center">
					<img src="../icon-check.svg" alt="check" width="50%" height="50%" />
				</div>
			</div>
			<span className="pl-8 font-['Josefin_Sans'] text-[20px] text-skin-color2 truncate line-through decoration-1 grow">{props.value}</span>
			<div className="w-2/12 h-full shrink-0 flex justify-center items-center">
				<span className="font-['Josefin_Sans'] text-[20px] text-skin-color4 truncate line-through decoration-1">{props.isHover?.isHover && props.id === props.isHover.id ? props.date : props.periodicity}</span>
			</div>
			{props.isHover?.isHover && props.id === props.isHover.id 
				?	<button className="w-1/12 h-full flex justify-center items-center shrink-0">
						<img src="../icon-cross.svg" alt="cross"/>
					</button>
				: 
					<div className="w-1/12 h-full shrink-0"></div>}
		</li>
	)
}