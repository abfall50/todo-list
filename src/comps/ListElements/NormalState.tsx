import { StateProps } from "./ListElement"

export const NormalState: React.FC<StateProps> = (props) => {
	return (
		<li className="w-full h-1/6 border-b-2 border-skin-circle flex items-center" onMouseEnter={() => props.onMouseEnter(props.id)}>
			<div className="w-1/12 h-full flex justify-end items-center shrink-0">
				<div className="w-4/6 h-3/5 border rounded-full"></div>
			</div>
			<span className="pl-8 font-['Josefin_Sans'] text-[20px] text-skin-color4 truncate grow">{props.value}</span>
			<div className="w-2/12 h-full shrink-0 flex justify-center items-center">
				<span className="font-['Josefin_Sans'] text-[20px] text-skin-color4 truncate">{props.date}</span>
			</div>
			<div className="w-1/12 h-full shrink-0"></div>
		</li>
	)
}