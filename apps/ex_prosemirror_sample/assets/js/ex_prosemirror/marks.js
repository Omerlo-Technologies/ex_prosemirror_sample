import { marks as exProsemirrorMarks } from 'ex_prosemirror/js/prosemirror/marks';
import { generateMarkItem } from 'ex_prosemirror/js/prosemirror/menu';

const spanMark = {
  inline: true,
  group: "inline",
  parseDOM: [{tag: "span"}],
  title: 'My custom span',
  icon: {
    width: 896, height: 1024,
    path: "M608 192l-96 96 224 224-224 224 96 96 288-320-288-320zM288 192l-288 320 288 320 96-96-224-224 224-224-96-96z"
  },
  toDOM() { return ['span', 0] },
  generateMenuItem: generateMarkItem('span_mark')
}

export const marks = {
  ...exProsemirrorMarks,
  span_mark: spanMark
}
