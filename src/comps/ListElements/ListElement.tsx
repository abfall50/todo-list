import React from "react"
import { ElementsProps, Hovering } from "../../App"
import { CompleteState } from "./CompleteState"
import { HoverState } from "./HoverState"
import { NormalState } from "./NormalState"

export interface StateProps {
	value: string
	onMouseEnter: (id: string) => void
	onMouseLeave: () => void
	isHover?: Hovering
	id: string
}

export const  ListElement: React.FC<ElementsProps> = (props) => {
	return (
		<>
			{props.isComplete ? <CompleteState value={props.value} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} isHover={props.isHover} id={props.id} /> :
			props.isHover && props.id === props.isHover.id ? <HoverState value={props.value} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} id={props.id} /> :
							<NormalState value={props.value} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} id={props.id} />}
		</>
	)
}