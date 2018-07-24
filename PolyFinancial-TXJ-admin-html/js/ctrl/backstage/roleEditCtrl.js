app.controller("roleEditCtrl",function ($state,$stateParams, serviceHTTP) {
    var vm = this;
    var id = $stateParams.id;
    // 获取模块数组
    vm.sideBar = JSON.parse(sessionStorage.getItem("sideBar"))
    console.log(vm.sideBar);

    if(id){
        vm.title = "角色编辑"
        // 读取该角色信息
        serviceHTTP.gModuleHTTP(id).then(function (res) {
            console.log(res);
            
        })
    }
    else{
        vm.title = "角色新增"
    }
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
        vm.show = !vm.show;        
    };
    //保存
    vm.sure = function (x) {
        // 转成ID
        vm.result = [];
        // 遍历两次数组，取出嵌套的模块id
        angular.forEach(vm.sideBar, function (data) {
            angular.forEach(data.sideBarContent,function (data2) {
                if(data2.ifChecked == true){
                    vm.result.push(data2.moduleId)
                }
            })
        });
        console.log(vm.result);
     
        

        // if (vm.result.length==0){
        //     bootbox.alert({
        //         title: "<strong>提示信息</strong>",
        //         message: " <p style='text-align: center'>请正确填写帐号信息。</p>",
        //         buttons: {
        //             ok: {
        //                 label: "确认",
        //                 className: "btn-primary"
        //             }
        //         }
        //     })
        // }
        // else{ //所有信息合法
        //     var data = {  //建立发送请求的对象
        //         account: vm.username,
        //         password: vm.password || "",
        //         roleId: vm.result,
        //         state: vm.state
        //     }
        //     console.log(data);
        // }
    }
})