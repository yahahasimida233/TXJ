var app = angular.module("txj", ["ngAnimate", "ui.router","ui.bootstrap","oc.lazyLoad"]);

//懒加载
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", "$ocLazyLoadProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider, $ocLazyLoadProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    $stateProvider
    // 登陆页面
        .state('index',{
            url:"/home",
            templateUrl: 'view/html/home.html',
            controller: 'homeCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/homeCtrl.js",
                            "./css/modules/home.css"
                        ]);
                    }
                ]
            }

        })

        // 后台页面
        .state('backStage',{
            url:"/backStage",
            templateUrl: 'view/html/backStage.html',
            controller: 'backStageCtrl',
            controllerAs:'vm'

        })


});