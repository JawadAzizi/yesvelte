<script lang="ts">
	import { FormField, Slider, SliderKnob } from 'yesvelte'

	let minPrice: number = 30
	let maxPrice: number = 70
</script>

<FormField label="Choose Price range">
	<Slider>
		<SliderKnob bind:value={minPrice} />
		<SliderKnob bind:value={maxPrice} />
	</Slider>
</FormField>

<i>Search Products in this range ({'$'}{minPrice} - {'$'}{maxPrice})</i>
