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
                    method: "POST",
                    url: serviceURL.logoutURL,

                    headers: { 
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //手机短信验证码
            verificationCodeHTTP: function (phoneNum) {
                return $http({
                    method: "POST",
                    url: serviceURL.verificationCodeURL,
                    params: phoneNum ,
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

            //图片上传
            imgUploadURL : function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.imgUploadURL,
                    data:info,
                    headers: {'Content-Type': undefined},
                })
            },

            //获取用户列表
            userListHTTP: function () {
                return $http({
                    method: "get",
                    url: serviceURL.userListURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //用户管理-用户搜索
            userSearchHTTP: function (userInfo) {
                return $http({
                    method: "get",
                    url: serviceURL.userListURL,
                    params: userInfo,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户详细信息
            userDetailedHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userDetailedURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //冻结或者解冻用户
            userFrozenHTTP: function (id) {
                return $http({
                    method: "post",
                    url: serviceURL.userFrozenURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户的交易记录列表
            userTradeHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userTradeURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户的合同列表
            userContractListHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userContractListURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户的合同的具体信息
            userContractHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userContractURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 债权管理
            debtHTTP: function () {
                return $http({
                    method: "get",
                    url: serviceURL.debtURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 债权编辑
            debtEditHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.debtNewURL,
                    params: info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 债权新增
            debtNewHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.debtNewURL,
                    params: info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 债权删除
            debtDeleteHTTP: function (id) {
                return $http({
                    method: "delete",
                    url: serviceURL.debtDeleteURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 产品管理列表
            productHTTP: function () {
                return $http({
                    method: "get",
                    url: serviceURL.productURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 产品具体信息
            productDetailHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.productDetailURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 提交产品编辑
            productEditHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.productEditURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 新增产品
            productNewHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.productNewURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 上下架产品
            porductGroundingHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.porductGroundingURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 删除产品
            productDeleteHTTP: function (info) {
                return $http({
                    method: "delete",
                    url: serviceURL.productDeleteURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // banner管理列表
            bannerHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.bannerURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // banner具体信息
            bannerDetailedHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.bannerDetailedURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 提交banner编辑
            bannerEditHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.bannerEditURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 新增banner
            bannerNewHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.bannerNewURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // banner上下架
            bannerGroundingHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.bannerGroundingURL+info,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 删除banner
            bannerDeleteHTTP: function (info) {
                return $http({
                    method: "delete",
                    url: serviceURL.bannerDeleteURL+info,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 鼎力推荐管理列表
            recommendHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.recommendURl,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 产品具体信息
            recommendDetailedHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.recommendDetailedURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 提交产品编辑
            recommendEditHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.recommendEditURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 新增产品
            recommendNewHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.recommendNewURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 上下架产品
            recommendroundingHTTP: function (info) {
                return $http({
                    method: "post",
                    url: serviceURL.recommendGroundingURL+info,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 删除产品
            recommendDeleteHTTP: function (info) {
                return $http({
                    method: "delete",
                    url: serviceURL.recommendDeleteURL+info,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 意见反馈管理列表获取
            feedbackHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.feedbackURl,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 意见反馈详情
            feedbackDetailedHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.feedbackDetailedURl+info,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 意见反馈详情
            feedbackDeleteHTTP: function (info) {
                return $http({
                    method: "delete",
                    url: serviceURL.feedbackDeleteURl+info,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },

            // 意见反馈回复
            feedbackReplyHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.feedbackReplyURl+info,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            },


            // 消息管理列表
            messageHTTP: function (info) {
            return $http({
                method: "get",
                url: serviceURL.messageURl,
                params:info,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded" }
            })
        },

        // 产品具体信息
        messageDetailedHTTP: function (info) {
            return $http({
                method: "get",
                url: serviceURL.messageDetailedURL+info,
                params:info,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        },

        // 提交消息编辑
        messageEditHTTP: function (info) {
            return $http({
                method: "put",
                url: serviceURL.messageEditURL,
                params:info,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        },

        // 新增消息
        messageNewHTTP: function (info) {
            return $http({
                method: "post",
                url: serviceURL.messageNewURL,
                params:info,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        },

        // 取消消息推送
        messageCancelHTTP: function (info) {
            return $http({
                method: "post",
                url: serviceURL.messageCancelURL+info,
                params:info,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        },

        // 删除消息
        messageDeleteHTTP: function (info) {
            return $http({
                method: "delete",
                url: serviceURL.messageDeleteURL+info,
                params:info,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        },


            // 后台管理模块
            changePwHTTP: function (password) { //更改密码
                return $http({
                    url: serviceURL.changePwURL,
                    method: "PUT",
                    params: password,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            sAccountHTTP: function (account) {   //搜索帐号
                return $http({
                    url:serviceURL.sAccountURL,
                    method: "GET",
                    params: account,
                    headers: {"Conten-Type": "application/x-www-from-urlencoded"}
                })
            },
            dAccountHTTP: function (id) { //删除帐号
                return $http({
                    url: serviceURL.dAccountURL + id,
                    method: "DELETE ",
                    headers: {
                        "Conten-Type": "application/x-www-from-urlencoded"
                    }
                })
            }
        }
})

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