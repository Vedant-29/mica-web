<script>
	// A UI screenshot, shown at roughly the size the interface really is on screen.
	//
	// No window chrome is drawn around it: these captures already contain a macOS window
	// (or the menu bar), and framing them a second time reads as a screenshot of a
	// screenshot. `max` is the displayed width in CSS pixels, chosen per image so the
	// controls land near life size rather than being blown up to fill the column.
	let { src, alt, caption, width, height, max = 520 } = $props();
</script>

<figure class="shot" style="--shot-max: {max}px">
	<img {src} {alt} {width} {height} loading="lazy" decoding="async" />
	{#if caption}<figcaption>{caption}</figcaption>{/if}
</figure>
