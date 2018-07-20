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
    
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        // 登陆页面
        .state('login',{
            url:"/login",
            templateUrl: 'view/html/login.html',
            controller: 'loginCtrl',
            controllerAs:'vm',


        })

        // 后台页面
        .state('backStage',{
            url:"/backStage",
            templateUrl: 'view/html/backStage.html',
            controller: 'backStageCtrl',
            controllerAs:'vm'

        })

        // 用户管理
        .state('backStage.user',{
            url:"/user",
            templateUrl: 'view/html/business/user.html',
            controller: 'userCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/userCtrl.js",
                            "./css/modules/business/user.css"
                        ]);
                    }
                ]
            }
        })

        // 用户详情
        .state('backStage.userDetailed',{
            url:"/userDetailed?id",
            templateUrl: 'view/html/business/userDetailed.html',
            controller: 'userDetailedCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/userDetailed.js",
                            "./css/modules/business/userDetailed.css"
                        ]);
                    }
                ]
            }

        })

        // 用户管理交易记录查看
        .state('backStage.userTrade',{
            url:"/userTrade?id",
            templateUrl: 'view/html/business/userTrade.html',
            controller: 'userTradeCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/userTradeCtrl.js",
                            "./css/modules/business/userTrade.css"
                        ]);
                    }
                ]
            }

        })

        // 用户管理投资合同列表查看
        .state('backStage.userContract',{
            url:"/userContract?id",
            templateUrl: 'view/html/business/userContract.html',
            controller: 'userContractCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/userContract.js",
                        ]);
                    }
                ]
            }
        })

        // 用户管理投资合同详情查看
        .state('backStage.userContractDetailed',{
            url:"/userContractDetailed?id",
            templateUrl: 'view/html/business/userContractDetailed.html',
            controller: 'userContractDetailedCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/userContractDetailed.js",
                            "./css/modules/business/contractDetailed.css"
                        ]);
                    }
                ]
            }
        })

        // 债权管理
        .state('backStage.debt',{
            url:"/debt",
            templateUrl: 'view/html/business/debt.html',
            controller: 'debtCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/debt.js",
                        ]);
                    }
                ]
            }

        })

        // 债权编辑
        .state('backStage.debtEdit',{
            url:"/debtEdit?id",
            templateUrl: 'view/html/business/debtEdit.html',
            controller: 'debtEditCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/debtEdit.js",
                            "./css/modules/business/debtEdit.css"
                        ]);
                    }
                ]
            }

        })

        // 债权匹配
        .state('backStage.matching',{
            url:"/matching?id",
            templateUrl: 'view/html/business/matching.html',
            controller: 'matchingCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/matching.js",
                            "./css/modules/business/matching.css"
                        ]);
                    }
                ]
            }

        })

        // 产品管理
        .state('backStage.product',{
            url:"/product",
            templateUrl: 'view/html/business/product.html',
            controller: 'productCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/productCtrl.js",
                            "./css/modules/business/product.css"
                        ]);
                    }
                ]
            }

        })

        // 产品编辑
        .state('backStage.productEdit',{
            url:"/productEdit?id",
            templateUrl: 'view/html/business/productEdit.html',
            controller: 'productEditCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/business/productEdit.js",
                            "./css/modules/business/productEdit.css"
                        ]);
                    }
                ]
            }

        })

        // banner图
        .state('backStage.banner',{
            url:"/banner",
            templateUrl: 'view/html/operate/banner.html',
            controller: 'bannerCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/bannerCtrl.js",
                            "./css/modules/operate/banner.css"
                        ]);
                    }
                ]
            }
        })

        // banner图编辑
        .state('backStage.bannerEdit',{
            url:"/bannerEdit?id",
            templateUrl: 'view/html/operate/bannerEdit.html',
            controller: 'bannerEditCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/bannerEdit.js",
                            "./css/modules/operate/bannerEdit.css"
                        ])
                    }
                ]
            }
        })

        // 鼎立推荐
        .state('backStage.recommend',{
            url:"/recommend",
            templateUrl: 'view/html/operate/recommend.html',
            controller: 'recommendCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/recommendCtrl.js",
                            "./css/modules/operate/recommend.css"
                        ]);
                    }
                ]
            }
        })

        // 鼎力推荐编辑
        .state('backStage.recommendEdit',{
            url:"/recommendEdit?id",
            templateUrl: 'view/html/operate/recommendEdit.html',
            controller: 'recommendEditCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/recommendEdit.js",
                            "./css/modules/operate/recommendEdit.css"
                        ])
                    }
                ]
            }
        })

        // 消息管理
        .state('backStage.message',{
            url:"/message",
            templateUrl: 'view/html/operate/message.html',
            controller: 'messageCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/messageCtrl.js",
                            "./css/modules/operate/message.css"
                        ])
                    }
                ]
            }
        })

        // 消息编辑
        .state('backStage.messageEdit',{
            url:"/messageEdit?id",
            templateUrl: 'view/html/operate/messageEdit.html',
            controller: 'messageEditCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/messageEdit.js",
                            "./css/modules/operate/messageEdit.css"
                        ])
                    }
                ]
            }
        })

        // 消息查看
        .state('backStage.messageDetailed',{
            url:"/messageDetailed?id",
            templateUrl: 'view/html/operate/messageSee.html',
            controller: 'messageDetailedCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/messageDetailed.js",
                            "./css/modules/operate/messageDetailed.css"
                        ])
                    }
                ]
            }
        })

        // 意见反馈
        .state('backStage.feedback',{
            url:"/feedback",
            templateUrl: 'view/html/operate/feedback.html',
            controller: 'feedbackCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/feedbackCtrl.js",
                            "./css/modules/operate/feedback.css"
                        ])
                    }
                ]
            }
        })

        // 意见编辑
        .state('backStage.feedbackReply',{
            url:"/feedbackEdit?id",
            templateUrl: 'view/html/operate/feedbackEdit.html',
            controller: 'feedbackReplyCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/feedbackReply.js",
                            "./css/modules/operate/feedbackReply.css"
                        ])
                    }
                ]
            }
        })

        // 意见查看
        .state('backStage.feedbackDetailed',{
            url:"/feedbackDetailed?id",
            templateUrl: 'view/html/operate/feedbackSee.html',
            controller: 'feedbackDetailedCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/operate/feedbackDetailed.js",
                            "./css/modules/operate/feedbackDetailed.css"
                        ])
                    }
                ]
            }
        })

        // 密码管理
        .state('backStage.password',{
            url:"/password",
            templateUrl: 'view/html/backstage/password.html',
            controller: 'passwordCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/backstage/passwordCtrl.js",
                            "./css/modules/backstage/password.css"
                        ]);
                    }
                ]
            }
        })

        // 账户管理
        .state('backStage.account',{
            // params: {role: null },
            url: "/account?adminId&role&username&creater&goPage&size",
            templateUrl: 'view/html/backstage/account.html',
            controller: 'accountCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/backstage/accountCtrl.js"
                        ])
                    }
                ]
            }
        })

        // 账户编辑
        .state('backStage.accountEdit',{
            url:"/accountEdit?id",
            templateUrl: 'view/html/backstage/accountEdit.html',
            controller: 'accountEditCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/backstage/accountEditCtrl.js",
                            "./css/modules/backstage/accountE.css"
                        ])
                    }
                ]
            }
        })

        // 模块管理
        .state('backStage.module',{
            url:"/module",
            templateUrl:'view/html/backstage/module.html',
            controller:'moduleCtrl',
            controllerAs:'vm'
        })

        // 模块编辑
        .state('backStage.moduleEdit',{
            url:"/moduleEdit",
            templateUrl:'view/html/backstage/moduleEdit.html',
            controller:'moduleEditCtrl',
            controllerAs:'vm'
        })

        // 角色管理
        .state('backStage.role',{
            url:"/role",
            templateUrl:'view/html/backstage/role.html',
            controller:'roleCtrl',
            controllerAs:'vm'
        })

        // 角色编辑
        .state('backStage.roleEdit',{
            url:"/roleEdit",
            templateUrl:'view/html/backstage/roleEdit.html',
            controller:'roleEditCtrl',
            controllerAs:'vm'
        })
});