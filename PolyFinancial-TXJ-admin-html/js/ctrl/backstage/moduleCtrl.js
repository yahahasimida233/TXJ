app.controller("moduleCtrl", function ($state, $stateParams, serviceHTTP) {
    var vm = this;

    var lists = {
    "total": 15,
    "code": 0,
    "data": 
        [{
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "业务管理",
            "updateAt": 1531478404326,
            "parentModuleID": 0,
            "moduleID": 1,
            "url": "",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "用户管理",
            "updateAt": 1531478404326,
            "parentModuleID": 1,
            "moduleID": 2,
            "url": "backStage.user",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "债权管理",
            "updateAt": 1531478404326,
            "parentModuleID": 1,
            "moduleID": 3,
            "url": "backStage.debt",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "产品管理",
            "updateAt": 1531478404326,
            "parentModuleID": 1,
            "moduleID": 4,
            "url": "backStage.product",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "运营管理",
            "updateAt": 1531478404326,
            "parentModuleID": 0,
            "moduleID": 5,
            "url": "",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "banner图",
            "updateAt": 1531478404326,
            "parentModuleID": 5,
            "moduleID": 6,
            "url": "backStage.banner",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "鼎力推荐",
            "updateAt": 1531478404326,
            "parentModuleID": 5,
            "moduleID": 7,
            "url": "backStage.recommend",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "消息管理",
            "updateAt": 1531478404326,
            "parentModuleID": 5,
            "moduleID": 8,
            "url": "backStage.message",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "意见反馈",
            "updateAt": 1531478404326,
            "parentModuleID": 5,
            "moduleID": 9,
            "url": "backStage.feedback",
            "createAt": 1531478404326
        },
        {
            "createBy": "admin",
            "moduleType": "web",
            "updateBy": "admin",
            "moduleName": "后台管理",
            "updateAt": 1531478404326,
            "parentModuleID": 0,
            "moduleID": 10,
            "url": "",
            "createAt": 1531478404326
        }
    ],
    "message": "success"
};
vm.lists = lists.data;

    //初始化列表
    getList();
    
    function getList() {
        // 读取路由里的数据
        var data = {
            moduleID: $stateParams.moduleID, //模块ID
            moduleName: $stateParams.moduleName, //模块名
            parentModuleId: $stateParams.parentModuleId, //父模块
            createBy: $stateParams.creater, //创建人
            goPage: $stateParams.goPage,
            size: $stateParams.size
        }
        console.log(data);
        
        // serviceHTTP.sModuleHTTP(data).then(function (res) {
        //     console.log(res);
        //     vm.lists = res.data;  //返回的数据列表

            vm.moduleId = $stateParams.moduleId, //模块ID
            vm.moduleName = $stateParams.moduleName, //模块名
            vm.parentModuleId = $stateParams.parentModuleId, //父模块
            vm.creater = $stateParams.creater, //创建人
            vm.goPage = $stateParams.goPage,
            vm.size = $stateParams.size
            // vm.admin = res.data.roles; // 返回的角色类型
        // })
    }
    // vm.lists = lists.data.accountList;
    // vm.admin = lists.data.roles;
    // var admin = lists.data.roles;
    // 搜索
    vm.search = function () {
        $state.go("backStage.module", {
            moduleId: vm.moduleId, //帐号ID
            moduleName: vm.moduleName, //模块名
            parentModuleId: vm.parentModuleId, //父模块
            creater: vm.creater, //创建人
            goPage: vm.goPage,
            size: vm.size
        },
        {reload: true})
    }
    // 重置按钮
    vm.reSet = function () {
        $state.go("backStage.module",{
            moduleId: undefined, //帐号ID
            moduleName: undefined, //角色名
            parentModuleId: undefined, //用户名
            creater: undefined, //创建人
            goPage: 1,
            size: 10
        },
        {reload: true})
    }
    // 删除模块
    vm.delete = function (id) {
        bootbox.confirm({
            title: '<strong> 操作提示 </strong>',
            message: "<p style='text-align: center'>您确认要删除吗？删除后当前模块功能将会被永久消失</p>",
            buttons: {
                confirm: {
                    label: '确认'
                },
                cancel: {
                    label: '取消'
                }
            },
            callback: function (result) {
            if (result == true) {
                serviceHTTP.dModuleHTTP(id).then(function successCallback(res) {
                    // 请求成功执行代码
                    if (res.code == 0) { //需检查
                        bootbox.alert({
                            title: "<strong>提示信息</strong>",
                            message: "<span style='text-align: center'>删除成功</sapn>",
                            buttons: {
                                ok: {
                                    label: "确认",
                                    className: "btn-primary"
                                }
                            }
                        });
                        $state.reload('backStage.module');
                    }
                    function errorCallback(res) {
                        bootbox.alert({
                            title: "<strong>提示信息</strong>",
                            message: " <p style='text-align: center'>凉凉... 删除失败</p>",
                            buttons: {
                                ok: {
                                    label: "确认",
                                    className: "btn-primary"
                                }
                            }
                        })
                    }
                })
            }
        }})
    };
    
})