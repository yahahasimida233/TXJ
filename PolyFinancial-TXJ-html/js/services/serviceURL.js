angular.module("txj").factory("serviceURL", function() {
    return {
        // 登陆
        loginURL: "/admin/home/a/u/front/login/",

        //找回密码
        getbackPURL:"/admin/home/a/u/my/forget",

        //登出
        logoutURL: "/admin/admin/a/u/logout/",

        //手机短信验证码发送
        verificationCodeURL: "/admin/home/a/u/sendcode/",

        // 验证注册验证码是否有效
        codeConfirmURL: "/admin/home/a/u/verify/",

        // 提交注册信息
        registerURL: "/admin/home/a/u/register",

        //图片（伪）验证码
        imgCodeURL: "/admin/home/a/u/pverify/",

        //图片上传
        imgUploadURL: "/admin/admin/a/u/picture/",

        //产品列表
        productListURL: "/admin/home/a/u/productlist/",

        // 产品详情
        productURL: "/admin/home/a/u/productDetatil/",
        
        //个人信息
        personInfoURL: "/admin/home/a/u/my/info/",

        //支付
        payURL: "admin/home/a/u/pay/",

        // 我的页面-获取消息列表
        messageURL:"/admin/home/a/u/my/articles",

        // 银行卡列表
        bankCardListURL: "admin/home/a/u/my/bankcards/"





        // 理财
    };
});
