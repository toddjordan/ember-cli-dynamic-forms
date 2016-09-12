'use strict';

module.exports = {
  normalizeEntityName: function () { /*no-op*/ },

  afterInstall: function () {
    return this.addBowerPackagesToProject([
      { name: 'jquery', target: '>=1.11.3' },
      { name: 'alpaca', target: 'ade59b36bebb0f2de04aa34a05c44e23281ea17a' },
      { name: 'handlebars', target: '3.0.3' },
      { name: 'bootstrap', target: '3.3.2' },
      { name: 'lodash', target: '~4.6.1' }
    ]);
  }
};
