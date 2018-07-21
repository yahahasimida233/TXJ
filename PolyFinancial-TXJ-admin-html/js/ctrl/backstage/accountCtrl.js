app.controller("accountCtrl", function ($scope, $state, $stateParams, serviceHTTP,$timeout) {
    var vm = this;
    // var account = {
    //     id = undefined,
    //     role = undefined,
    //     account = undefined,
    //     createBy = undefined
    // };
    
    vm.data = {
        id: vm.adminId, //帐号ID
        role: vm.role, //角色名
        account: vm.username,  //用户名
        createBy: vm.creater,  //创建人
        page: vm.goPage,
        size: vm.size
    }

    var lists = {
    "code": 0,
    "data": {
        "total": 5,
        "roles": [
            {
                "id": 1,
                "role": "超级管理员",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            }, 
            {
                "id": 2,
                "role": "管理员",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            }, 
            {
                "id": 3,
                "role": "运营",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            }, 
            {
                "id": 4,
                "role": "客服",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            }
        ],
        "accountList": [
            {
                "createAt": 1531470437788,
                "role": "超级管理员",
                "updateBy": "admin",
                "edit": false,
                "updateAt": 1531490017342,
                "id": 10,
                "state": 0,
                "account": "admin",
                "createBy": "admin"
            },
            {
                "createAt": 1531472969997,
                "role": "管理员",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531472969997,
                "id": 11,
                "state": 0,
                "account": "张三",
                "createBy": "admin"
            },
            {
                "createAt": 1531472981636,
                "role": "运营",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531472981636,
                "id": 12,
                "state": 0,
                "account": "李四",
                "createBy": "admin"
            },
            {
                "createAt": 1531473015987,
                "role": "运营",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531473015987,
                "id": 13,
                "state": 0,
                "account": "王五",
                "createBy": "admin"
            },
            {
                "createAt": 1531473015987,
                "role": "客服",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531473015987,
                "id": 13,
                "state": 0,
                "account": "王五",
                "createBy": "admin"
            }
        ]
    },
    "message": "success"
}



// console.log(vm.params.role);    
// if ($stateParams.role) {
    // vm.role = $stateParams.role;
    // }
    
    //初始化列表
    getList();

    function getList() {
        // 读取路由里的数据
        // var data = {
        //     id: $stateParams.adminId, //帐号ID
        //     role: $stateParams.role, //角色名
        //     account: $stateParams.username, //用户名
        //     createBy: $stateParams.creater, //创建人
        //     goPage: $stateParams.goPage,
        //     size: $stateParams.size
        // }
        // console.log(data);
        
        // serviceHTTP.sAccountHTTP(data).then(function (res) {
        //     console.log(res);
        //     vm.lists = res.data.accountList;  //返回的数据列表
        vm.adminId = $stateParams.adminId, //帐号ID
        vm.role = $stateParams.role, //角色名
        vm.username = $stateParams.username, //用户名
        vm.creater = $stateParams.creater, //创建人
        vm.goPage = $stateParams.goPage,
        vm.size = $stateParams.size
        //     // vm.admin = res.data.roles; // 返回的角色类型
        //     console.log(vm.lists); 
        //     console.log(vm.admin);
        //     console.log(vm.params.role);
        // });        
    }
    vm.lists = lists.data.accountList;
    vm.admin = lists.data.roles;
    var admin = lists.data.roles;
    sessionStorage.setItem("admin", JSON.stringify(admin));

    // vm.goPage = $stateParams.goPage
    // vm.admin = res.data.roles; // 返回的角色类型
    // console.log(vm.admin);

    // 搜索
    vm.search = function () {
        $state.go("backStage.account",{
            adminId: vm.adminId, //帐号ID
            role: vm.role, //角色名
            username: vm.username, //用户名
            creater: vm.creater, //创建人
            goPage: vm.goPage,
            size: vm.size
        },
        {reload: true})
    }
    //清空
    vm.reSet = function () {
         $state.go("backStage.account",{
            adminId: undefined, //帐号ID
            role: undefined, //角色名
            username: undefined, //用户名
            creater: undefined, //创建人
            goPage: 1,
            size: 10
        },
        {reload: true})
    }
    // 删除帐号
    vm.delete = function (id) {
        bootbox.confirm({
            title: '<strong> 操作提示 </strong>',
            message: "<p style='text-align: center'>您确认要删除吗？删除后此账号将无法登陆。</p>",
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
                    serviceHTTP.dAccountHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        if (response.data.code == 0) {    //需检查
                            bootbox.alert({
                                title: "<strong>提示信息</strong>",
                                    message: "<span style='text-align: center'>删除成功</sapn>",
                                    buttons: {
                                        ok: {
                                            label: "确认",
                                            className: "btn-primary"
                                        }
                            }});
                            $state.reload('backStage.account');
                        } 
                    }, 
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
                        }
                    )})
                }
            }
        })
    };
})