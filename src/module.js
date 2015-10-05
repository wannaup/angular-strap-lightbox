/**
 * @namespace ngStrapLightbox
 */
angular.module('ngStrapLightbox', [
  'mgcrea.ngStrap.modal',
  'pascalprecht.translate'
]);

// optional dependencies
try {
  angular.module('angular-loading-bar');
  angular.module('ngStrapLightbox').requires.push('angular-loading-bar');
} catch (e) {}

try {
  angular.module('ngTouch');
  angular.module('ngStrapLightbox').requires.push('ngTouch');
} catch (e) {}

try {
  angular.module('videosharing-embed');
  angular.module('ngStrapLightbox').requires.push('videosharing-embed');
} catch (e) {}
