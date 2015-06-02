angular.module( 'ngMyApp.welcome', [
  'ui.router',
  'ui.bootstrap'
]);

.config(function config( $stateProvider ) {

  $stateProvider.state( 'welcome', {
    url: '/',
    views: {
      "main": {
        controller: 'WelcomeCtrl',
        templateUrl: 'welcome/welcome.tpl.html'
      }
    },
    data:{ pageTitle: 'Even in the future things are broken' }
  });

})

.controller( 'WelcomeCtrl', function WelcomeCtrl( $scope ) {

  $scope.welcomeItems = [
    "Curly Howard",
    "Larry Fine",
    "Moe Howard"
  ];

});
