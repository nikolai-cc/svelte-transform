// Svelte action that enables resizing a node from its border or a handle.
import { listen, unlisten, dispatch } from './util/events';
import { getBorderPosition, checkSensors } from './util/sensors';

const resizable = (node, config = {}) => {
    let {
        pos = { x: 0, y: 0 },
        size = { width: node.clientWidth, height: node.clientHeight },
        handle = node,
        margin = 15,
    } = config;

    handle = handle instanceof Node ? handle : document.querySelector(handle);

    let borders = { top: 0, right: 0, left: 0, bottom: 0 }
    let sensor = { top: false, right: false, bottom: false, left: false };
    let origin = { x: 0, y: 0 };

    let move = (e) => {
        borders = getBorderPosition(node, pos);
        sensor = checkSensors(borders, { x: e.clientX, y: e.clientY }, margin);
        node.style.cursor = getCursor(sensor);
    }

    let start = (e) => {
        // continue only if one of the sensor values is true
        if (!Object.values(sensor).some(el => el===true)) return

        origin = { x: e.clientX, y: e.clientY };

        unlisten('pointermove', move, node)
        listen('pointermove', delta)
        listen('pointerup', end)

        dispatch('resize:start', { pos, size }, node);
    }

    let delta = (e) => {
        if (sensor.top) {
            size.height += (origin.y - e.clientY);
            pos.y -= 0.5 * (origin.y - e.clientY)
            origin.y = e.clientY;
        }
        if (sensor.right) {
            size.width += (e.clientX - origin.x);
            pos.x += 0.5 * (e.clientX - origin.x)
            origin.x = e.clientX;
        }
        if (sensor.bottom) {
            size.height += (e.clientY - origin.y);
            pos.y += 0.5 * (e.clientY - origin.y)
            origin.y = e.clientY;
        }
        if (sensor.left) {
            size.width += (origin.x - e.clientX);
            pos.x -= 0.5 * (origin.x - e.clientX)
            origin.x = e.clientX;
        }

        draw();

        dispatch('resize:delta', { pos, size }, node);
    }

    let end = (e) => {
        listen('pointermove', move, node)
        unlisten('pointermove', delta);
        unlisten('pointerup', end);
        dispatch('resize:end', { pos }, node);
    }

    let draw = () => {
        node.style.width = size.width + 'px';
        node.style.height = size.height + 'px';
        node.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }

    listen('pointermove', move, node)
    listen('pointerdown', start, handle)

    draw();

    return {
        update: (config) => {
            pos = config.pos || pos;
            size = config.size || size;

            draw();
        },
        destroy: () => {
            unlisten('pointermove', move, node)
            unlisten('pointerdown', start, node)
        },
    }
}

export default resizable

let getCursor = (sensor) => {
    if ((sensor.top && sensor.left) || (sensor.bottom && sensor.right)) return "nwse-resize"
    if ((sensor.top && sensor.right) || (sensor.bottom && sensor.left)) return "nesw-resize"
    if (sensor.top || sensor.bottom) return "ns-resize"
    if (sensor.left || sensor.right) return "ew-resize"
    return "default"
}