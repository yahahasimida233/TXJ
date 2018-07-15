angular.module("txj").factory("serviceURL", function() {
    return {
        // 登陆
        loginURL: "/admin/admin/a/u/loginIn",
        //登出
        logoutURL: "/carrots-admin-ajax/a/logout",

        // 用户管理
        userListURL:"/admin/admin/a/u/user/list",
        userSearchURL:"/admin/admin/a/u/user/search",
        userDetailedURL:"/admin/admin/a/u/user/search",
        userFrozenURL:"/admin/admin/a/u/user/search",
        userTradeURL:"/admin/admin/a/u/user/trade",
        userContractListURL:"/admin/admin/a/u/user/contract/list",
        userContractURL:"/admin/admin/a/u/user/contract/details",

        // 债权管理
        debtURL:"/admin/admin/a/u/debt/list",
        debtNewURL:"/admin/admin/a/u/debt",
        debtDeleteURL:"/admin/admin/a/u/debt",


        searchURL: "/carrots-admin-ajax/a/article/search",
        offlineURL: "/carrots-admin-ajax/a/u/article/status",
        addURL: "/carrots-admin-ajax/a/article/",
        articleURL: "/carrots-admin-ajax/a/u/article/",
        uploadURL: "/carrots-admin-ajax/a/u/img/task",
        // 后台管理
        changePwURL: "/admin/admin/a/u/account/password",  //更改密码
        sAccountURL: "/admin/admin/a/u/account/list",      //搜索帐号
    };
});
