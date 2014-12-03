'use strict';

/**
 * @ngdoc overview
 * @name oauthioChallengeSpeedhackApp
 * @description
 * # oauthioChallengeSpeedhackApp
 *
 * Main module of the application.
 */
angular
  .module('oauthioChallengeSpeedhackApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function() {
  });