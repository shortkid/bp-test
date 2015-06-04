/**
* @ngdoc directive
* @name ngMyApp.directive:Welcome
* @description 
* welcome.tpl.html directive for /welcome/
* 
* @requires
* ui.router ui.bootstrap
*/

angular.module('ngMyApp.welcome', [
  'ui.router',
  'ui.bootstrap'
])

.config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider,   $urlRouterProvider) {

      $stateProvider

        .state('welcome', {

          url : '/welcome',
	  controller : 'WelcomeCtrl',
          templateUrl : 'welcome/welcome.tpl.html'

        })
    }
  ]
)


.controller( 'WelcomeCtrl', function AboutCtrl( $scope ) {

  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }

});
