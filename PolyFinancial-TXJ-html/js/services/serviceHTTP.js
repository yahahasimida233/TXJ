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
                    method: "delete",
                    url: serviceURL.logoutURL,

                    headers: { 
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户的合同的具体信息
            userContractHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userContractListURL+id,
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

            //普通手机注册短信验证码发送
            getCodeHTTP: function (phoneNum) {
                return $http({
                    method: "POST",
                    url: serviceURL.getCodeURL,
                    params: {phoneNum:phoneNum},
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //手机注册短信验证码发送
            verificationCodeHTTP: function (phoneNum) {
                return $http({
                    method: "POST",
                    url: serviceURL.verificationCodeURL,
                    params: {phoneNum:phoneNum},
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //验证手机注册短信验证码是否一致
            codeConfirmHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.codeConfirmURL,
                    params: info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //提交注册信息
            phoneRegisterHTTP : function (info) {
                return $http({
                    method: "POST",
                    url: serviceURL.registerURL,
                    params:info,
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

            // 获取首页信息
            indexHTTP: function () {
                return $http({
                    method: "GET",
                    url: serviceURL.indexURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },


            // 获取用户个人消息还有未读消息
            mineHTTP: function () {  //获取产品列表
                return $http({
                    method: "GET",
                    url: serviceURL.mineURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 获取用户个人信息
            userInfoHTTP: function () {  //获取产品列表
                return $http({
                    method: "GET",
                    url: serviceURL.userInfoURL,

                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 实名认证获取手机号验证码
            RGetCodeHTTPL: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.RGetCodeURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 实名认证验证 验证码
            RCheckCodeHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.RCheckCodeURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 实名认证第一步
            realNameStep1HTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.realNameStep1URL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 提交更换手机的请求
            newNumberHTTP: function (info) {  //获取产品列表
                return $http({
                    method: "put",
                    url: serviceURL.newNumberURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
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
            payHTTP: function (data) { 
                return $http({
                    method: "POST",
                    url: serviceURL.payURL,
                    params: data,
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

            //我的页面获取消息详情
            messageDetailHTTP : function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.messageDetailURL+info.articleType+"/"+info.id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //我的页面-我的理财-获取已投资列表
            payedHTTP : function () {
                return $http({
                    method: "get",
                    url: serviceURL.payedURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //我的页面-我的理财-续投功能
            continuedInvestmentHTTP : function (id) {
                return $http({
                    method: "put",
                    url: serviceURL.continuedInvestmentURL+id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //我的页面-我的理财-获取已续投列表
            continueHTTP: function () {
                return $http({
                    method: "get",
                    url: serviceURL.continueURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //我的页面-我的理财-获取已退出列表
            dropOutHTTP: function () {
                return $http({
                    method: "get",
                    url: serviceURL.dropOutURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //我的页面-获取交易记录列表
            tradeListHTTP : function () {
                return $http({
                    method: "get",
                    url: serviceURL.tradeListURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 银行卡列表
            bankCardListHTTP:function (userId) { 
                return $http({
                    method: "GET",
                    url: serviceURL.bankCardListURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },
            
            // 解绑银行卡
            unCardHTTP: function (card) { 
                return $http({
                    method: "DELETE",
                    url: serviceURL.bankCardListURL + card,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 设置-修改密码
            settingCPHTTP:function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.settingCPURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 设置-修改密码
            feedBackHTTP:function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.feedBackURL,
                    params:info,
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