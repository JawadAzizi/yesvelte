<script lang="ts">
	import { FormDatePicker } from 'yesvelte'

	let value: Date[] = []
</script>

<FormDatePicker label="Enter Date range" range bind:value />

<i>start: {value[0]}</i>
<br />
<i>finish: {value[1]}</i>
