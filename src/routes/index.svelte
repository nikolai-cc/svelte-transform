<script>
	import { onMount } from 'svelte';
	import transform, { draggable, resizable } from '$lib';

	let messages = [
		'give me a transformative experience',
		'drag me',
		'resize me',
		'feel me',
		'transform me'
	];
	let text = messages[0];

	onMount(() => {
		setInterval(() => {
			text = messages[Math.floor(Math.random() * messages.length)];
		}, 2000);
	});

	let sx, sy, ww, wh;
	let x = 16;
	let y = 500;
	let width = 100;
	let height = 100;

	const shadow = (e) => {
		sx = Math.round((e.clientX / ww) * 32 - 16);
		sy = Math.round((e.clientY / wh) * 32 - 16);
	};

	let upd = (e) => {
		x = e.detail.pos.x;
		y = e.detail.pos.y;
		width = e.detail.size.width;
		height = e.detail.size.height;
	};

	let event = 'nothing happened';
</script>

<svelte:window bind:innerWidth={ww} bind:innerHeight={wh} />

<main on:mousemove={shadow} style="--sx: {sx}px; --sy: {sy}px">
	<article
		use:transform
		on:drag:start={() => (event = 'start dragging node')}
		on:drag:delta={(e) => (event = `dragging node to [${e.detail.pos.x}:${e.detail.pos.y}]`)}
		on:drag:end={() => (event = 'end dragging node')}
		on:resize:start={() => (event = 'start resizing node')}
		on:resize:delta={(e) =>
			(event = `resizing node to [${e.detail.size.width}:${e.detail.size.height}]`)}
		on:resize:end={() => (event = 'end resizing node')}
	>
		{text}
	</article>
	<aside
		use:draggable
		on:drag:start={() => (event = 'wait what wat are you doing!?')}
		on:drag:delta={(e) => (event = 'let me go!')}
		on:drag:end={() => (event = '😠')}
	>
		{event}
	</aside>

	<div
		use:transform={{ pos: { x, y }, size: { width, height } }}
		on:resize:delta={upd}
		on:drag:delta={upd}
	/>

	<form>
		<label>
			x:
			<input on:pointerdown|stopPropagation type="range" min={0} max={ww ?? 1000} bind:value={x} />
			{x}
		</label>
		<label>
			y:
			<input on:pointerdown|stopPropagation type="range" min={0} max={wh ?? 1000} bind:value={y} />
			{y}
		</label>
		<label>
			width:
			<input
				on:pointerdown|stopPropagation
				type="range"
				min={0}
				max={ww ?? 1000}
				bind:value={width}
			/>
			{width}
		</label>
		<label>
			height:
			<input
				on:pointerdown|stopPropagation
				type="range"
				min={0}
				max={wh ?? 1000}
				bind:value={height}
			/>
			{height}
		</label>
	</form>
</main>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: bold;
	}

	main,
	article,
	div,
	aside {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	article,
	aside {
		border: 8px dashed black;
		border-radius: 4px;
		box-shadow: var(--sx) var(--sy) 0 rgb(131, 0, 76),
			calc(2 * var(--sx)) calc(2 * var(--sy)) 0 rgb(184, 0, 107);
		background-color: white;
	}

	main {
		width: 100vw;
		height: 100vh;
		background-color: rgb(209, 2, 123);
	}

	article {
		width: 200px;
		height: 200px;
		user-select: none;
		-webkit-user-select: none;
	}

	aside {
		position: fixed;
		top: 16px;
		left: 16px;
		width: 200px;
		height: 50px;
	}

	div {
		position: fixed;
		top: 0;
		left: 0;
		border-radius: 50%;
		border: 1px solid rgb(131, 0, 76);
	}

	div::after {
		display: absolute;
		inset: 0;
		content: '🐵';
	}

	div:hover::after {
		content: '🙉';
	}

	div:active::after {
		content: '🙈';
	}

	form {
		position: fixed;
		bottom: 16px;
		right: 16px;
		min-width: fit-content;
		min-height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
