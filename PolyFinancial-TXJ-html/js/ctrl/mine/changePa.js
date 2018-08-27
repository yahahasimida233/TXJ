app.controller("changePaCtrl",function ($http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    if(vm.loginOrNot === 0){
        $state.go('login');
        return false;
    }

    // 点击提交新旧密码
    vm.changePassword  = function(){
        // 验证新密码是否符合输入规则
        if(vm.newP.match(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/) && vm.oldP.length <= 18 && vm.oldP.length >= 6){
        }else{
            alertt('新密码的格式不对呢，请重新输入');
            vm.newP = vm.sureP = undefined;
            return false;
        }
        // 验证密码是否符合输入规则
        if(vm.oldP.match(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/) && vm.oldP.length <= 18 && vm.oldP.length >= 6){
        }else{
            alertt('旧密码的格式不对呢，请重新输入');
            vm.oldP = undefined;
            return false;
        }
        // 首次输入新密码是否一致
        if(vm.sureP != vm.newP){
            alertt('两次新密码不一致哦请重新输入');
            vm.sureP = vm.newP =undefined;
            return false;
        }else if(vm.oldP == vm.newP){
            alertt('新旧密码不能一样哦');
            vm.oldP =vm.newP =vm.sureP =undefined;
            return false;
        }
        var info = {
            oldPwd: vm.oldP,
            newPwd: vm.newP
        };

        // 提交新旧密码的请求
        serviceHTTP.settingCPHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                alertt('修改成功，请重新登录');
                sessionStorage.clear();
                $state.go('login');
            }else if(response.data.code == -9009) {
                alertt('旧密码输入错误，请重新输入');
            }else {
                bootbox.alert(response.data.message)
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }

});