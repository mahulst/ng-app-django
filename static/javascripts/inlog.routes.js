(function () {
  'use strict';

  angular
    .module('inlog.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */

  function config($routeProvider) {
    var requireAuthentication = function () {
        return {
            load: function ($q, $location, Authentication) {
                console.log('Can user access route?');
                var deferred = $q.defer();
                var g_isloggedIn = Authentication.isAuthenticated();
                deferred.resolve();
                if (g_isloggedIn === true) { // fire $routeChangeSuccess
                    console.log('Yes they can!');
                    return deferred.promise;
                } else { // fire $routeChangeError
                    console.log('No they cant!');
                    $location.path('/login');

                    // I don't think this is still necessary:
                    return $q.reject("'/login'");
                }
            }
        };
    };
    $routeProvider.when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html',
      resolve: requireAuthentication()

    }).when('/', {
      controller: 'MainController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/main.html',
      resolve: requireAuthentication()
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).otherwise('/login');
  }
})();