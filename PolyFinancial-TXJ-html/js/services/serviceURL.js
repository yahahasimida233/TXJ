angular.module("txj").factory("serviceURL", function() {
    return {
        // 登陆
        loginURL: "/home/a/u/front/login/",



        //登出
        logoutURL: "/admin/a/u/logout/",

        //手机短信验证码
        verificationCodeURL: "/home/a/u/sendcode/",

        // 验证  验证码是否有效
        codeConfirmURL: "/home/a/u/verify/",

        // 提交注册信息
        registerURL: "/home/a/u/register",

        //图片（伪）验证码
        imgCodeURL: "/home/a/u/pverify/",

        //图片上传
        imgUploadURL: "/admin/a/u/picture/",

        //产品列表
        productListURL: "/home/a/u/productlist/",

        // 产品详情
        productURL: "/home/a/u/productDetatil/",
        
        //个人信息
        personInfoURL: "/home/a/u/my/info/",

        // 首页


        // 我的页面-获取消息列表
        messageURL:"/home/a/u/my/articles",
        personInfoURL: "/home/a/u/my/info/",

        // 银行卡列表
        bankCardListURL: "/home/a/u/my/bankcards/"





        // 理财
    };
});
