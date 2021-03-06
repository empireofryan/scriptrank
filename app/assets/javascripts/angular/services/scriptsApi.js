angular.module('app.services.api.scripts', [])
.factory('GenreScriptsApi', function ($resource) {
  return $resource('/api/v1/genres/:genre_id/scripts/:script_id.json');
})

.factory('ScriptsApi', function ($resource) {
  return $resource('/api/v1/scripts/:script_id.json', {}, {
    upvote: { method: "PUT", url: '/api/v1/scripts/:script_id/upvote.json'}
  });
})

.factory('ScriptCommentsApi', function ($resource) {
  return $resource('/api/v1/scripts/:script_id/comments/:comment_id.json', {
    script_id: '@script_id',
    comment_id: '@comment_id'
  });
});
