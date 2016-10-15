'use strict';

module.exports = {
  normalizeEntityName: function () { /*no-op*/ },

  afterInstall: function () {
    return this.addBowerPackagesToProject([
      { name: 'jquery', target: '~3.1.1'  },
      { name: 'bootstrap', target: '3.3.2' },
      { name: 'lodash', target: '~4.6.1' },
      { name: 'alpaca', target: '1.5.22' }
    ]);
  }
};
