function init() {
    window.initGapi(); // Calls the init function defined on the window
}
angular
    .module('app')
    .controller('youtubeController', youtubeController);

youtubeController.$inject = ['$scope', '$window','$sce','googleService'];

function youtubeController($scope, $window, $sce, googleService) {
    $scope.ytvideoId = "tPFz04LSa2U";

        $window.initGapi = function () {
            $scope.$apply($scope.getChannel);
        };

        $scope.selectYoutubeVideo = function (videoId) {
            $scope.ytvideoId = videoId;
        }

        $scope.getChannel = function () {
            googleService.googleApiClientReady().then(function (data) {
                $scope.channel = data;
            }, function (error) {
                console.log('Failed: ' + error)
            });
        };

        $scope.$watch('ytvideoId', function (newValue, oldValue) {
            if (newValue) {
                $scope.srcUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.videoId);
            }
        });

};

