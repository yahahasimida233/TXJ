var app = angular.module("txj", ["ngAnimate", "ui.router", "oc.lazyLoad"]);

// //懒加载
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
    
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login',{
            url:"/login",
            templateUrl: 'view/html/login.html',
            controller: 'loginCtrl',
            controllerAs:'vm'

        })
        .state('backStage',{
            url:"/backStage",
            templateUrl: 'view/html/backStage.html',
            controller: 'backStageCtrl',
            controllerAs:'vm'

        })
        .state('backStage.user',{
            url:"/user",
            templateUrl: 'view/html/user.html',
            controller: 'userCtrl',
            controllerAs:'vm'

        })
        .state('backStage.userDetailed',{
            url:"/userDetailed",
            templateUrl: 'view/html/userDetailed.html',
            controller: 'userDetailedCtrl',
            controllerAs:'vm'

        })
        .state('backStage.debt',{
            url:"/debt",
            templateUrl: 'view/html/debt.html',
            controller: 'debtCtrl',
            controllerAs:'vm'

        })
        .state('backStage.debtEdit',{
            url:"/debtEdit",
            templateUrl: 'view/html/debtEdit.html',
            controller: 'debtEditCtrl',
            controllerAs:'vm'

        })
        .state('backStage.matching',{
            url:"/matching",
            templateUrl: 'view/html/matching.html',
            controller: 'matchingCtrl',
            controllerAs:'vm'

        })

        .state('backStage.product',{
            url:"/product",
            templateUrl: 'view/html/product.html',
            controller: 'productCtrl',
            controllerAs:'vm'

        })
        .state('backStage.productEdit',{
            url:"/productEdit",
            templateUrl: 'view/html/productEdit.html',
            controller: 'productEditCtrl',
            controllerAs:'vm'

        })
        .state('backStage.banner',{
            url:"/banner",
            templateUrl: 'view/html/banner.html',
            controller: 'bannerCtrl',
            controllerAs:'vm'
        })
        .state('backStage.bannerEdit',{
            url:"/bannerEdit",
            templateUrl: 'view/html/bannerEdit.html',
            controller: 'bannerEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.recommend',{
            url:"/recommend",
            templateUrl: 'view/html/recommend.html',
            controller: 'recommendCtrl',
            controllerAs:'vm'
        })
        .state('backStage.recommendEdit',{
            url:"/recommendEdit",
            templateUrl: 'view/html/recommendEdit.html',
            controller: 'recommendEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.message',{
            url:"/message",
            templateUrl: 'view/html/message.html',
            controller: 'messageCtrl',
            controllerAs:'vm'
        })
        .state('backStage.messageEdit',{
            url:"/messageEdit",
            templateUrl: 'view/html/messageEdit.html',
            controller: 'messageEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.messageSee',{
            url:"/messageSee",
            templateUrl: 'view/html/messageSee.html',
            controller: 'messageSeeCtrl',
            controllerAs:'vm'
        })
        .state('backStage.feedback',{
            url:"/feedback",
            templateUrl: 'view/html/feedback.html',
            controller: 'feedbackCtrl',
            controllerAs:'vm'
        })
        .state('backStage.feedbackEdit',{
            url:"/feedbackEdit",
            templateUrl: 'view/html/feedbackEdit.html',
            controller: 'feedbackEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.feedbackSee',{
            url:"/feedbackSee",
            templateUrl: 'view/html/feedbackSee.html',
            controller: 'feedbackSeeCtrl',
            controllerAs:'vm'
        })
        .state('backStage.password',{
            url:"/password",
            templateUrl: 'view/html/password.html',
            controller: 'passwordCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            "./js/ctrl/passwordCtrl.js",
                            "./css/modules/password.css"
                    );}
                ]
            }
        })
        .state('backStage.account',{
            url:"/account",
            templateUrl: 'view/html/account.html',
            controller: 'accountCtrl',
            controllerAs:'vm'
        })
        .state('backStage.accountEdit',{
            url:"/account",
            templateUrl: 'view/html/accountEdit.html',
            controller: 'accountEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.module',{
            url:"/module",
            templateUrl:'view/html/module.html',
            controller:'moduleCtrl',
            controllerAs:'vm'
        })
        .state('backStage.moduleEdit',{
            url:"/moduleEdit",
            templateUrl:'view/html/moduleEdit.html',
            controller:'moduleEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.role',{
            url:"/role",
            templateUrl:'view/html/role.html',
            controller:'roleCtrl',
            controllerAs:'vm'
        })
        .state('backStage.roleEdit',{
            url:"/roleEdit",
            templateUrl:'view/html/roleEdit.html',
            controller:'roleEditCtrl',
            controllerAs:'vm'
        })
});