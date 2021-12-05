export const listen = (event, listener, node=document) => {
	node.addEventListener(event, listener)
}

export const unlisten = (event, listener, node=document) => {
	node.removeEventListener(event, listener)
}

export const dispatch = (e, detail, node=document) => {
	node.dispatchEvent(new CustomEvent(e, { detail }))
}