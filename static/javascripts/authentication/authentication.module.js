(function () {
  'use strict';

  angular
    .module('inlog.authentication', [
      'inlog.authentication.controllers',
      'inlog.authentication.services'
    ]);

  angular
    .module('inlog.authentication.controllers', []);

  angular
    .module('inlog.authentication.services', ['ngCookies']);
})();