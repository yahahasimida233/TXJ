app.controller("accountCtrl", function ($scope, $state, $stateParams, serviceHTTP) {
    var vm = this;
    //初始化列表
    getList();

    function getList() {
        // 读取路由里的数据
        var data = {
            id: $stateParams.adminId, //帐号ID
            role: $stateParams.role, //角色名
            account: $stateParams.username, //用户名
            createBy: $stateParams.creater, //创建人
            goPage: $stateParams.goPage,
            size: $stateParams.size
        }
        console.log(data);
        // 从服务器拿到相应数据
        serviceHTTP.sAccountHTTP(data).then(function (res) {  
            console.log(res);
            if (res.data.code == 0) {
                vm.lists = res.data.data.accountList;  //返回的数据列表
                vm.admin = res.data.data.roles; // 返回的角色类型
                // 将角色信息存起来
                var admin = vm.admin.slice(1);
                console.log(admin);
                sessionStorage.setItem("admin", JSON.stringify(admin));
                
                vm.adminId = $stateParams.adminId, //帐号ID
                vm.role = $stateParams.role, //角色名
                vm.username = $stateParams.username, //用户名
                vm.creater = $stateParams.creater, //创建人
                vm.goPage = $stateParams.goPage,
                vm.size = $stateParams.size
            }
            if (res.data.code == -5003) {
                bootbox.alert({
                    title: "<strong>提示信息</strong>",
                    message: " <p style='text-align: center'>用户不存在</p>",
                    buttons: {
                        ok: {
                            label: "确认",
                            className: "btn-primary"
                        }
                }})
                $state.go("backStage.account", {
                    adminId: vm.adminId, //帐号ID
                    role: vm.role, //角色名
                    username: vm.username, //用户名
                    creater: vm.creater, //创建人
                    goPage: vm.goPage,
                    size: vm.size
                    },
                    { reload: true }
                )
            }
        });        
    }

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
                    serviceHTTP.dAccountHTTP(id).then(function (res) {
                        // 请求成功执行代码
                        if (res.data.code == 0) {    
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
                    )}
                )
                }
            }
        })
    };
})