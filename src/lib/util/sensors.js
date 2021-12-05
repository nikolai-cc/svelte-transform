// implements utility functions for a sensor object that checks if the pointer is over the margin of a given element

export const getBorderPosition = (node, translation) => {
    let top = node.offsetTop + translation.y;
    let right = node.offsetLeft + translation.x + node.offsetWidth;
    let bottom = node.offsetTop + translation.y + node.offsetHeight;
    let left = node.offsetLeft + translation.x;
    return { top, right, bottom, left };
}

export const checkSensors = (borders, pointer, margin) => {
    let { x, y } = pointer;

    let top = (borders.top - margin < y && y < borders.top + margin);
    let right = (borders.right - margin < x && x < borders.right + margin);
    let bottom = (borders.bottom - margin < y && y < borders.bottom + margin);
    let left = (borders.left - margin < x && x < borders.left + margin);

    return { top, right, bottom, left };
}
