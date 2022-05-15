import { ChildrenProps } from '../App'

export function Background(props: ChildrenProps) {
	const {children} = props
	return (
		<>
		<div className='w-full h-full relative'>
			<div className="w-full h-2/6">
				<img src="../bg-desktop-light.jpg" alt="bg-top" />
			</div>
			<div className="w-full h-4/5 bg-skin-main"></div>
			{children}
		</div>
		</>
	)
}