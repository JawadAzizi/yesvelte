<script lang="ts">
	import type { SpinnerProps } from './Spinner.types'
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'

	type $$Props = SpinnerProps

	export let componentName: $$Props['componentName'] = 'spinner'
	export let color: $$Props['color'] = undefined
	export let size: $$Props['size'] = undefined
	export let role: $$Props['role'] = 'status'
	export let animate: $$Props['animate'] = 'border'

	let props: $$Props = {}
	let cssProps: $$Props = {}
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	$: {
		cssProps = {
			size,
			color,
			animate,
		}

		props = {
			componentName,
			role,
		}
	}
</script>

<El {components} tag="span" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
