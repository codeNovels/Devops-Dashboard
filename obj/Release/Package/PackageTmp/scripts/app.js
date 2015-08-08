var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/info', {
            templateUrl: '/info/views/home.html',
            //controller: '/info/scripts/viewController.js'
        })

        .when('/info/serverlist', {
            templateUrl: '/info/views/serverlist.html',
            //controller: '/info/scripts/viewController.js'
        })

        .when('/info/deployschedule', {
            templateUrl: '/info/views/deployschedule.html',
            //controller: '/info/scripts/viewController.js'
        })

        .when('/info/teamtasks', {
            templateUrl: '/info/views/teamtasks.html',
            //controller: '/info/scripts/viewController.js'
        })

        .when('/info/videos', {
            templateUrl: '/info/views/videos.html',
            controller: 'youtubeController'
        })

        .otherwise({
            redirectTo: '/info'
        });

    $locationProvider.html5Mode(true);

});







angular
    .module('app')
    .controller('tabController', tabController);

tabController.$inject = ['$scope','$http'];

function tabController($scope, $http) {
    $scope.tab = 1;
    $scope.bodyBackground = 'wow';
    var backgrounds = [ 'd3', 'sc2', 'hearth', 'hearth2', 'overwatch', 'wow'];
    var i = 0;

  

    $scope.navBrandBackground = function () {
        
        if (i >= (backgrounds.length - 1)) {
            i = 0;
        }
        else {
            i = i + 1;
        }
        $scope.bodyBackground = backgrounds[i];
        
    }

    $scope.tabSelector = function(tab, tabId) {
        $scope.bodyBackground = tab;
        $scope.tab = tabId;
    }

    $scope.isSet = function (tabId) {
        return $scope.tab === tabId;
    };
};



//NEED TO EXPORT TO OWN JS FILE
angular
    .module('app')
    .directive('youtube',youtube);

youtube.$inject = [];


function youtube() {
    return {
        restrict: "EA",
        scope: {
            videoId: "@videoId",
            width: "@width",
            height: "@height"
        },
        template: '<iframe width="100%" height="600px" src="{{srcUrl}}" frameborder="0" allowfullscreen></iframe>',
        replace: true,
        controller: function ($scope, $sce) {
            $scope.srcUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.videoId);
            $scope.$watch('videoId', function (newValue, oldValue) {
                if (newValue) {
                    $scope.srcUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.videoId);
                }
            });
        },     
    }
};