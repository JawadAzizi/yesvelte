import type { Colors, ElProps } from '../el'

export interface SwitchProps extends Partial<ElProps> {
	color?: Colors
	inline?: boolean
	label?: string
	checked?: boolean
	reverse?: boolean
	disabled?: boolean
	description?: string
	type?: string
	name?: string
	_slots?: Record<string, boolean>
}
