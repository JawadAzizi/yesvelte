<script>
	import { Page, Doc, Preview } from '$components'
	import FormDatePickerColumn from './FormDatePickerColumn.svelte'
	import FormDatePickerDisabled from './FormDatePickerDisabled.svelte'
	import FormDatePickerLabel from './FormDatePickerLabel.svelte'
	import FormDatePickerMessage from './FormDatePickerMessage.svelte'
	import FormDatePickerEvents from './FormDatePickerEvents.svelte'
	import FormDatePickerRequired from './FormDatePickerRequired.svelte'
	import FormDatePickerValidate from './FormDatePickerValidate.svelte'
	import FormDatePickerRange from './FormDatePickerRange.svelte'
	import FormDatePickerSlots from './FormDatePickerSlots.svelte'
	import FormDatePickerOptions from './FormDatePickerOptions.svelte'
</script>

<Page title="FormDatePicker">
	<p slot="description">
		<code>FormDatePicker</code> component supports all props and events of
		<a href="/docs/date-picker">DatePicker</a>
		and also have some additional features like <code>label</code>, <code>hint</code>,
		<code>required</code>,
		<code>cols</code>, etc. to make it easy to use in a form.
	</p>

	<Doc title="Label">
		<Preview src="./FormDatePickerLabel.svelte">
			<FormDatePickerLabel />
		</Preview>
	</Doc>

	<Doc title="Events">
		<Preview src="./FormDatePickerEvents.svelte">
			<FormDatePickerEvents />
		</Preview>
	</Doc>

	<Doc title="Required">
		<Preview src="./FormDatePickerRequired.svelte">
			<FormDatePickerRequired />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./FormDatePickerDisabled.svelte">
			<FormDatePickerDisabled />
		</Preview>
	</Doc>
	<Doc title="Range">
		<Preview src="./FormDatePickerRange.svelte">
			<FormDatePickerRange />
		</Preview>
	</Doc>

	<Doc title="Options">
		<Preview src="./FormDatePickerOptions.svelte">
			<FormDatePickerOptions />
		</Preview>
	</Doc>

	<Doc title="Slots">
		<Preview src="./FormDatePickerSlots.svelte">
			<FormDatePickerSlots />
		</Preview>
	</Doc>

	<Doc title="Hint/Validation Message">
		<Preview src="./FormDatePickerMessage.svelte">
			<FormDatePickerMessage />
		</Preview>
	</Doc>

	<Doc title="Validation Example">
		<Preview src="./FormDatePickerValidate.svelte">
			<FormDatePickerValidate />
		</Preview>
	</Doc>

	<Doc title="Layout">
		<Preview src="./FormDatePickerColumn.svelte">
			<FormDatePickerColumn />
		</Preview>
	</Doc>
</Page>
