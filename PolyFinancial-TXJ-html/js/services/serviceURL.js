angular.module("txj").factory("serviceURL", function() {
    return {
        // 登陆
        loginURL: "/admin/home/a/u/front/login/",

        //找回密码
        getbackPURL:"/admin/home/a/u/my/forget",

        //登出
        logoutURL: "/admin/a/u/logout/",

        // 普通手机短信验证码发送
        getCodeURL: "/admin/home/a/u/forget/sendcode/",

        //注册用手机短信验证码发送
        verificationCodeURL: "/admin/home/a/u/sendcode/",

        // 验证注册验证码是否有效
        codeConfirmURL: "/admin/home/a/u/verify/",

        // 提交注册信息
        registerURL: "/admin/home/a/u/register",

        //图片（伪）验证码
        imgCodeURL: "/admin/home/a/u/pverify/",

        //图片上传
        imgUploadURL: "/admin/a/u/picture/",

        //获取用户个人信息
        userInfoURL: "/home/a/u/my/info/",

        // 实名认证第一步，提交用户名身份证号码，还有银行卡号码
        realNameStep1URL: "/home/a/u/my/info/realname/",


        // 实名认证收取验证码
        RGetCodeURL: "/home/a/u/my/info/verifypage/",

        // 实名认证验证 验证码
        RCheckCodeURL: "/home/a/u/my/info/code",

        //提交更换手机的信息
        newNumberURL: "/home/a/u/my/info/newnum",

        //产品列表
        productListURL: "/admin/home/a/u/productlist/",

        // 产品详情
        productURL: "/admin/home/a/u/productDetatil/",
        
        //个人信息
        personInfoURL: "/admin/home/a/u/my/info/",

        //支付
        payURL: "/admin/home/a/u/pay/",

        // 我的页面-获取消息列表

        messageURL:"/home/a/u/my/articles",

        // 银行卡列表
        bankCardListURL: "/admin/home/a/u/my/bankcards/",

        // 银行卡解除绑定
        unCardURL: "/admin/home/a/u/my/bankcards/",

        // 设置-修改密码
        settingCPURL: "/home/a/u/my/setup/changepwd/",


        // 意见反馈接口
        feedBackURL: "/home/a/u/my/suggestion"

        // 理财
    };
});
