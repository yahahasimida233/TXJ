angular.module("txj").factory("serviceURL", function() {
    return {

        // 登陆
        loginURL: "/admin/admin/a/u/login/",

        //登出
        logoutURL: "/admin/admin/a/u/logout/",

        //注册用手机短信验证码发送

        verificationCodeURL: "/admin/admin/a/u/sendcode/",

        // 验证注册验证码是否有效
        codeConfirmURL: "/admin/admin/a/u/verify/",

        //更换手机号
        newPhoneNumURL: "/admin/admin/a/u/my/info/newnum",


        //图片（伪）验证码
        imgCodeURL: "/admin/home/a/u/pverify/",

        //图片上传
        imgUploadURL: "/admin/admin/a/u/picture",

        // 用户管理

        userListURL:"/admin/admin/a/u/user/search/",
        userDetailedURL:"/admin/admin/a/u/user/details/",
        userFrozenURL:"/admin/admin/a/u/user/frozen/",
        userTradeURL:"/admin/admin/a/u/user/trade/",
        userContractListURL:"/admin/admin/a/u/user/contract/",
        userContractURL:"/admin/admin/a/u/user/contract/",

        // 债权管理
        debtURL:"/admin/admin/a/u/debt/search/",
        debtNewURL:"/admin/admin/a/u/debt/",
        debtEditURL:"/admin/admin/a/u/debt/",
        debtDeleteURL:"/admin/admin/a/u/debt/",
        matchingURL:"/admin/admin/a/u/debt/matcher/",
        matchOverURL:"/admin/admin/a/u/debt/matcher/",


        // 产品管理
        productURL:"/admin/admin/a/u/product/search/",
        productDetailURL:"/admin/admin/a/u/product/updateBy/",
        productEditURL:"/admin/admin/a/u/product/updater/",
        productNewURL:"/admin/admin/a/u/admin/product/creater/",
        productDeleteURL:"/admin/admin/a/u/product/",
        porductGroundingURL:"/admin/admin/a/u/product/state/",

        // banner管理
        bannerURL:"/admin/admin/a/u/banner/pictures/keywords/",
        bannerDetailedURL:"/admin/admin/a/u/banner/pictures/",
        bannerEditURL:"/admin/admin/a/u/banner/pictures/",
        bannerNewURL:"/admin/admin/a/u/banner/",
        bannerDeleteURL:"/admin/admin/a/u/banner/pictures/",
        bannerGroundingURL:"/admin/admin/a/u/banner/pictureshelf/",

        // 鼎力推荐
        recommendURl:"/admin/admin/a/u/recommend/pictures/keywords/",
        recommendDetailedURL:"/admin/admin/a/u/recommend/pictures/",
        recommendEditURL:"/admin/admin/a/u/recommend/pictures/",
        recommendNewURL:"/admin/admin/a/u/recommend/",
        recommendDeleteURL:"/admin/admin/a/u/recommend/pictures/",
        recommendGroundingURL:"/admin/admin/a/u/recommend/pictureshelf/",

        // 意见管理
        feedbackURl:"/admin/admin/a/u/opinion/keywords/",
        feedbackDetailedURl:"/admin/admin/a/u/opinion/",
        feedbackDeleteURl:"/admin/admin/a/u/opinion/",
        feedbackReplyURl:"/admin/admin/a/u/opinion/",

        // 消息管理
        messageURl:"/admin/admin/a/u/article/keywords/",
        messageDetailedURL:"/admin/admin/a/u/article/",
        messageEditURL:"/admin/admin/a/u/article/",
        messageNewURL:"/admin/admin/a/u/article/",
        messageDeleteURL:"/admin/admin/a/u/article/",
        messageCancelURL:"/admin/admin/a/u/article/state/",



        // 后台管理
        changePwURL: "/admin/admin/a/u/account/password/",  //更改密码
        // 账号管理

        sAccountURL: "/admin/admin/a/u/account/search/",    //搜索帐号
        dAccountURL: "/admin/admin/a/u/account/",           //删除帐号
        aAccountURL: "/admin/admin/a/u/account/",           //新增帐号
        gAccountURL: "/admin/admin/a/u/account/",           //编辑帐号页面获取帐号信息
        wAccountURL: "/admin/admin/a/u/account/",           //编辑帐号


        // 模块管理
        sModuleURL: "/admin/admin/a/u/module/search/",      //搜索模块
        ModuleURL: "/admin/admin/a/u/module/",             //模块地址
        // 角色管理
        sRoleURL: "/admin/admin/a/u/role/search/",          //角色搜索
        roleURL: "/admin/admin/a/u/role/"                  //角色地址
    };
});
