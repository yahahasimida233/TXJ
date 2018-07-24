app.controller("accountEditCtrl", function ($scope, serviceHTTP, $state, $stateParams) {
    var vm = this;
    //拿到角色数组
    vm.admin = JSON.parse(sessionStorage.getItem("admin"));
    // 给角色数组添加是否勾选的属性ifChecked，默认为不勾选
    angular.forEach(vm.admin , function (data) {
        data.ifChecked = false
    })
    // 渲染标题
    var id = $state.params.id;
    if(id){
        vm.title = "用户编辑"
        // vm.username = $stateParams.account;   //用户名
        // 读取该用户信息
        serviceHTTP.gAccountHTTP(id).then(function (res) {
            console.log(res);
            // 信息注入到页面上
            var arr = res.data.data.userInfo;   //有权限角色数组
            vm.username = arr[0].account;   //用户名
            vm.state = arr[0].state;   //帐号状态
            // 改变已有权限角色的勾选状态
            angular.forEach(vm.admin, function (data) {
                angular.forEach(arr, function (data2) {
                    if (data.role == data2.role) {
                        data.ifChecked = true;
                    }
                })
            })
        })
    }
    else{
        vm.title = "帐号新增"
    }
    //单选角色
    vm.checkRole = function (ifChecked, index) {
        vm.admin[index].ifChecked == true ? false : true;
    }
    //监听函数
    vm.log = function () {
        console.log(vm.admin);
    }
    //保存
    vm.sure = function (x) {
        // 转成ID
        vm.result = [];
        for (i = 0; i < x.length; i++) {
            if (x[i].ifChecked == true) {
                vm.result.push(x[i].id)
            }
        }
        if (vm.result.length==0){
            bootbox.alert({
                title: "<strong>提示信息</strong>",
                message: " <p style='text-align: center'>请正确填写帐号信息。</p>",
                buttons: {
                    ok: {
                        label: "确认",
                        className: "btn-primary"
                    }
                }
            })
        }
        else{ //所有信息合法
            var data = {  //建立发送请求的对象
                account: vm.username,
                password: vm.password || "",
                roleId: vm.result,
                state: vm.state
            }
            console.log(data);
            
            if (id){
                serviceHTTP.wAccountHTTP(data,id).then(function (res) {  //发送编辑请求
                    console.log(res);
                    if (res.code == -9002) {
                        bootbox.alert({
                            title: "<strong>提示信息</strong>",
                            message: " <p style='text-align: center'>用户名已被占用，请重新输入</p>",
                            buttons: {
                                ok: {
                                    label: "确认",
                                    className: "btn-primary"
                                }
                            }
                        })
                    }
                    if (res.code == 0) {
                        bootbox.alert({
                            title: "<strong>提示信息</strong>",
                            message: " <p style='text-align: center'>编辑帐号成功</p>",
                            buttons: {
                                ok: {
                                    label: "确认",
                                    className: "btn-primary"
                                }
                            }
                        }),
                        $state.go("backStage.account");
                    }
                })
            }
            else{
                serviceHTTP.aAccountHTTP(data).then(function (res) {  //发送新增请求
                    console.log(res);
                        
                    if (res.code == 0) { //新增成功
                        bootbox.alert({
                                title: "<strong>提示信息</strong>",
                                message: " <p style='text-align: center'>编辑帐号成功</p>",
                                buttons: {
                                    ok: {
                                        label: "确认",
                                        className: "btn-primary"
                                    }
                                }
                            }),
                        $state.go("backStage.account");
                    }
                })
            }
        }
    }
})