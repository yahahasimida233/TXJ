app.controller("moduleCtrl", function ($state, $stateParams, serviceHTTP) {
    var vm = this;
    //初始化列表
    getList();
    
    function getList() {
        // 读取路由里的数据
        var data = {
            id: $stateParams.moduleId, //模块ID
            moduleName: $stateParams.moduleName, //模块名
            parentModuleId: $stateParams.parentModuleId, //父模块
            createBy: $stateParams.creater, //创建人
            goPage: $stateParams.goPage || 1,
            size: $stateParams.size || 10
        }
        console.log(data);
        // 从服务器拿到相应数据
        serviceHTTP.sModuleHTTP(data).then(function (res) {
            console.log(res);
            vm.lists = res.data.data;  //返回的数据注入列表
            // 将路由的数据注入搜索模块
            vm.moduleId = $stateParams.moduleId, //模块ID
            vm.moduleName = $stateParams.moduleName, //模块名
            vm.parentModuleId = $stateParams.parentModuleId  , //父模块
            vm.creater = $stateParams.creater, //创建人
            vm.totalItems = res.data.total //分页总条数                
            vm.page = $stateParams.goPage || 1,
            vm.size = $stateParams.size || 10
            if (res.data.code == -5003) {
                bootbox.alert({
                    title: "<strong>提示信息</strong>",
                    message: " <p style='text-align: center'>搜索的信息不存在</p>",
                    buttons: {
                        ok: {
                            label: "确认",
                            className: "btn-primary"
                        }
                }})
                $state.go("backStage.module", {
                    moduleId: '', //帐号ID
                    moduleName: '', //模块名
                    parentModuleId: '', //父模块
                    creater: '', //创建人
                    goPage: vm.page,
                    size: vm.size
                }, 
                {reload: true});
            }
        })
    }
    // 搜索
    vm.search = function () {
        $state.go("backStage.module", {
            moduleId: vm.moduleId, //帐号ID
            moduleName: vm.moduleName, //模块名
            parentModuleId: vm.parentModuleId, //父模块
            creater: vm.creater, //创建人
            goPage: vm.page,
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