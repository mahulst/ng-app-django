/**
* LoginController
* @namespace inlog.authentication.controllers
*/
(function () {
  'use static';

  angular
    .module('inlog.authentication.controllers')
    .controller('MainController', MainController);

  MainController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace LoginController
  */
  function MainController($location, $scope) {

  }
})();