(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['cola'] };
  }

  define('cola', [], vendorModule);
})();
