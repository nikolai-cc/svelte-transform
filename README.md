### ⚠️ Project Status ⚠️

At the current stage this project is not a lot more than a proof-of-concept. In it's current shape there might be some unhandled edge cases. Typescript support is virtually non-existent. I am planning to add more actions in the near future, which might result in a change of API.

---

# Svelte-transform

Opinionated domnode transform actions for svelte.

Currently supports dragging (modifying translate3d) and resizing (modifying width & height). Uses [pointerdown](https://caniuse.com/mdn-api_document_pointerdown_event) events.

[🖥 Demo](https://svtr.vercel.app/)

## Actions

#### Draggable

Reposition an object by dragging it from its content or an optional handle. Uses `translate3d()` to position the object.

#### Resizable

Resize an object by dragging it from one of its sides or an optional handle. Modifies the `width` and `height` property of the object.

#### Transform

Enable all actions.

## Usage

#### Basic usage

Using all transformations

```html
<script>
	import transform from 'svelte-transform';
</script>

<div use:transform>Transform me like one of your French girls.</div>
;
```

Using single transformations

```html
<script>
	import { draggable, resizable } from 'svelte-transform';
</script>

<div use:draggable>Drag me, don't resize me.</div>
<div use:resizable>Resize me, don't drag me.</div>

<div>Leave me alone</div>
```

#### Events

Every action emits three events: `start` `delta` and `end`.

```html
<script>
    import transform from 'svelte-transform';
</script>

<div
    use:transform
    on:drag:start={(e) => console.log('started dragging')}
    on:drag:delta={(e) => console.log('still dragging')}
    on:drag:end={(e) => console.log('ended dragging')}
    on:resize:start={(e) => console.log('started resizing')}
    on:resize:delta={(e) => console.log('still resizing')}
    on:resize:end={(e) => console.log('ended resizing')}
>
    It's such an eventful day today, won't you agree?
</div>;
```

Each event containts a `detail` object of the following form:

```js
detail {
    pos: {
        x: [current x position in px],
        y: [current y position in px],
    },
    size: {
        width: [current width in px],
        height: [current height in px],
    }
}
```

#### Controlled behavior.

You can pass in a config object containing a `pos: { x, y }` and a `size: { width, height }` object.

```html
<script>
    import transform from 'svelte-transform';
    let x, y, width, height
    let updateValues = (e) => {
        x = e.detail.pos.x;
        y = e.detail.pos.y
        width = e.detail.size.width
        height = e.detail.size.height
    }
</script>

<div
    use:transform={{ pos: { x, y }, size: { width, height }}}
    on:resize:delta={updateValues}
    on:drag:delta={updateValues}
>
    Transform me with your knobs and sliders.
</div>


<input type="range" min=0 max=100 bind:value={x} />
<input type="range" min=0 max=100 bind:value={y} />
<input type="range" min=0 max=100 bind:value={width} />
<input type="range" min=0 max=100 bind:value={height} />
```
