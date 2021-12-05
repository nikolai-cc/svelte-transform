// The transform action combines all other actions from this package in a single action.
import { listen, unlisten, dispatch } from './util/events';

import draggable from './draggable';
import resizable from './resizable';

const transform = (node, config = {}) => {
    let draggable_action = draggable(node, config);
    let resizable_action = resizable(node, config);

    let update = (e) => {
        draggable_action.update(e.detail);
        resizable_action.update(e.detail);
    }

    listen('drag:delta', update, node);
    listen('resize:delta', update, node);

    return {
        update: (config) => {
            draggable_action.update(config);
            resizable_action.update(config);
        },
        destroy: () => {
            draggable_action.destroy();
            resizable_action.destroy();
        },
    }
}

export { default as draggable } from "./draggable";
export { default as resizable } from "./resizable";
export default transform;