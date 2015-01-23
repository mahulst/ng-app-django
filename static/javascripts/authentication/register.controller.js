/**
* Register controller
* @namespace inlog.authentication.controllers
*/
(function () {
  'use strict';

  angular
    .module('inlog.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace RegisterController
  */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;


    /**
    * @name register
    * @desc Register a new user
    * @memberOf inlog.authentication.controllers.RegisterController
    */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username, vm.userType);
    }


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf inlog.authentication.controllers.RegisterController
    */
    function activate() {
      // If the user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }
  }
})();