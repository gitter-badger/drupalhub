DrupalHub.config(function($routeProvider) {
  // Configure the route.
  $routeProvider.when('/', {
    templateUrl: 'pages/index.html',
    controller: 'headerCtrl'
  });

  $routeProvider.when('/register-signin', {
    templateUrl: 'pages/login-signup.html',
    controller: 'loginCtrl'
  });

  $routeProvider.when('/recover-password', {
    templateUrl: 'pages/recover-password.html',
    controller: 'recoverCtrl'
  });

  // Question.
  $routeProvider.when('/questions', {
    templateUrl: 'pages/questions.html',
    controller: 'questionCtrl'
  });

  $routeProvider.when('/question/:id', {
    templateUrl: 'pages/question.html',
    controller: 'questionCtrl'
  });

  $routeProvider.when('/add-question', {
    templateUrl: 'pages/add-question.html',
    controller: 'QuestionFormCtrl'
  });

  // Blogs.
  $routeProvider.when('/add-blog', {
    templateUrl: 'pages/add-blog.html',
    controller: 'BlogFormCtrl'
  });

  $routeProvider.when('/blogs', {
    templateUrl: 'pages/blogs.html',
    controller: 'blogCtrl'
  });

  $routeProvider.when('/blog/:id', {
    templateUrl: 'pages/blog.html',
    controller: 'blogCtrl'
  });

  // Events.
  $routeProvider.when('/events', {
    templateUrl: 'pages/events.html',
    controller: 'eventsCtrl'
  });

  $routeProvider.when('/add-event', {
    templateUrl: 'pages/add-event.html',
    controller: 'EventFormCtrl'
  });

  $routeProvider.when('/event/:id', {
    templateUrl: 'pages/event.html',
    controller: 'eventCtrl'
  });

  // Video.
  $routeProvider.when('/videos', {
    templateUrl: 'pages/videos.html',
    controller: 'videosCtrl',
    reloadOnSearch: false
  });

  $routeProvider.when('/video/:id', {
    templateUrl: 'pages/video.html',
    controller: 'videoCtrl'
  });

  $routeProvider.when('/playlist/:id/:delta', {
    templateUrl: 'pages/playlist.html',
    controller: 'PlaylistCtrl'
  });

  // 404 and other stanz.
  $routeProvider.otherwise({
    templateUrl: 'pages/404.html',
    controller: 'pageNotFound'
  });
});

// Implements for flag directive the address for endpoint.
angular.module('flagConfig', []).constant('flagConfig', {
  'server': 'http://localhost/drupalhub/www/api/'
});

