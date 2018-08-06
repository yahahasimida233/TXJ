angular.module("txj").factory("serviceURL", function() {
    return {

        // 登陆
        loginURL: "/admin/a/u/login/",

        //登出
        logoutURL: "/admin/a/u/logout/",

        //注册用手机短信验证码发送
        verificationCodeURL: "/home/a/u/sendcode/",

        // 验证注册验证码是否有效
        codeConfirmURL: "/home/a/u/verify/",

        //更换手机号
        newPhoneNumURL: "/home/a/u/my/info/newnum/",

        //图片（伪）验证码
        imgCodeURL: "/home/a/u/pverify/",

        //图片上传
        imgUploadURL: "/admin/a/u/picture",

        // 用户管理

        userListURL:"/admin/a/u/user/search/",
        userDetailedURL:"/admin/a/u/user/details/",
        userFrozenURL:"/admin/a/u/user/frozen/",
        userTradeURL:"/admin/a/u/user/trade/",
        userContractListURL:"/admin/a/u/user/contract/",
        userContractURL:"/admin/a/u/user/contract/",

        // 债权管理
        debtURL:"/admin/a/u/debt/search/",
        debtNewURL:"/admin/a/u/debt/",
        debtEditURL:"/admin/a/u/debt/",
        debtDeleteURL:"/admin/a/u/debt/",
        matchingURL:"/admin/a/u/debt/matcher/",
        matchOverURL:"/admin/a/u/debt/matcher/",


        // 产品管理
        productURL:"/admin/a/u/product/search/",
        productDetailURL:"/admin/a/u/product/updateBy/",
        productEditURL:"/admin/a/u/product/updater/",
        productNewURL:"/admin/a/u/product/creater/",
        productDeleteURL:"/admin/a/u/product/",
        porductGroundingURL:"/admin/a/u/product/state/",

        // banner管理
        bannerURL:"/admin/a/u/banner/pictures/keywords/",
        bannerDetailedURL:"/admin/a/u/banner/pictures/",
        bannerEditURL:"/admin/a/u/banner/pictures/",
        bannerNewURL:"/admin/a/u/banner/",
        bannerDeleteURL:"/admin/a/u/banner/pictures/",
        bannerGroundingURL:"/admin/a/u/banner/pictureshelf/",

        // 鼎力推荐
        recommendURl:"/admin/a/u/recommend/pictures/keywords/",
        recommendDetailedURL:"/admin/a/u/recommend/pictures/",
        recommendEditURL:"/admin/a/u/recommend/pictures/",
        recommendNewURL:"/admin/a/u/recommend/",
        recommendDeleteURL:"/admin/a/u/recommend/pictures/",
        recommendGroundingURL:"/admin/a/u/recommend/pictureshelf/",

        // 意见管理
        feedbackURl:"/admin/a/u/opinion/keywords/",
        feedbackDetailedURl:"/admin/a/u/opinion/",
        feedbackDeleteURl:"/admin/a/u/opinion/",
        feedbackReplyURl:"/admin/a/u/opinion/",

        // 消息管理
        messageURl:"/admin/a/u/article/keywords/",
        messageDetailedURL:"/admin/a/u/article/",
        messageEditURL:"/admin/a/u/article/",
        messageNewURL:"/admin/a/u/article/",
        messageDeleteURL:"/admin/a/u/article/",
        messageCancelURL:"/admin/a/u/article/state/",



        // 后台管理
        changePwURL: "/admin/a/u/account/password/",  //更改密码
        // 账号管理

        sAccountURL: "/admin/a/u/account/search/",    //搜索帐号
        dAccountURL: "/admin/a/u/account/",           //删除帐号
        aAccountURL: "/admin/a/u/account/",           //新增帐号
        gAccountURL: "/admin/a/u/account/",           //编辑帐号页面获取帐号信息
        wAccountURL: "/admin/a/u/account/",           //编辑帐号


        // 模块管理
        sModuleURL: "/admin/a/u/module/search/",      //搜索模块
        ModuleURL: "/admin/a/u/module/",             //模块地址
        // 角色管理
        sRoleURL: "/admin/a/u/role/search/",          //角色搜索
        roleURL: "/admin/a/u/role/"                  //角色地址
    };
});
