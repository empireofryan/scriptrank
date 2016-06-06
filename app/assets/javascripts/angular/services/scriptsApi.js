angular.module('app.services.api.scripts', [])
.factory('GenreScriptsApi', function ($resource) {
  return $resource('/api/v1/genres/:genre_id/scripts/:script_id.json');
})

.factory('ScriptsApi', function ($resource) {
  return $resource('/api/v1/scripts/:script_id.json', {}, {
    upvote: { method: "PUT", url: '/api/v1/scripts/:script_id/upvote.json'}
  });
  console.log();
});
