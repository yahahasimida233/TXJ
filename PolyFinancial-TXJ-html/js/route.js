

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

    // 登录页面
        .state('login',{
            url:"/login",
            templateUrl: 'view/html/registerLogin/login.html',
            controller: 'loginCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/registerLogin/login.js",
                            "./css/modules/registerLogin/login.css"
                        ]);
                    }
                ]
            }
        })

        // 忘记密码
        .state('forget',{
            url:"/forget",
            templateUrl: 'view/html/registerLogin/forget.html',
            controller: 'forgetCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/registerLogin/forget.js",
                            "./css/modules/registerLogin/forget.css"
                        ]);
                    }
                ]
            }
        })

        // 注册账号
        .state('register',{
            url:"/register",
            templateUrl: 'view/html/registerLogin/register.html',
            controller: 'registerCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/registerLogin/register.js",
                            "./css/modules/registerLogin/register.css"
                        ]);
                    }
                ]
            }
        })

        // 首页
        .state('home',{
            url:"/home",
            templateUrl: 'view/html/home.html',
            controller: 'homeCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/home.js",

                            "./css/modules/home.css"
                        ]);
                    }
                ]
            }
        })

        // 理财列表
        .state('home.product',{
            url: "/productList",
            templateUrl: 'view/html/product/productList.html',
            controller: 'productListCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/product/productListCtrl.js",
                            "./css/modules/product/productList.css",
                        ]);
                    }
                ]
            }
        })

        // 理财产品
        .state('product', {
            url: "/product?productId",
            templateUrl: 'view/html/product/product.html',
            controller: 'productCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/product/productCtrl.js",
                            "./css/modules/product/product.css",
                            // "./minirefresh/minirefresh.min.css",
                            // "./minirefresh/minirefresh.min.js"
                        ]);
                    }
                ]
            }
        })

        // 购买产品
        .state('buy', {
            url: "/buy?startAmount&minAmount&productId&rate&time",
            templateUrl: 'view/html/product/buy.html',
            controller: 'buyCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/product/buyCtrl.js",
                            "./css/modules/product/buy.css",
                        ]);
                    }
                ]
            }
        })

        // 支付页面
        .state('pay', {
            url: "/pay?money&cardNum&bank&productId&start&min&time&rate&cardId",
            templateUrl: 'view/html/product/pay.html',
            controller: 'payCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/product/payCtrl.js",
                            "./css/modules/product/pay.css",
                        ]);
                    }
                ]
            }
        })

        // 投资合同
        .state('contract', {
            url: "/contract",
            templateUrl: 'view/html/product/contract.html',
            controller: 'contractCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/product/contractCtrl.js",
                            "./css/modules/product/contract.css",
                        ]);
                    }
                ]
            }
        })

        // 我的页面
        .state('home.mine',{
            url:"/mine",
            templateUrl: 'view/html/mine/mine.html',
            controller: 'mineCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/mine.js",

                            "./css/modules/mine/mine.css"
                        ]);
                    }
                ]
            }
        })

        // 用户信息页面
        .state('home.userInfo',{
            url:"/userInfo",
            templateUrl: 'view/html/mine/userInfo.html',
            controller: 'userInfoCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/userInfo.js",

                            "./css/modules/mine/userInfo.css"
                        ]);
                    }
                ]
            }
        })

        // 实名页面
        .state('home.realName',{
            url:"/realName",
            templateUrl: 'view/html/mine/realName.html',
            controller: 'realNameCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/realName.js",

                            "./css/modules/mine/realName.css"
                        ]);
                    }
                ]
            }
        })

        // 实名页步骤2
        .state('home.RNStep2',{
            url:"/RNStep2",
            templateUrl: 'view/html/mine/RNStep2.html',
            controller: 'RNStep2Ctrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/RNStep2.js",

                            "./css/modules/mine/realName.css"
                        ]);
                    }
                ]
            }
        })


        // 实名页步骤3
        .state('home.RNStep3',{
            url:"/RNStep3",
            templateUrl: 'view/html/mine/RNStep3.html',
            controller: 'RNStep3Ctrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/RNStep3.js",

                            "./css/modules/mine/realName.css"
                        ]);
                    }
                ]
            }
        })

        // 更换绑定手机号码
        .state('home.changePhone',{
            url:"/changePhone",
            templateUrl: 'view/html/mine/changePhone.html',
            controller: 'changePhoneCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/changePhone.js",

                            "./css/modules/mine/changePhone.css"
                        ]);
                    }
                ]
            }
        })


        // 更换绑定手机号码步骤2
        .state('home.changePhoneStep2',{
            url:"/changePhoneStep2",
            templateUrl: 'view/html/mine/changePhoneStpe2.html',
            controller: 'changePhoneStep2Ctrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/changePhoneStpe2.js",
                            "./css/modules/mine/changePhone.css"
                        ]);
                    }
                ]
            }
        })

        // 设置页面
        .state('home.setting',{
            url:"/setting",
            templateUrl: 'view/html/mine/setting.html',
            controller: 'settingCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/setting.js",

                            "./css/modules/mine/setting.css"
                        ]);
                    }
                ]
            }
        })

        // 修改密码
        .state('home.changePassword',{
            url:"/changePassword",
            templateUrl: 'view/html/mine/changPassword.html',
            controller: 'changePaCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/changePa.js",

                            "./css/modules/mine/changePa.css"
                        ]);
                    }
                ]
            }
        })

        // 交易密码
        // .state('home.changeTradePa',{
        //     url:"/changeTradePa",
        //     templateUrl: 'view/html/mine/changeTradePa.html',
        //     controller: 'changeTradePaCtrl',
        //     controllerAs:'vm',
        //     resolve: {
        //         loadMyFile: [
        //             "$ocLazyLoad",
        //             function ($ocLazyLoad) {
        //                 return $ocLazyLoad.load([
        //                     "./js/ctrl/mine/changeTradePa.js",
        //
        //                     "./css/modules/mine/changeTradePa.css"
        //                 ]);
        //             }
        //         ]
        //     }
        // })

        // 关于我们
        .state('home.about',{
            url:"/about",
            templateUrl: 'view/html/mine/about.html',
            controller: 'aboutCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/about.js",

                            "./css/modules/mine/about.css"
                        ]);
                    }
                ]
            }
        })

        // 升级!!（想多了）
        .state('home.update',{
            url:"/update",
            templateUrl: 'view/html/mine/update.html',
            controller: 'updateCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/update.js",

                            "./css/modules/mine/update.css"
                        ]);
                    }
                ]
            }
        })

        // 消息中心
        .state('home.message',{
            url:"/message",
            templateUrl: 'view/html/mine/message.html',
            controller: 'messageCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/message.js",
                            "./css/modules/mine/message.css"
                        ]);
                    }
                ]
            }
        })

        // 我的理财
        .state('home.mineTrade',{
            url:"/mineTrade",
            templateUrl: 'view/html/mine/mine-trade.html',
            controller: 'mineTradeCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/mine-trade.js",
                            "./css/modules/mine/mine-trade.css"
                        ]);
                    }
                ]
            }
        })

        // 我的交易记录
        .state('home.minePY',{
            url:"/minePY",
            templateUrl: 'view/html/mine/minePY.html',
            controller: 'minePYCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/minePY.js",
                            "./css/modules/mine/minePY.css"
                        ]);
                    }
                ]
            }
        })

        // 我的银行卡
        .state('home.mineCard',{
            url:"/mineCard",
            templateUrl: 'view/html/mine/mineCard.html',
            controller: 'mineCardCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/mineCard.js",
                            "./css/modules/mine/mineCard.css"
                        ]);
                    }
                ]
            }
        })

        // 解绑银行卡
        .state('home.unCard', {
            url: "/unCard?bankType",
            templateUrl: 'view/html/mine/unCard.html',
            controller: 'unCardCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/unCardCtrl.js",
                            "./css/modules/mine/unCard.css"
                        ]);
                    }
                ]
            }
        })
        
        // 确认解绑银行卡
        .state('home.SureUnCard', {
            url: "/sureUnCard?bankType",
            templateUrl: 'view/html/mine/sureUnCard.html',
            controller: 'sureUnCardCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/sureUnCardCtrl.js",
                            "./css/modules/mine/sureUnCard.css"
                        ]);
                    }
                ]
            }
        })

        // 我的帮助
        .state('home.mineHelp',{
            url:"/mineHelp",
            templateUrl: 'view/html/mine/mineHelp.html',
            controller: 'mineHelpCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/mineHelp.js",
                            "./css/modules/mine/mineHelp.css"
                        ]);
                    }
                ]
            }
        })

        // 我的反馈
        .state('home.feedBack',{
            url:"/feedBack",
            templateUrl: 'view/html/mine/feedBack.html',
            controller: 'feedBackCtrl',
            controllerAs:'vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "./js/ctrl/mine/feedBack.js",
                            "./css/modules/mine/feedBack.css"
                        ]);
                    }
                ]
            }
        })
});

// app.run(function ($rootScope,$state) {
//
//     $rootScope.$on('$stateChangeStart',function(event){
//         var loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
//         if(toState.name=='login' || toState.name =='mine'){return}// 如果是进入登录界面则允许
//         // 如果用户不存在
//         if(loginOrNot === 0){
//             console.log("没有登录")
//             event.preventDefault();// 取消默认跳转行为
//             $state.go('login')
//
//             // $state.go("login",{from:fromState.name,w:'notLogin'});//跳转到登录界面
//         }
//     });
// });