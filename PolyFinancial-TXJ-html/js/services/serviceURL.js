angular.module("txj").factory("serviceURL", function() {
    return {
        // 登陆
        loginURL: "/admin/home/a/u/login",



        //登出
        logoutURL: "/admin/admin/a/u/logout/",

        //手机短信验证码
        verificationCodeURL: "/admin/home/a/u/sendcode/",

        // 验证  验证码是否有效
        codeConfirmURL: "/admin/home/a/u/verify/",

        // 提交注册信息
        registerURL: "/admin/home/a/u/register",

        //图片（伪）验证码
        imgCodeURL: "/admin/home/a/u/pverify/",

        //图片上传
        imgUploadURL: "/admin/admin/a/u/picture/",


        // 首页


        // 我的页面-获取消息列表
        messageURL:"/admin/home/a/u/my/articles",





        // 理财
    };
});
