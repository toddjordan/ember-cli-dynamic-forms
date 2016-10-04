'use strict';

module.exports = {
  normalizeEntityName: function () { /*no-op*/ },

  afterInstall: function () {
    return this.addBowerPackagesToProject([
      { name: 'jquery', target: '~2.1.0' },
      { name: 'alpaca', target: '~1.5.22' },
      { name: 'handlebars', target: '3.0.3' },
      { name: 'bootstrap', target: '3.3.2' },
      { name: 'lodash', target: '~4.6.1' }
    ]);
  }
};
