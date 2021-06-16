import { placeholderPlugin} from 'ex_prosemirror/js/prosemirror/plugins/placeholder';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';

import { generateMenu } from './menu';

export const plugins = (schema) => {
  return [placeholderPlugin, keymap(baseKeymap), generateMenu({ schema })]
};
