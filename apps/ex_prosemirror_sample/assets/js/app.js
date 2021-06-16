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

// ExProsemirror customization
import { blocks } from './ex_prosemirror/blocks';
import { marks } from './ex_prosemirror/marks';
import { plugins } from './ex_prosemirror/plugins';

document.querySelectorAll('.ex-prosemirror').forEach((el) => {
  el.addEventListener('insertPlaceholder', phoenixHook)
});


function phoenixHook(event) {
  if (event.detail.nodeType == 'image') {
    const url = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"

    const callback = (nodes) => {
      return nodes.image.create({src: url})
    }

    this.dispatchEvent(
      new CustomEvent(
        'replacePlaceholder',
        {detail: {id: event.detail.id, callback}}
      )
    );
  }
}

exProsemirror.setBlocks(blocks)
             .setMarks(marks)
             .setPlugins(plugins);
exProsemirror.initAll();
