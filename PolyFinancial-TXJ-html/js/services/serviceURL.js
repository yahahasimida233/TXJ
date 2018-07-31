angular.module("txj").factory("serviceURL", function() {
    return {
        // 登陆
        loginURL: "/admin/admin/a/u/loginIn",

        //登出
        logoutURL: "/admin/admin/a/u/logout/",

        //手机短信验证码
        verificationCodeURL: "/admin/home/a/u/sendcode/",

        //手机号码注册验证
        phoneRegisterURL: "/admin/home/a/u/verify/",

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

        // 银行卡列表
        bankCardListURL: "admin/home/a/u/my/bankcards/"

    };
});
