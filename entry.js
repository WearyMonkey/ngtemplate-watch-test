import angular from 'angular';
import foo from './foo.html';

angular.module('app', []).run(['$templateCache', function (c) {
  document.write(c.get(foo));
}]);