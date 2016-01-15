/* globals hljs */

export function initialize(/* application */) {
  hljs.initHighlightingOnLoad();
}

export default {
  name: 'highlight',
  initialize
};
