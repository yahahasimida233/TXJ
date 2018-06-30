var app = angular.module("txj",["ngAnimate","ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login',{
            url:"/login",
            templateUrl: 'html/login.html',
            controller: 'loginCtrl',
            controllerAs:'vm'

        })
        .state('matching',{
            url:"/matching",
            templateUrl: 'html/matching.html',
            controller: 'matchingCtrl',
            controllerAs:'vm'

        })
        .state('buy',{
            url:"/buy",
            templateUrl: 'html/buy.html',
            controller: 'buyCtrl',
            controllerAs:'vm'

        })
        .state('backStage',{
            url:"/backStage",
            templateUrl: 'html/backStage.html',
            controller: 'backStageCtrl',
            controllerAs:'vm'

        })
        .state('fresh',{
            url:"/fresh",
            templateUrl: 'html/fresh.html',
            controller: 'freshCtrl',
            controllerAs:'vm'

        })
        .state('main',{
            url:"/main",
            templateUrl: 'html/main.html',
            controller: 'mainCtrl',
            controllerAs:'vm'

        })
        .state('main.content',{
            url:"/content",
            templateUrl:'html/content.html',
            controller:'contentCtrl',
            controllerAs:'vm'
        })
});