/**
* NavbarController
* @namespace inlog.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('inlog.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    vm.isAdmin = function () {
      return Authentication.isAuthenticatedAsAdmin();
    };
    /**
    * @name logout
    * @desc Log the user out
    * @memberOf inlog.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();