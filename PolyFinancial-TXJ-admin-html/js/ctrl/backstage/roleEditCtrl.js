app.controller("roleEditCtrl", function ($state, $stateParams, serviceHTTP, sideBar,$timeout) {
    var vm = this;
    var id = $stateParams.id;
    // 获取模块数组
    var data = {
        id: '', //模块ID
        moduleName: '', //模块名
        parentModuleId: '', //父模块
        createBy: '', //创建人
        goPage: '',
        size: 10000
    }
    // 从服务器拿到相应数据
    serviceHTTP.sModuleHTTP(data).then(function (res) {
        vm.sideBar = res.data.data;
        console.log(res);
        console.log(vm.sideBar);
        
        // 给模块添加是否勾选属性
        angular.forEach(vm.sideBar, function (data) {
            data.ifChecked = false
        });
        if (id) {
            vm.title = "角色编辑"
            // 读取该角色信息
            serviceHTTP.gRoleHTTP(id).then(function (res) {
                vm.roleName = res.data.data[0].role;    //注入角色名
                vm.arr = res.data.data;   //有权限角色数组
                console.log(vm.arr);
                // 将有权限的角色渲染上
                angular.forEach(vm.sideBar, function (data) {
                    angular.forEach(vm.arr, function (data2) {
                        if (data.moduleName == data2.moduleName) {
                            data.ifChecked = true;
                        }
                    })
                })
                console.log(vm.sideBar);
                // 处理成层级关系
                vm.sideBar = sideBar(vm.sideBar);
                //默认不折叠               
                vm.show = true;
                $timeout(function () {
                    vm.show = false;
                },3000) 
            })            
        }
        else{
            vm.title = "角色新增";
            vm.sideBar = sideBar(vm.sideBar);
        }        
        console.log(vm.sideBar);
    })
    
    //监听函数
    vm.log = function () {
        console.log(vm.sideBar);
    }
    // 全选
    vm.checkAll = function(ifChecked){
        //改变全选按钮的状态
        vm.ifChecked = !vm.ifChecked;
        //循环操作数据，将每条数据里面的ifChecked值跟全选状态的值对应起来
        angular.forEach(vm.sideBar, function (data) {
            angular.forEach(data.sideBarContent,function (data2) {
                data2.ifChecked = vm.ifChecked
            })
        });
        // vm.show = !vm. show;
        if (vm.ifChecked == true) {
            vm.show = true;
            $timeout(function () {
                vm.show = false;
            }, 3000)
        }     
        if (vm.ifChecked == false) {
            vm.show = false;
        }   
        console.log(vm.ifChecked);
    };
    
    //保存
    vm.sure = function (x) {
        console.log(vm.sideBar);
        // 转成ID
        vm.result = [];
        // 遍历两次数组，取出嵌套的模块id
        angular.forEach(vm.sideBar, function (data) {
            angular.forEach(data.sideBarContent,function (data2) {
                if(data2.ifChecked == true){
                    vm.result.push(data2.id)
                }
            })
        });
        console.log(vm.result);
        if (vm.result.length == 0) {
            bootbox.alert({
                title: "<strong>提示信息</strong>",
                message: " <p style='text-align: center'>请正确填写角色信息。</p>",
                buttons: {
                    ok: {
                        label: "确认",
                        className: "btn-primary"
                    }
                }
            })
        } 
        else { //所有信息合法
            // 将数组转为字符串格式上传
            vm.resultS = (vm.result).join(",");
            console.log(vm.resultS);
            var data = {
                role: vm.roleName,
                moduleId: vm.resultS
            }
            if (id) {
                console.log(id);
                
                serviceHTTP.wRoleHTTP(data,id).then(function (res) {
                    console.log(res);
                    tips(res.data.code);
                })
            }
            else{
                serviceHTTP.aRoleHTTP(data).then(function (res) {
                    console.log(res);
                    tips(res.data.code);
                })
            }
        }
    }
    // 编辑/新增成功消息提示
    function tips(code) {
        if (code == -8006) { //角色名重复
            bootbox.alert({
                title: "<strong>提示信息</strong>",
                message: " <p style='text-align: center'>角色名已被占用，请重新输入</p>",
                buttons: {
                    ok: {
                        label: "确认",
                        className: "btn-primary"
                    }
                }
            })
        }
        if (code == 0) { //编辑、新增成功
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
            $state.go("backStage.role");
        }
    }
})