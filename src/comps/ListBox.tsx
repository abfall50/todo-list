import { isPropertySignature } from "typescript";
import { ChildrenProps } from "../App";

export function ListBox(props: ChildrenProps) {
	const {children} = props

	return (
		<div className="w-full border-0 rounded-md bg-skin-main shadow-2xl row-span-4">
			<ul className="h-[85%] border rounded-md overflow-y-scroll">
				{children}
			</ul>
		</div>
	)
}