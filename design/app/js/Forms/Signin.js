/**
 * Login controller.
 */
DrupalHub.controller('loginCtrl', function($scope, $http, Config, localStorageService, $rootScope) {
  $scope.user = {
    name: '',
    pass: ''
  };

  $scope.showLoginInput = true;

  $scope.user.login = function() {
    $scope.nameError = false;
    $scope.passError = false;
    $scope.showLoginResultsFail = false;
    $scope.showLoginResultsSucess = false;
    $scope.loginResults = '';

    $scope.error = {
      name: '',
      pass: ''
    };

    if ($scope.user.name == '') {
      $scope.nameError = true;
      $scope.error.name = 'You need to provide user name!';
    }

    if ($scope.user.pass == '') {
      $scope.passError = true;
      $scope.error.pass = 'You need to provide a password';
    }

    if ($scope.loginForm.$valid) {
      var response = $http.get(Config.backend + 'login-token',{
        headers: {'Authorization': 'Basic ' + Base64.encode($scope.user.name + ':' + $scope.user.pass)}
      });

      response.error(function(data) {
        if (data.title == 'Bad credentials') {
          $scope.showLoginResultsFail = true;
          $scope.loginResults = 'The credentials you passed are wrong.';
        }
      });

      response.success(function(data) {
        localStorageService.set('access_token', data.access_token);
        $http.get(Config.backend + 'me', {
          headers: {'access_token': data.access_token}
        }).success(function(data) {
          $rootScope.$broadcast('userLoggedIn', data.data);
          $scope.showLoginInput = false;
          $scope.showLoginResultsSucess = true;
          $scope.loginResults = 'Welcome ' + data.data.label + '!';
        });
      });
    }

  }
});
