angular
    .module('app')
    .directive('youtube', youtube);

youtube.$inject = [];

function youtube() {
    return {
        restrict: "EA",
        scope: {
            videoId: "@videoId",
            width: "@width",
            height: "@height"
        },
        template: '<iframe width="854px" height="480" src="{{srcUrl}}" frameborder="0" allowfullscreen></iframe>',
        replace: true,
        controller: function ($scope, $sce) {
            $scope.srcUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.videoId);
        }
    }
};