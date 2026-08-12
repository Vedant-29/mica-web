<script>
	// A screenshot in the same window-chrome frame the hero video uses, so stills and
	// motion read as one set rather than two kinds of thing.
	let { src, alt, caption, width, height } = $props();
</script>

<figure class="media">
	<div class="bar"><i></i><i></i><i></i></div>
	<img {src} {alt} {width} {height} loading="lazy" decoding="async" />
	{#if caption}<figcaption>{caption}</figcaption>{/if}
</figure>
