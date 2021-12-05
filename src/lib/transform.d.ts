declare namespace svelte.JSX {
	interface HTMLAttributes {
		'ondrag:start'?: (e) => void;
		'ondrag:delta'?: (e) => void;
		'ondrag:end'?: (e) => void;
		'onresize:start'?: (e) => void;
		'onresize:delta'?: (e) => void;
		'onresize:end'?: (e) => void;
	}
}