import { ChildrenProps } from "../App";

export function Wrapper(props: ChildrenProps) {
	const {children} = props
	return (
		<div className="w-[45%] h-[90%] absolute top-5 left-1/2 -translate-x-1/2 grid grid-rows-6 gap-4">
			{children}
			{/*<div className="w-full border border-black"></div>
			<div className="w-full row-span-4 border border-black"></div>*/}
		</div>
	)
}