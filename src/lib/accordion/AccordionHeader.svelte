<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte'
	import { El } from '../el'
	import type { AccordionContext, AccordionsContext, AccordionHeaderProps } from './Accordion.types'

	import { get_current_component } from 'svelte/internal'
	const components = [
		{ component: get_current_component(), except: ['click'] },
		...($$props.components ?? []),
	]

	const dispatch = createEventDispatcher()

	type $$Props = AccordionHeaderProps

	export let componentName: $$Props['componentName'] = 'accordion-header'

	const parentCtx = getContext<AccordionsContext>('ACCORDIONS')
	const ctx = getContext<AccordionContext>('ACCORDION')

	let props: AccordionHeaderProps = {}
	let cssProps: AccordionHeaderProps = {}
	$: {
		props = {
			componentName,
		}
		cssProps = {
			collapsed: !$ctx.open,
		}
	}

	$: show = $ctx.open

	const onClick = () => {
		dispatch('click')
		if ($parentCtx.persistent) {
			$parentCtx.children.forEach((childCtx) => {
				childCtx.set({ open: false })
			})
		}
		$ctx.open = !$ctx.open
	}
</script>

<El {components} {...$$restProps} {...props} {show}>
	<El tag="button" componentName={componentName + '-button'} on:click={onClick} {cssProps}>
		<slot />
	</El>
</El>
