app.controller("moduleEditCtrl", function ($state,$stateParams,serviceHTTP,$timeout) {
    var vm = this;
    // title渲染
    var id = $stateParams.id //取到列表页传入的模块ID
    if (id) {
        vm.title = "模块编辑";
        // 读取该模块信息
        serviceHTTP.gModuleHTTP(id).then(function (res) {
            console.log(res);
            // 信息注入到页面上
            vm.moduleName = res.data.data.moduleName;
            vm.url = res.data.data.url;
            vm.parentModuleId = res.data.data.parentModuleId;
            vm.moduleType = res.data.data.moduleType;
        })
    }
    else{
        vm.title = "模块新增"
    }
    // 保存按钮
    vm.sure = function () {
        var data = {
            moduleName: vm.moduleName,
            url: vm.url || "",
            parentModuleId: vm.parentModuleId,
            moduleType: vm.moduleType
        }
        console.log(data);
        
        if (id) {  //编辑模块
            serviceHTTP.wModuleHTTP(id,data).then(function (res) {
                console.log(res);
                console.log(res.data.code);
                tips(res.data.code);
            })
        }
        //新增帐号
        else{
            serviceHTTP.aModuleHTTP(data).then(function (res) {
                console.log(res);
                console.log(res.data.code);
                tips(res.data.code);
            })
        }
    }
    // 提示信息
    function tips (code) {
        if (code == 0) {
            bootbox.alert({
                    title: "<strong>提示信息</strong>",
                    message: " <p style='text-align: center'>保存成功</p>",
                    buttons: {
                        ok: {
                            label: "确认",
                            className: "btn-primary"
                        }
                    }
                }),
                $state.go("backStage.module");
        }
        console.log(code);

        if (code == -7002) { //模块名字重复
            vm.repeatTips = true;
            $timeout(function () { //让提示消失
                vm.repeatTips = false;
            }, 2000)
        }
    }

})