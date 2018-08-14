// function _config(iScrollServiceProvider) {
//     // Supply a default configuration object, eg:
//     iScrollServiceProvider.configureDefaults({
//         iScroll: {
//             // Passed through to the iScroll library
//             scrollbars: true,
//             fadeScrollbars: true
//         },
//         directive: {
//             // Interpreted by the directive
//             refreshInterval: 500
//         }
//     });
// }

var app = angular.module("txj", ["ngAnimate", "ui.router","ui.bootstrap","oc.lazyLoad",]);
// app.config(_config);


// app.directive('ngScroll', function() {
//     return {
//         replace: false,
//         restrict: 'A',
//         link: function(scope, element, attr){
//             scope.$watch(attr.ngScroll, function(value){
//                 new iScroll(document.querySelector('#wrapper'), {
//                     snap: true,
//                     momentum: true,
//                     hScrollbar: true
//                 });
//             });
//         }
//     };
// });