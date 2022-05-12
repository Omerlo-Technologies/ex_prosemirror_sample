import { Dropdown, menuBar } from 'prosemirror-menu';
// import { generateMarks } from 'ex_prosemirror/js/prosemirror/menu';
import { blocks } from './blocks';
import { marks } from './marks';

export const generateTextStyleMenu = (schema) => {
  const textStyle = [
    ...blocks.paragraph.generateMenuItem(schema),
    ...blocks.heading.generateMenuItem(schema),
    ...blocks.span.generateMenuItem(schema)
  ];

  return [new Dropdown(textStyle, {label: 'Text Style'})];
};

function generateMarks(schema) {
  return [
    marks.em.generateMenuItem(schema),
    marks.strong.generateMenuItem(schema),
    marks.underline.generateMenuItem(schema),
    marks.strikethrough.generateMenuItem(schema),
    marks.span_mark.generateMenuItem(schema)
  ];
}

export const generateMenu = ({ schema  }) => {
  const items = [
    ...generateMarks(schema),
    // generateMarks(schema),
    generateTextStyleMenu(schema),
    marks.color.generateMenuItem(schema),
    marks.font_family.generateMenuItem(schema),
    blocks.image.generateMenuItem(schema),
    blocks.html.generateMenuItem(schema)
  ];

  return menuBar({content: items});
}
