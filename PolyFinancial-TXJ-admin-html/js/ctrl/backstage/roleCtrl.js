app.controller("roleCtrl",function ($state, $stateParams, serviceHTTP) {
    var vm = this;
    //初始化列表
    getList();
    
    function getList() {
        // 获取搜索框、分页条数数据
        vm.roleId = $stateParams.roleId, //模块ID
        vm.roleName = $stateParams.roleName, //角色名
        vm.creater = $stateParams.creater, //创建人
        vm.updateBy = $stateParams.updateBy, //父模块
        vm.goPage = $stateParams.goPage || 1,
        vm.size = $stateParams.size || 10
        // 读取路由里的数据用于请求
        var data = {
            id: $stateParams.roleId, //模块ID
            role: $stateParams.roleName, //模块名
            createBy: $stateParams.creater, //创建人
            updateBy: $stateParams.updateBy, //父模块
            page: $stateParams.goPage,
            size: $stateParams.size
        }
        console.log(data);
        // 获取搜索列表
        serviceHTTP.sRoleHTTP(data).then(function (res) {
            console.log(res);
            vm.lists = res.data.data //返回的数据列表
            vm.totalItems = res.data.total //分页总条数                
            vm.page = $stateParams.goPage || 1,
            vm.size = $stateParams.size || 10
            if (res.data.code == -8001) {
                bootbox.alert({
                    title: "<strong>提示信息</strong>",
                    message: " <p style='text-align: center'>搜索的信息不存在</p>",
                    buttons: {
                        ok: {
                            label: "确认",
                            className: "btn-primary"
                        }
                }})
                $state.go("backStage.role", {
                    roleId: undefined, //帐号ID
                    roleName: undefined, //角色名
                    creater: undefined, //用户名
                    updateBy: undefined, //创建人
                }, 
                    { reload: true}
            );}
        })
    }
    // 搜索
    vm.search = function () {
        $state.go("backStage.role", {
            roleId: vm.roleId,      //帐号ID
            roleName: vm.roleName,  //角色名
            creater: vm.creater,    //创建人
            updateBy: vm.updateBy,  //更新人
            goPage: vm.page,
            size: vm.size
            }, 
            { reload: true}
        )
    }
    //重置按钮
    vm.reSet = function () {
        $state.go("backStage.role", {
            roleId: undefined, //帐号ID
            roleName: undefined, //角色名
            creater: undefined, //用户名
            updateBy: undefined, //创建人
            }, 
            { reload: true}
        )
    }   
    // 删除模块
    vm.delete = function (id) {
        bootbox.confirm({
            title: '<strong> 操作提示 </strong>',
            message: "<p style='text-align: center'>您确认要删除吗？删除后拥有当前角色权限的账号将无法登录。</p>",
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
                    serviceHTTP.dRoleHTTP(id).then(function successCallback(res) {
                        console.log(res);
                        
                        // 请求成功执行代码
                        if (res.code == 0) { 
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
                            $state.go('backStage.role', {}, { reload: true} );
                            // $state.reload("backStage.role")
                        }
                        else{
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
                            }}
                    })
                }
            }
        })
    };

})