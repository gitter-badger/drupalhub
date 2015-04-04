// Controller that will wrap the entire application.
DrupalHub.controller('headerCtrl', function($scope, DrupalHubRequest) {
  $scope.userName = 'Login/Sign in';
  $scope.userLink = '#register-signin';

  if (DrupalHubRequest.accessToken) {
    var userObject;

    DrupalHubRequest.localRequest('GET', 'me')
      .success(function(data, status) {
        var user = data.data;
        DrupalHubRequest.set('userObject', user);
        $scope.userName = user.label;
      });
  }

  // Alter the access token before the flag directive http request kicks in.
  $scope.$on('flagAccessToken', function(event, data) {
    data.accessToken = DrupalHubRequest.accessToken;
  });
});
