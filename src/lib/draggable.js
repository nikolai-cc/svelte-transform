// Svelte action that enables dragging around a node from its content or a handle.
import { listen, unlisten, dispatch } from './util/events';
import { getBorderPosition, checkSensors } from './util/sensors';

const draggable = (node, config = {}) => {
    let {
        pos = { x: 0, y: 0 },
        handle = node,
        margin = 15
    } = config;

    handle = handle instanceof Node ? handle : document.querySelector(handle);
    let origin = pos;

    let start = (e) => {
        let borders = getBorderPosition(node, pos);
        let sensor = checkSensors(borders, {x: e.clientX, y: e.clientY}, margin);
        if (Object.values(sensor).some(el => el===true)) return
        e.preventDefault();
        e.stopPropagation();
        node.setPointerCapture(e.pointerId);

        origin = { x: e.clientX, y: e.clientY };
        
        listen('pointermove', delta);
        listen('pointerup', end);
        dispatch('drag:start', { pos }, node);
    }

    let delta = (e) => {
        e.preventDefault();
        e.stopPropagation();
        pos.x += e.clientX - origin.x;
        pos.y += e.clientY - origin.y;

        node.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`

        origin = { x: e.clientX, y: e.clientY, };

        dispatch('drag:delta', { pos }, node);
    }

    let end = (e) => {
        e.preventDefault();
        e.stopPropagation();
        node.releasePointerCapture(e.pointerId);
        unlisten('pointermove', delta);
        unlisten('pointerup', end);
        dispatch('drag:end', { pos }, node);
    }

    let draw = () => {
        node.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    }

    listen('pointerdown', start, handle);
    draw();

    return {
        update: (config) => {
            pos = config.pos || pos;
            draw();
        },
        destroy: () => {
            unlisten('pointerdown', start, handle);
        },
    }
}

export default draggable