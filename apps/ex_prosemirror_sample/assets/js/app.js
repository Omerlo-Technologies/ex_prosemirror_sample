// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

import exProsemirror from 'ex_prosemirror';

document.querySelectorAll('.ex-prosemirror').forEach((el) => {
  el.addEventListener('insertPlaceholder', phoenixHook)
});


function phoenixHook(event) {
  console.log('OPEN MODAL');

  // choisie notre image
  this.dispatchEvent(
    new CustomEvent(
      'replacePlaceholder',
      {detail: {id: event.detail.id, tr: event.detail.tr, data: {url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"}}}
    )
  );
}


const custom_image_node = {
  inline: true,
  attrs: {
    src: {},
    alt: {default: null},
    title: {default: null}
  },
  group: "inline",
  draggable: true,
  parseDOM: [{tag: "img[src]", getAttrs(dom) {
    return {
      src: dom.getAttribute("src"),
      title: dom.getAttribute("title"),
      alt: "custom component"
    }
  }}],
  toDOM(node) { let {src, alt, title} = node.attrs; return ["img", {src, alt, title}] }
}

const spanBlock = {
  content: "inline*",
  group: "block",
  parseDOM: [{tag: "span"}],
  title: 'my custom span block',
  label: 'custom span',
  toDOM() { return ['span', 0] }
}

const spanMark = {
  inline: true,
  group: "inline",
  parseDOM: [{tag: "span"}],
  title: 'My custom span',
  icon: {
    width: 896, height: 1024,
    path: "M608 192l-96 96 224 224-224 224 96 96 288-320-288-320zM288 192l-288 320 288 320 96-96-224-224 224-224-96-96z"
  },
  toDOM() { return ['span', 0] }
}


exProsemirror.setCustomBlocks({span: spanBlock});
exProsemirror.setCustomMarks({span: spanMark});
exProsemirror.initAll();
