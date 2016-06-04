angular.module('app.services.api.genres', [])
.factory('GenresApi', function ($resource) {
  return $resource('/api/v1/genres/:genre_id.json');
});
