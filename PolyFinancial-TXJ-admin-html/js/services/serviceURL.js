angular.module("txj").factory("serviceURL", function() {
    return {
        loginURL: "/admin/admin/a/u/loginIn",
        logoutURL: "/carrots-admin-ajax/a/logout",
        userListURL:"/admin/admin/a/u/user/list",
        userSearchURL:"/admin/admin/a/u/user/search",
        userDetailedURL:"/admin/admin/a/u/user/search",
        userFrozenURL:"/admin/admin/a/u/user/search",
        userTradeURL:"/admin/admin/a/u/user/trade",
        userContractListURL:"/admin/admin/a/u/user/contract/list",
        userContractURL:"/admin/admin/a/u/user/contract/details",
        debtURL:"/admin/admin/a/u/debt/list",
        searchURL: "/carrots-admin-ajax/a/article/search",
        offlineURL: "/carrots-admin-ajax/a/u/article/status",
        addURL: "/carrots-admin-ajax/a/article/",
        articleURL: "/carrots-admin-ajax/a/u/article/",
        uploadURL: "/carrots-admin-ajax/a/u/img/task"
    };
});
