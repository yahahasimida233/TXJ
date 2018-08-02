angular.module("txj")
    .factory('serviceHTTP', function ($http, serviceURL) {
        return {
            //登陆
            loginHTTP: function (user) {
                return $http({
                    method: "POST",
                    url: serviceURL.loginURL,
                    params: user,
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                })
            },

            //登出
            logoutHTTP: function () {
                return $http({
                    method: "get",
                    url: serviceURL.logoutURL,

                    headers: { 
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //找回密码
            getbackPHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.getbackPURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //手机短信验证码发送
            verificationCodeHTTP: function (phoneNum) {
                return $http({
                    method: "POST",
                    url: serviceURL.verificationCodeURL,
                    params: {phoneNum:phoneNum},
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //手机号码注册验证
            phoneRegisterHTTP : function (info) {
                return $http({
                    method: "POST",
                    url: serviceURL.phoneRegisterURL,
                    params: info ,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },



            //获取图片（伪）验证码
            imgCodeHTTP : function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.imgCodeURL,
                    params: info ,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },


            // //手机号码注册验证
            // phoneRegisterHTTP : function (info) {
            //     return $http({
            //         method: "POST",
            //         url: serviceURL.phoneRegisterURL,
            //         params: info ,
            //         headers: {
            //             "Content-Type": "application/x-www-form-urlencoded" }
            //     })
            // },



            //提交注册信息
            registerHTTP : function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.registerURL,
                    params: info ,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },


            //图片上传
            imgUploadURL : function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.imgUploadURL,
                    data:info,
                    headers: {'Content-Type': undefined},
                })
            },

            // 产品列表
            productListHTTP: function (data) {  //获取产品列表
                return $http({
                    method: "GET",
                    url: serviceURL.productListURL,
                    params: data,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 产品详情
            productHTTP: function (data) { //获取产品详情
                return $http({
                    method: "GET",
                    url: serviceURL.productURL,
                    params: data,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 支付
            payHTTP: function (data) { //获取产品详情
                return $http({
                    method: "POST",
                    url: serviceURL.payURL,
                    data: data,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            //个人信息
            personInfoHTTP: function () { //获取产品详情
                return $http({
                    method: "GET",
                    url: serviceURL.personInfoURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            //我的页面获取消息列表
            messageHTTP : function () {
                return $http({
                    method: "get",
                    url: serviceURL.messageURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },





            // 银行卡列表
            bankCardListHTTP:function (userId) { //获取产品详情
                return $http({
                    method: "GET",
                    url: serviceURL.bankCardListURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },
        }
});

// //检查是否登录
// angular.module("myApp").factory("checkUser",function () {
//     return {
//         user = JSON.parse(sessionStorage.getItem("user"))

//     }
// })

// // 封装文章上线/草稿
//     .factory("write", function (articleStatus, id) {
//     return {
//         upload: function (articleStatus,id) {
//             var article = {
//                 status: articleStatus,
//                 title: vm.title,
//                 type: vm.type,
//                 img: String(vm.imgurl),
//                 content: editor.txt.html(),
//                 url: vm.url,
//                 industry: vm.industry,
//                 createAt: vm.createAt
//             };
//             console.log(editor.txt.html());
//             if (!id) {
//                 serviceHTTP.addOfflineHTTP(article).then(function (res) {
//                     if (res.data.code == 0) {
//                         alert("新增文章成功！");
//                         $state.go("backstage.list", {}, { reload: true });
//                     }
//                     else {
//                         alert("新增文章失败。");
//                     }
//                 })
//             }
//             if (id) {
//                 serviceHTTP.writeOfflineHTTP(id, article).then(function (res) {
//                     if (res.data.code == 0) {
//                         alert("编辑文章成功！");
//                         $state.go("backstage.list", {}, { reload: true });
//                         console.log(article.content);
//                     } else {
//                         alert("编辑文章失败。");
//                     }
//                 })
//             }
        
//         }
//     }
// })