<script lang="ts">
	import { classname } from '../internal'
	import { createEventDispatcher } from 'svelte'
	import type { ModalProps } from './Modal.types'
	import { El } from '../el'
	import { Button } from '../button'
	import ModalTitle from './ModalTitle.svelte'
	import ModalHeader from './ModalHeader.svelte'
	import { get_current_component, onMount } from 'svelte/internal'
	import type { FocusTrap } from 'focus-trap'

	const dispatch = createEventDispatcher()
	const components = [
		{ component: get_current_component(), except: ['close'] },
		...($$props.components ?? []),
	]

	type $$Props = ModalProps

	export let autoClose: $$Props['autoClose'] = undefined
	export let backdrop: $$Props['backdrop'] = true
	export let componentName: $$Props['componentName'] = 'modal'
	export let absolute: $$Props['absolute'] = undefined
	export let dismissible: $$Props['dismissible'] = undefined
	export let show: $$Props['show'] = undefined
	export let placement: $$Props['placement'] = 'top'
	export let scrollable: $$Props['scrollable'] = undefined
	export let size: $$Props['size'] = 'md'
	export let title: $$Props['title'] = undefined

	export const close = () => {
		show = false
		dispatch('close')
	}

	const handleEscapeKey = (event: any) => {
		if (show && element && autoClose && event.key === 'Escape' && !event.defaultPrevented) {
			close()
		}
	}

	const handleOutsideClick = (event: any) => {
		if (show && element && autoClose && !event.defaultPrevented) {
			close()
		}
	}

	$: if (typeof window !== 'undefined' && !absolute) {
		if (show) {
			document.body.classList.add(classname('body-modal-show') ?? '')
		} else {
			if (document.body.classList.contains(classname('body-modal-show') ?? '')) {
				document.body.classList.remove(classname('body-modal-show') ?? '')
			}
		}
	}

	let element: HTMLDivElement
	let instance: FocusTrap

	const onClickContent = (e: any) => {
		e.stopPropagation()
	}

	onMount(() => {
		import('focus-trap').then((focusTrap) => {
			instance = focusTrap.createFocusTrap(element, {
				escapeDeactivates: false,
			})
		})

		if (document && autoClose) {
			document.addEventListener('keyup', handleEscapeKey, true)

			return () => {
				document.removeEventListener('keyup', handleEscapeKey, true)
			}
		}
	})

	$: if (instance && backdrop) {
		setTimeout(() => {
			try {
				if (show) {
					instance.activate()
				} else {
					instance.deactivate()
				}
			} catch (err) {
				console.log('erro: ', err)
				//
			}
		}, 500)
	}

	let cssProps: $$Props = {}
	$: cssProps = {
		placement,
		scrollable,
		size,
		absolute,
	}
</script>

<El
	bind:element
	{...$$restProps}
	{componentName}
	{cssProps}
	{components}
	on:click={handleOutsideClick}
	tabindex="0"
	role="dialog"
	{show}>
	<El componentName="{componentName}-container">
		<El componentName="{componentName}-content" on:click={onClickContent}>
			{#if title}
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
				</ModalHeader>
			{/if}
			<slot />
			<slot name="close">
				{#if dismissible}
					<Button
						aria-label="X"
						type="button"
						componentName="{componentName}-close"
						on:click={() => close()} />
				{/if}
			</slot>
		</El>
	</El>
</El>
{#if backdrop}
	<El componentName="{componentName}-backdrop" cssProps={{ absolute }} {show} />
{/if}
