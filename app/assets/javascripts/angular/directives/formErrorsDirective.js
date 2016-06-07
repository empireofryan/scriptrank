angular.module('app.directives.formErrors', [])
.directive('formErrors', function () {
    return {
      restict: 'A',
      scope: {
        input: '='
      },
      template: `
        <div ng-messages="input.$error" style="color:maroon" role="alert">
          <div ng-message="required">You did not enter a field</div>
          <div ng-message="minlength">Your field is too short</div>
          <div ng-message="maxlength">Your field is too long</div>
        </div>
      `
    };
});
