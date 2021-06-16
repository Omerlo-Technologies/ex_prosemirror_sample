import { blocks as exProsemirrorBlocks } from 'ex_prosemirror/js/prosemirror/blocks';
import { blockTypeItem } from 'prosemirror-menu';

const generateSpanMenu = (schema) => {
  if(schema.nodes.span) {
    return [blockTypeItem(schema.nodes.span, {
      title: 'span',
      label: 'span'
    })];
  }

  return [];
};

const spanBlock = {
  content: "inline*",
  group: "block",
  parseDOM: [{tag: "span"}],
  title: 'my custom span block',
  label: 'custom span',
  toDOM() { return ['span', 0] },
  generateMenuItem: generateSpanMenu
};

export const blocks = {
  ...exProsemirrorBlocks,
  span: spanBlock,
};
