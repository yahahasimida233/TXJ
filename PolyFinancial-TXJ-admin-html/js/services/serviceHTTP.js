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

            //更换手机号
            newPhoneNumHTTP : function (info) {
                return $http({
                    method: "PUT",
                    url: serviceURL.phoneRegisterURL,
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
            userListHTTP: function (user) {
                return $http({
                    method: "get",
                    url: serviceURL.userListURL,
                    params: user,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // //用户管理-用户搜索
            // userSearchHTTP: function (userInfo) {
            //     return $http({
            //         method: "get",
            //         url: serviceURL.userListURL,
            //         params: userInfo,
            //         headers: {
            //             "Content-Type": "application/x-www-form-urlencoded" }
            //     })
            // },

            //获取用户详细信息
            userDetailedHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userDetailedURL+id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //冻结或者解冻用户
            userFrozenHTTP: function (id) {
                return $http({
                    method: "post",
                    url: serviceURL.userFrozenURL+id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户的交易记录列表
            userTradeHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userTradeURL+id,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户的合同列表
            userContractListHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userContractListURL+id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取用户的合同的具体信息
            userContractHTTP: function (id,b) {
                return $http({
                    method: "get",
                    url: serviceURL.userContractURL+id,
                    params: {contractId:b},
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 债权管理
            debtHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.debtURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 债权详情
            debtDetailedHTTP: function (info) {
                return $http({
                    method: "get",
                    url: serviceURL.debtNewURL+info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // 提交债权编辑
            debtEditHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.debtNewURL+info.id,
                    data: info,
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
                    url: serviceURL.debtDeleteURL+id,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //获取匹配所需的信息
            matchingHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.matchingURL+id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            //匹配完成
            matchOverHTTP: function (info) {
                return $http({
                    method: "put",
                    url: serviceURL.matchOverURL,
                    params:info,
                    headers: {
                        "Content-Type": "application/json" }
                })
            },

            // 产品管理列表
            productHTTP: function (info) {
                return $http({
                    method: "get",
                    params:info,
                    url: serviceURL.productURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },

            // // 产品具体信息
            // productDetailHTTP: function (info) {
            //     return $http({
            //         method: "get",
            //         url: serviceURL.productDetailURL,
            //         params:{id:info},
            //         headers: {
            //             "Content-Type": "application/x-www-form-urlencoded"
            //         }
            //     })
            // },

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
                    method: "put",
                    url: serviceURL.porductGroundingURL+info,
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
                    url: serviceURL.productDeleteURL+info,
                    params:{id:info},
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
                    url: serviceURL.bannerDetailedURL+info,
                    params:{id:info},
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
                    method: "put",
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
                    url: serviceURL.feedbackReplyURl+info.id,
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
                method: "put",
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
        // 帐号模块
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
                method: "DELETE",
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }
            })
        },
        aAccountHTTP: function (data) {  //新增帐号
            return $http({
                url: serviceURL.aAccountURL,
                method: "POST",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }
            })
        },
        gAccountHTTP: function (id) {   //编辑帐号页面获取帐号信息
            return $http({
                url: serviceURL.gAccountURL + id,
                method: "GET",
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }
            })
        },
        wAccountHTTP: function (data,id) {  //编辑帐号
            return $http({
                url: serviceURL.wAccountURL + id,
                method: "PUT",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }                                        
            })
        },
        // 模块管理
        sModuleHTTP: function (data) {   //搜索模块
            return $http({
                url: serviceURL.sModuleURL,
                method: "GET",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }                                        
            })
        },

        dModuleHTTP: function (id) {    // 删除模块
            return $http({
                url: serviceURL.ModuleURL + id,
                method: "DELETE",
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }
            })
        },

        gModuleHTTP: function (id) {     //编辑模块页面获取模块信息
            return $http({
                url: serviceURL.ModuleURL + id,
                method: "GET",
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }
            })
        },

        wModuleHTTP: function (id,data) {    // 编辑模块
            return $http({
                url: serviceURL.ModuleURL + id,
                method: "PUT",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }
            })
        },
        
        aModuleHTTP: function (data) {     // 新增模块
            return $http({
                url: serviceURL.ModuleURL,
                method: "POST",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from-urlencoded"
                }
            })
        },

        // 角色模块
        sRoleHTTP: function (data) {   //角色搜索
            return $http({
                url: serviceURL.sRoleURL,
                method: "GET",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from=urlencoded"
                }
            })
        },

        dRoleHTTP: function (id) {   //删除角色
            return $http({
                url: serviceURL.roleURL + id,
                method: "DELETE",
                headers: {
                    "Conten-Type": "application/x-www-from=urlencoded"
                }
            })
        },

        gRoleHTTP: function (id) {   //进入编辑页获取该角色信息
            return $http({
                url: serviceURL.roleURL + id,
                method: "GET",
                headers: {
                    "Conten-Type": "application/x-www-from=urlencoded"
                }                
            })
        },

        wRoleHTTP: function (data,id) {  //角色编辑
            return $http({
                url: serviceURL.roleURL + id,
                method: "PUT",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from=urlencoded"
                }
            })
        },

        aRoleHTTP: function (data) {    //角色新增
            return $http({
                url: serviceURL.roleURL,
                method: "POST",
                params: data,
                headers: {
                    "Conten-Type": "application/x-www-from=urlencoded"
                }                
            })
        }
    }
})

.factory("sideBar",function () {  //特用与编辑角色时候的层级关系处理 ，因为字段不统一
    return function (e) {
        var sideBar = []; //用于存储处理过后的数组对象
            for (var i = 0; i < e.length; i++) { //遍历每一个元素
                if (e[i].parentModuleId === 0) { //当为父级元素时开始判断
                    var obj = {}; //创建一个对象用于存储父级标签名，子级标签的信息
                    obj.sideBarTitle = e[i].moduleName;
                    obj.id = e[i].id;
                    obj.sideBarContent = []; //为对象添加属性
                    for (var j = 0; j < e.length; j++) { //开始第二次遍历，
                        if (e[j].parentModuleId === e[i].id) { //当元素的parentd和  父级元素id一致时
                            obj.sideBarContent.push(e[j]) //把这个元素添加到对象的一条属性中去，用于第二次repeat
                        }
                    }
                    sideBar.push(obj); //把obj添加到sideBar中去。
                }
            }
        return sideBar;
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