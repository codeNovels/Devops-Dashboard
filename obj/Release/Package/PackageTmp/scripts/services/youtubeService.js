app.service('googleService', function ($http, $q) {

    var deferred = $q.defer();
    this.googleApiClientReady = function () {
        gapi.client.setApiKey('AIzaSyB8d1xVNkND9S8l_96OjmF3UFuKJVRI8tk');
        gapi.client.load('youtube', 'v3', function () {
            var request = gapi.client.youtube.playlistItems.list({
                part: 'snippet',
                playlistId: 'UUpEYMEafq3FsKCQXNliFY9A',
                maxResults: 10
            });
            request.execute(function (response) {
                deferred.resolve(response.result);
            });
        });
        return deferred.promise;
    };
});