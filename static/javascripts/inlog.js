(function () {
  'use strict';

  angular
    .module('inlog', [
      'inlog.routes',
      'inlog.authentication',
      'inlog.config'
    ]);

  angular
    .module('inlog.routes', ['ngRoute']);


  angular
    .module('inlog.config', []);


  angular
    .module('inlog')
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
