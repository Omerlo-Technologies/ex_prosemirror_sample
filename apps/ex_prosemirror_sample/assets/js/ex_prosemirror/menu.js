import { Dropdown, menuBar } from 'prosemirror-menu';
import { generateMarks } from 'ex_prosemirror/js/prosemirror/menu';
import { blocks } from './blocks';

export const generateTextStyleMenu = (schema) => {
  const textStyle = [
    ...blocks.p.generateMenuItem(schema),
    ...blocks.heading.generateMenuItem(schema),
    ...blocks.span.generateMenuItem(schema)
  ];

  return [new Dropdown(textStyle, {label: 'Text Style'})];
};

export const generateMenu = ({ schema  }) => {
  const items = [
    generateMarks(schema),
    generateTextStyleMenu(schema),
    blocks.image.generateMenuItem(schema),
    blocks.html.generateMenuItem(schema)
  ];

  return menuBar({content: items});
}
